<template>
  <div>
    <div style="background:#eee;padding: 20px;">
      <Form ref="formData" :model="formData" inline>
        <FormItem prop="e_country" label="Exporting Countries">
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
        <FormItem prop="i_country" label="Importing Countries">
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
        </FormItem>
        <FormItem prop="year" label="year">
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
              <!-- <Button type="primary" size="mini" @click="exportData" :disabled="btnDisabled">
                <Icon type="ios-download-outline"></Icon>Export current page source
                data
              </Button> -->
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
                    Countries
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
        i_country:'',
        year: "",
        page: 1
      },
      tableData: [],
      total: 0,
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
          title: "Exporting Countries",
          key: "e_country"
        },
        {
          title: "Importing Counties",
          key: "i_country"
        },
        {
          title: "Value(Unit: million US. Dollar)",
          key: "value",
          sortable: true
        }
      ],
      countryOptions: [],
      yearOptions: [],
      echart3DOption: {
        title: {
          text: 'Economy(Unit: million $)',
          subtext: 'Parterner',
          subtextStyle: {
            color: '#000',
            fontSize: 15,
          }
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          data: {
            legendData: ['I1', 'I2', 'I3', 'I4']
          }

          // selected: data.selected
        },
        tooltip: {
          trigger: 'item',
        },
        visualMap: {
          type: 'piecewise',
          max: 20,
          min: 10,
          dimension: 2,
          inRange: {
            color: ['#313695','#4575b4','#74add1','#abd9e9','#e0f3f8','#ffffbf','#fee090','#fdae61','#f46d43','#d73027','#a50026']
          }
        },
        dataset: {
          // dimensions: [
          //     'Exporting Country','Importing Country','Value','Year'
          // ],
          source: []
        },
        yAxis3D: {
          type: 'category',
          name: 'Importing Countries',
          //Importing Countries Y
          data: ['BRN', 'ROW'],
          nameTextStyle: {
            fontSize: 14
          }
        },
        xAxis3D: {
          type: 'category',
          name: 'Exporting Countries',
          //Exporting Countries
          data: ['AUS'],
          nameTextStyle: {
            fontSize: 14
          }
        },
        zAxis3D: {
          type: 'value',
          data: []
        },
        grid3D: {
          boxWidth: 100,
          boxHeight: 100,
          boxDepth: 100,
          viewControl: {
            // projection: 'orthographic'
          },
          light: {
            main: {
              intensity: 1.2,
              shadow: true
            },
            ambient: {
              intensity: 0.3
            }
          }
        },
        series: [{
          type: 'bar3D',
          stack: 'Value',
          shading: 'lambert',
          itemStyle: {
            opacity: 0.4
          },
          encode: {
            // tooltip:[0,1,2,3]
            // itemName:2
            x: 0,
            y: 1,
            z: 2,
          },
          label: {
            textStyle: {
              fontSize: 12,
              borderWidth: 1
            }
          },
          emphasis: {
            label: {
              textStyle: {
                fontSize: 20,
                color: '#900'
              },
              formatter: (params => {
                return params.value[2]
              })
            },
            itemStyle: {
              color: '#000'
            }
          }
        }]
      },
    };
  },
  mounted() {
    this.countryOptions = util.getCountry();
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
      // this.changepid();
      // this.$store.dispatch("changepid", 1)
      // console.log(this.$store.pid);
      this.handleSubmit();
    },
    handleSubmit(){
      let that = this;
      let mychart = this.$echarts.init( this.$refs['echart'] );
      console.log(mychart);
      // mychart.setOption(data,true);
      this.$ajax({
          method: 'POST',
          url: global.DEV_HOST,
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
    exportData() {
      util.exportData(this.$refs.tableData,'test');
    }
  }
};
</script>

<style>
</style>
