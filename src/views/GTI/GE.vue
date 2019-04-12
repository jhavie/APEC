<template>
  <div>
    <div v-if="this.industryOptions.length>0 && this.countryOptions.length>0 && this.countryOptions2.length>0" style="background:#eee;padding: 20px;">
      <Form ref="formData" :model="formData" :rules="ruleInline" inline>
        <FormItem prop="e_country" label="APEC Economy">
          <Select
            v-model="formData.e_country"
            placeholder="Select"
            :transfer="true"
            style="width:200px"
            filterable
            clearable
          >
            <Option
              v-for="item in countryOptions"
              :value="item.value"
              :disabled="optionDisabled"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem prop="i_country" label="Trading Partner">
          <Select
            v-model="formData.i_country"
            placeholder="Select"
            :transfer="true"
            style="width:200px"
            @on-change="changeOption"
            filterable
            clearable
            multiple
          >
            <Option
              v-for="item in countryOptions2"
              :value="item.value"
              :disabled="optionDisabled2"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem prop="industry" label="Industry">
          <Select v-model="formData.industry" style="width:500px" placeholder="Select">
            <!-- <Option
                v-for="item in industryOptions"
                :value="item.value"
                :disabled="optionDisabled"
                :key="item.value"
              >{{ item.label }}</Option> -->
            <OptionGroup label="Agriculture, hunting, forestry and fishing">
              <Option
                v-for="item in industryOptions[0]"
                :value="item.en_type"
                :key="item.en_type"
              >{{ item.industry }}</Option>
            </OptionGroup>
            <OptionGroup label="Mining and quarrying">
              <Option
                v-for="item in industryOptions[1]"
                :value="item.en_type"
                :key="item.en_type"
              >{{ item.industry }}</Option>
            </OptionGroup>
            <OptionGroup label="Mining and quarrying">
              <Option
                v-for="item in industryOptions[2]"
                :value="item.en_type"
                :key="item.en_type"
              >{{ item.industry }}</Option>
            </OptionGroup>
            <OptionGroup label="Mining and quarrying">
              <Option
                v-for="item in industryOptions[3]"
                :value="item.en_type"
                :key="item.en_type"
              >{{ item.industry }}</Option>
            </OptionGroup>
          </Select>
          <!-- <Cascader 
              :data="industryOptions" 
              style="width:400px"
              placeholder="Select" 
              v-model="formData.industry">
          </Cascader>-->
          <!-- <Select
              v-model="formData.industry"
              placeholder="Select"
              :transfer="true"
              style="width:300px"
              filterable
              clearable
              multiple
            >
              <Option
                v-for="item in industryOptions"
                :value="item.value"
                :disabled="optionDisabled"
                :key="item.value"
              >{{ item.label }}</Option>
          </Select>-->
        </FormItem>
        <FormItem prop="year" label="Year">
          <Select
            v-model="formData.year"
            placeholder="Select"
            :transfer="true"
            style="width:150px"
            filterable
            multiple
            clearable
          >
            <Option
              v-for="item in yearOptions"
              :value="item.value"
              :disabled="optionDisabled"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem class="searchBtn">
          <Button @click="handleReset()">Reset</Button>
          <Button type="info" @click="handleSubmit()">Search</Button>
        </FormItem>
      </Form>
    </div>
    <div style="background:#eee;padding: 20px;margin-top: -30px;height:780px">
      <Card :bordered="false">
        <Tabs v-model="tabValue" :animated="false">
          <TabPane label="Table" name="Table">
            <div class="exportBtn">
              <!-- <head>{{this.echartOption.title.text}}-{{this.echartOption.title.subtext}}</head> -->
              <Button type="primary" @click="exportData" :disabled="btnDisabled">
                <Icon type="ios-download-outline"></Icon>Export data
              </Button>
              <!-- <Button
                type="primary"
                size="mini"
                :loading="btnLoading"
                @click="exportAllData"
                :disabled="btnDisabled"
              >
                <Icon type="ios-download-outline"></Icon>Export all source data
              </Button>-->
            </div>
            <Table
              border
              ref="tableData"
              :loading="tableLoading"
              no-data-text="No data to display"
              :columns="columns"
              :data="tableData"
              height="500"
            >
              <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
              </template>
              <!-- <template slot-scope="{ row, index }" slot="action">
                <Button type="error" size="small" @click="post()">Download</Button>
              </template>-->
            </Table>
            <div class="tablePage">
              <Page
                @on-change="pageChanged"
                :current.sync="formData.page"
                :page-size="15"
                :total="total"
                show-total
              >
                <slot>Total {{total}} items</slot>
              </Page>
            </div>
          </TabPane>
          <TabPane label="Chart" name="Chart">
            <div style="float:right;margin-right:15px">
              <RadioGroup v-model="echartType" type="button" size="large" @on-change="changeRadio">
                <Radio label="3D" :disabled="bar3DDisabled"></Radio>
                <Radio label="Line" :disabled="false"></Radio>
                <Radio label="Bar" :disabled="barDisabled"></Radio>
                <Radio label="Pie" :disabled="pieDisabled"></Radio>
                <!-- <Radio label="Tree" :disabled="treeDisable"></Radio> -->
                <!-- <Radio label="TreeMap" :disabled="treeMapDisabled"></Radio> -->
              </RadioGroup>
            </div>
            <!-- <Button
              style="right: 0;position: absolute;top:50%"
              @click="drawer = !drawer"
              type="Info"
              shape="circle"
              icon="ios-arrow-back"
            ></Button>-->
            <div ref="echart" class="demo-spin-container">
              <div>
                <Spin fix size="large" v-if="chartLoading"></Spin>
              </div>
            </div>
            <!-- <div>
              <Drawer
                title="Info"
                :closable="true"
                v-model="drawer"
                :mask="false"
                :transfer="false"
                :inner="true"
                width="620px"
              >
                <Collapse v-model="collapse" simple>
                  <Panel name="1">
                    Economies
                    <p slot="content">
                      <CellGroup>
                        <Cell
                          v-for="(item, index) in options[1]"
                          :title="item.value"
                          :extra="item.label"
                          :key="index"
                        />
                      </CellGroup>
                    </p>
                  </Panel>
                  <Panel name="2">
                    Industries
                    <p slot="content">
                      <CellGroup>
                        <Cell
                          v-for="(item, index) in options[2]"
                          :title="item.value"
                          :extra="item.label"
                          :key="index"
                        />
                      </CellGroup>
                    </p>
                  </Panel>
                </Collapse>
              </Drawer>
            </div>-->
          </TabPane>
        </Tabs>
      </Card>
    </div>
  </div>
