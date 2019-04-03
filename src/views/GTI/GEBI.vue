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
        <FormItem prop="industry" label="Industries">
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
        industry:'',
        year: '',
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
      columns: [{
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: 'Year',
          key: 'year_type'
        },
        {
          title: 'Exporting Countries',
          key: 'e_country'
        },
        {
          title: 'Importing Counties',
          key: 'i_country'
        },
        {
          title: 'Industries',
          key: 'industry'
        },
        {
          title: 'Gross export(Unit: million US. Dollar)',
          key: 'g_export',
          sortable: true,
        },
      ],
      countryOptions: [],
      industryOptions: [],
      yearOptions: []
    };
  },
  mounted() {
    this.countryOptions = util.getCountry();
    this.industryOptions = util.getIndustry();
    this.yearOptions = util.getYearOptions();
  },
  methods: {
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
