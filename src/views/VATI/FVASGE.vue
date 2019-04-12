<template>
  <div>
    <div style="background:#eee;padding: 20px;">
      <Form ref="formData" :model="formData" inline>
        <FormItem prop="e_country" label="APEC Economy">
          <Select
            v-model="formData.e_country"
            placeholder="Select"
            :transfer="true"
            style="width:300px"
            filterable
            clearable
            multiple
          >
            <Option
              v-for="item in countryOptions"
              :value="item.value"
              :disabled="optionDisabled"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select>
        </FormItem>
        <!-- <FormItem prop="i_country" label="Trading Partner">
          <Select
            v-model="formData.i_country"
            placeholder="Select"
            :transfer="true"
            style="width:300px"
            filterable
            clearable
            multiple
          >
            <Option
              v-for="item in countryOptions"
              :value="item.value"
              :disabled="optionDisabled"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select>
        </FormItem> -->
        <FormItem prop="industry" label="Industry">
          <Select
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
          </Select>
        </FormItem>
        <FormItem prop="year" label="Year">
          <Select
            v-model="formData.year"
            placeholder="Select"
            :transfer="true"
            style="width:300px"
            filterable
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
                <Icon type="ios-download-outline"></Icon>Export current page source
                data
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
                  <Radio label="Pie"></Radio>
                  <Radio label="Bar"></Radio>
                  <Radio label="Tree"></Radio>
                  <Radio label="TreeMap"></Radio>
                  <Radio label="3D"></Radio>
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
import util from "@/util.js";
import { echart3DOption , echart2DOption } from "@/data.js";
import { mapActions, mapState } from "vuex";
export default {
  //Gross Export
  name: "GE",
  data() {
    return {
      formData: {
        fid: 0,
        pid: 0,
        e_country:'',
        // i_country:'',
        year: "",
        page: 1
      },
      tableData: [],
      total: 0,
      echartType:'',
      tabValue: "Table",
      optionDisabled: false,
      btnDisabled: true,
      tableLoading: false,
      btnLoading: false,
      chartLoading: false,
      columns: [
        {
          type: "index",
          width: 60,
          align: "center"
        },
        {
          title: "Year",
          key: "year_type"
        },
        {
          title: "APEC Economy",
          key: "e_country"
        },
        {
          title: "Value(Unit: million US. Dollar)",
          key: "value",
          sortable: true
        }
      ],
      countryOptions: [],
      industryOptions:[],
      yearOptions: [],
      mergeOption:{},
    };
  },
  mounted() {
    this.countryOptions = util.getCountry();
    this.industryOptions = util.getIndustry();
    this.yearOptions = util.getYearOptions();
  },
  computed: {
    ...mapState(['pid', 'fid', 'page']),
  },
  methods: {
    ...mapActions(['changepid','changefid','changepage']),
    // optionsChange(val) {
    //   this.optionDisabled = val.length > 4;
    // },
    pageChanged() {
      this.handleSubmit();
    },
    handleSubmit(){
      let that = this;
      this.$ajax({
          method: 'POST',
          url: global.DEV_HOST + '/getData',
          headers: {
              "Content-Type": "application/x-www-form-urlencoded"
          },
          params: this.formData
      }).then(function (response) {
          let rp_data = response.data.data;
          that.tableData = rp_data.data;
          that.total = rp_data.total;
      })
      .catch(function (error) {
          console.log(error);
      });
    },
    get3Ddata() {
        let data = this.formData
        let that = this
        this.$ajax({
            method: 'POST',
            url: global.DEV_HOST + '/get3Ddata',
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            params: data
          }).then(function (response) {
            let rp_data = response.data
            rp_data.data.unshift(rp_data.correspond_arr)
            that.mergeOption = {
              xAxis3D :{
                data:rp_data.xAxis,
                name:rp_data.correspond_arr[0],
              },
              yAxis3D :{
                data:rp_data.yAxis,
                name:rp_data.correspond_arr[1],
              },
              dataset:{
                source:rp_data.data
              },
              visualMap :{
                max:rp_data.max,
                min:rp_data.min
              }
            }
            that.init3DChart();
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      get2Ddata(type) {
        let data = this.formData
        let that = this
        this.$ajax({
            method: 'POST',
            url: global.DEV_HOST + '/get'+ type + 'data',
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            params: data
          }).then(function (response) {
            // console.log(response);
            // let rp_data = response.data
            // rp_data.data.unshift(rp_data.correspond_arr)
            that.init2DChart(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      init3DChart(){
          let myChart = this.$echarts.init( this.$refs['echart'] );
          let newOptions = this.$obj.merge(echart3DOption,this.mergeOption);
          myChart.setOption(newOptions,true);
      },
      init2DChart(option){
        let myChart = this.$echarts.init( this.$refs['echart'] );
        // let newOptions = tlefthis.$obj.merge(echart2DOption,{});
        myChart.setOption(option,true);
      },
      exportData() {
        util.exportData(this.$refs.tableData,'test');
      },
      changeRadio(val) {
        if(val==='3D'){
          this.get3Ddata();
        }else{
          this.get2Ddata(val);
        }
      }
  }
};
</script>

<style>
</style>