</template>

<script>
import ajax from "@/util.js";
import { yearOptions, echart3DOption, echartLineOption,echartBarOption,echartPieOption } from "@/data.js";
import { mapActions, mapState } from "vuex";
export default {
  //Gross Export
  name: "GE",
  data() {
    return {
      formData: {
        fid: 0,
        pid: 0,
        e_country: "",
        i_country: "",
        industry: [],
        year: "",
        page: 1
      },
      tableData: [],
      total: 0,
      echartType: "",
      tabValue: "Table",
      optionDisabled: false,
      optionDisabled2: false,
      btnDisabled: true,
      pieDisabled: false,
      barDisabled: false,
      treeMapDisabled: false,
      bar3DDisabled: false,
      tableLoading: false,
      btnLoading: false,
      chartLoading: false,
      ruleInline: {
        e_country: [
          {
            required: true,
            message: "Please fill in the APEC Economy",
            trigger: "blur"
          }
        ],
        i_country: [
          {
            required: true,
            type: "array",
            message: "Please fill in the Trading Partner.",
            trigger: "blur"
          }
        ],
        industry: [
          {
            required: true,
            message: "Please fill in the Industry.",
            trigger: "blur"
          }
        ],
        year: [
          {
            required: true,
            type: "array",
            message: "Please fill in the Year.",
            trigger: "blur"
          }
        ]
      },
      columns: [
        {
          type: "index",
          width: 60,
          align: "center"
        },
        {
          title: "Year",
          key: "year_type",
          // filters:[
          //   {
          //     label:'2005',
          //     value:2005
          //   },{
          //     label:'2012',
          //     value:2012
          //   }
          // ],
          //   filterMultiple: false,
          //       filterMethod (value, row) {
          //           if (value === 2005) {
          //               return row.year_type === 2005;
          //           } else if (value === 2012) {
          //               return row.year_type === 2012;
          //           }
          //       }
        },
        {
          title: "APEC Economy",
          key: "e_country"
        },
        {
          title: "Trading Partner",
          key: "i_country"
        },
        {
          title: "Value(Unit: million US. Dollar)",
          key: "value",
          sortable: true
        }
      ],
      countryOptions: [],
      countryOptions2: [],
      industryOptions: [
        // { value: 'beijing', label: '北京', children: [ { value: 'gugong', label: '故宫' } ] },
        // { value: 'jiangsu', label: '江苏', children: [ { value: 'nanjing', label: '南京' } ] }
      ],
      yearOptions: [],
      mergeOption: {}
    };
  },
  mounted() {
    this.getIndustry();
    this.getCountry();
    this.yearOptions = yearOptions;
    // this.industryOptions = this.industry;
    // this.countryOptions = [...this.country];
    // this.countryOptions.shift();
    // this.countryOptions2 = this.country;
  },
  computed: {
    ...mapState(["pid", "fid", "page", "industry", "country"])
  },
  methods: {
    ...mapActions(["changepid", "changefid", "changepage"]),
    // optionsChange(val) {
    //   this.optionDisabled = val.length > 4;
    // },
    pageChanged() {
      this.handleSubmit();
    },
    // changeSelect(val){
    //   if(val.length>1){
    //     this.pieDisabled = false;
    //     this.barDisabled = true;
    //     this.treeMapDisabled = true;
    //     this.bar3DDisabled = false;
    //   }else if(val.length === 0){
    //     this.pieDisabled = true;
    //     this.barDisabled = true;
    //     this.treeMapDisabled = true;
    //     this.bar3DDisabled = true;
    //   }else{
    //     this.pieDisabled = false;
    //     this.barDisabled = false;
    //     this.treeMapDisabled = false;
    //     this.bar3DDisabled = false;
    //   }
    // },
    // changeSelect2(val){
    //   if(val.length>)
    // },
    handleSubmit() {
      let that = this;
      this.$refs["formData"].validate(valid => {
        if (valid) {
          ajax({
            method: "POST",
            url: global.DEV_HOST+'/getTestTableData?',
            params: this.formData
          })
            .then(function(response) {
              let rp_data = response.data.data;
              that.tableData = rp_data.data;
              that.total = rp_data.total;
              that.btnDisabled = false
              that.get3Ddata();
            })
            .catch(function(error) {
              console.log(error);
            });
          // this.$Message.success('Success!');
        } else {
          // this.$Message.error('Fail!');
        }
      });
    },
    getIndustry() {
      let that = this
      ajax({
          url: global.DEV_HOST + '/getIndustry',
      })
      .then(function (response) {
          // let data = response.data.data
          let newData = [
            [ { 'en_type':'I1', 'industry':'Agriculture, hunting, forestry and fishing' } ], [ { 'en_type':'I2', 'industry':'Mining and quarrying' } ], [ { 'en_type':'I3', 'industry':'Food products, beverages and tobacco'}, { 'en_type':'I4', 'industry':'Iextiles and textile products,leather and footwear'}, { 'en_type':'I5', 'industry':'Wood and products of wood and cork'}, { 'en_type':'I6', 'industry':'Pulp, paper, paper products, printing and publishing'}, { 'en_type':'I7', 'industry':'Coke, refined petroleum products and nuclear fuel'}, { 'en_type':'I8', 'industry':'Chemicals'}, { 'en_type':'I9', 'industry':'Rubber and plastics products'}, { 'en_type':'I10', 'industry':'Other non-metallic mineral products'}, { 'en_type':'I11', 'industry':'Basic metals'}, { 'en_type':'I12', 'industry':'Fabricated metal products, except machinery and equipment'}, { 'en_type':'I13', 'industry':'Machinery and equipment, nec'}, { 'en_type':'I14', 'industry':'Computer, electronic and optical equipment'}, { 'en_type':'I15', 'industry':'Electrical machinery and apparatus, nec'}, { 'en_type':'I16', 'industry':'Motor vehicles, trailers and semi-trailers'}, { 'en_type':'I17', 'industry':'Other transport equipment'}, { 'en_type':'I18', 'industry':'Manufacturing nec  recycling (include Furniture)' } ], [ { 'en_type':'I19', 'industry':'Electricity, gas and water supply' }, { 'en_type':'I20', 'industry':'Construction' }, { 'en_type':'I21', 'industry':'Wholesale and retail tarde' }, { 'en_type':'I22', 'industry':'Hotels and restaurants' }, { 'en_type':'I23', 'industry':'Iransport and storage', }, { 'en_type':'I24', 'industry':'Post and Telecommunications' }, { 'en_type':'I25', 'industry':'Finance and insurance' }, { 'en_type':'I26', 'industry':'Real estate activities' }, { 'en_type':'I27', 'industry':'Renting of Machinery and equipment' }, { 'en_type':'I28', 'industry':'Computer and related activities' }, { 'en_type':'I29', 'industry':'R&D and other business activities' }, { 'en_type':'I30', 'industry':'Public administration and defence, compulsory social security' }, { 'en_type':'I31', 'industry':'Education' }, { 'en_type':'I32', 'industry':'Health and social work' }, { 'en_type':'I33', 'industry':'Other community, social and personal services' }, { 'en_type':'I34', 'industry':'Private households with employed persons & extra-territorial organizations & bodies' } ]
          ]
          // let echartIndustry = []
          // newData = Object.assign([], data);
          // data.forEach((item, index) => {
          //   item.forEach(()=>{
          //     console.log(item);
          //       // newData[index].push({
          //       //     value: item.en_type,
          //       //     label: item.industry
          //       // })
          //     // echartIndustry.push(item.en_type)
          //     })
          // });
          // console.log(data);
          // that.setindustry(newData);
          that.industryOptions = newData;
      }).catch(function (error) {
          console.log(error);
      });
    },
    getCountry() {
      let that = this
      ajax({
          url: global.DEV_HOST + '/getCountry',
      })
      .then(function (response) {
          let data = response.data.data
          let newData = []
          // let echartIndustry = []
          data.forEach((item, index) => {
              newData.push({
                  value: item.country,
                  label: item.en_name
              });
          })
          // that.setcountry(newData);
          that.countryOptions = [...newData];
          that.countryOptions.shift();
          that.countryOptions2 = newData;
      }).catch(function (error) {
          console.log(error);
      });
    },
    handleReset(){
      this.$refs['formData'].resetFields();
    },
    get3Ddata() {
      let data = this.formData;
      let that = this;
      ajax({
        method: "POST",
        url: global.DEV_HOST + "/get3DTestData",
        params: data
      })
        .then(function(response) {
          let rp_data = response.data;
          rp_data.data.unshift(rp_data.correspond_arr);
          that.mergeOption = {
            xAxis3D: {
              // data: rp_data.xAxis,
              name: rp_data.correspond_arr[0]
            },
            yAxis3D: {
              // data: rp_data.yAxis,
              name: rp_data.correspond_arr[1]
            },
            dataset: {
              source: rp_data.data
            },
            visualMap: {
              max: rp_data.max,
              min: rp_data.min
            }
          };
          that.init3DChart();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    get2Ddata(type) {
      let data = this.formData;
      let that = this;
      ajax({
        method: "POST",
        url: global.DEV_HOST + "/getLineData",
        params: data
      })
        .then(function(response) {
          // console.log(response);
          let rp_data = response.data
          // 'echart'+type+'Option'.dataset.source = rp_data.data
          // console.log(`echart${type}Option`.dataset.source);
          // `echart${type}Option`.dataset.source = rp_data.data
          echartLineOption.dataset.source = rp_data.data
          echartBarOption.dataset.source = rp_data.data
          echartPieOption.dataset.source = rp_data.data
          that.init2DChart(type);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    init3DChart() {
      let myChart = this.$echarts.init(this.$refs["echart"]);
      let newOptions = this.$obj.merge(echart3DOption, this.mergeOption);
      myChart.setOption(newOptions, true);
    },
    init2DChart(type) {
      let myChart = this.$echarts.init(this.$refs["echart"]);
      // let newOptions = this.$obj.merge(echart2DOption, {});
      if(type==='Line'){
        myChart.setOption(echartLineOption, true);
      }else if(type ==='Bar'){
        myChart.setOption(echartBarOption, true);
      }else if(type ==='Pie'){
        myChart.setOption(echartPieOption, true);
      }
    },
    exportData() {
    //   let data = this.formData
    //   ajax({
    //       method: 'GET',
    //       url: global.DEV_HOST + '/export',
    //       params: data,
    //       responseType: 'blob'
    //   }).then(function (response) {
    //       let url = window.URL.createObjectURL(response.data);
    //       // window.location.href = url;
    //       var link = document.createElement('a');
    //       // link.download = that.text + ' ' + that.subtext;
    //       link.href = url;
    //       link.click();
    //       window.URL.revokeObjectURL(link.href)
    //   }).catch(function (error) {
    //       console.log(error);
    //   });
    // },
    this.$refs.tableData.exportCsv({
        filename: 'Gross trade indicators(Unit: million $)'+'Gross exports ($): by APEC economy, trading partner, industry, year'
      });
    },
    changeRadio(val) {
      if (val === "3D") {
        this.get3Ddata();
      } else {
        this.get2Ddata(val);
      }
    },
    changeOption(val){
      this.optionDisabled2 = val[0] ==='All' 
    }
  }
};
</script>

<style>
</style>
