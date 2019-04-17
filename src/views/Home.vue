<template>
  <div class="home">
      <Layout>
        <Header class="header">
          <navigation></navigation>
        </Header>
        <Layout>
          <div class="layout-nav">
            <Sider hide-trigger>
              <LeftMenu></LeftMenu>
            </Sider>
          </div>
          <Content>
            <!-- <router-link tag="li" to="/foo"/> -->
            <component v-if="this.industry.length>0 && this.country.length>0" :is="component"></component>
          </Content>
        </Layout>
      </Layout>
      <!-- <Button type="primary">Primary</Button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/framework/Navigation.vue'
import LeftMenu from '@/framework/LeftMenu.vue'
import ajax from "@/util.js";
import { mapActions, mapState } from "vuex";
// import GE from '@/views/GTI/GE.vue'

export default {
  name: 'home',
  components: { Navigation ,LeftMenu },
  data() {
    return {
      component: null,
      path:'',
      // loading:true,
      // component
      // components:'GE',
    }
  },
  computed: {
    ...mapState(['pid', 'fid', 'page','industry','country']),
    getComponent(){
      // console.log(this.industry);
      // console.log(this.country);
      // if(!this.industry && !this.country){
        if(this.page ===''){
          return 'GTI_GE'
        }
        return this.page;
    }
  },

  watch: {
    getComponent: {
      handler: function(val) {
        let arr = val.split('_')
        this.component = () => import(`./${arr[0]}/${arr[1]}`)
      },
      immediate: true
    }
  },
  mounted() {
    this.getIndustry();
    this.getCountry();
    // this.getMargorSector();
  },
  methods: {
    ...mapActions(['setindustry','setcountry']),
    getIndustry() {
      let that = this
      ajax({
          url: global.DEV_HOST + '/getIndustry',
      })
      .then(function (response) {
          // let data = response.data.data
          let data = [
            // [ { 'en_type':'I1', 'industry':'Agriculture, hunting, forestry and fishing' } ], [ { 'en_type':'I2', 'industry':'Mining and quarrying' } ], [ { 'en_type':'I3', 'industry':'Food products, beverages and tobacco'}, { 'en_type':'I4', 'industry':'Iextiles and textile products,leather and footwear'}, { 'en_type':'I5', 'industry':'Wood and products of wood and cork'}, { 'en_type':'I6', 'industry':'Pulp, paper, paper products, printing and publishing'}, { 'en_type':'I7', 'industry':'Coke, refined petroleum products and nuclear fuel'}, { 'en_type':'I8', 'industry':'Chemicals'}, { 'en_type':'I9', 'industry':'Rubber and plastics products'}, { 'en_type':'I10', 'industry':'Other non-metallic mineral products'}, { 'en_type':'I11', 'industry':'Basic metals'}, { 'en_type':'I12', 'industry':'Fabricated metal products, except machinery and equipment'}, { 'en_type':'I13', 'industry':'Machinery and equipment, nec'}, { 'en_type':'I14', 'industry':'Computer, electronic and optical equipment'}, { 'en_type':'I15', 'industry':'Electrical machinery and apparatus, nec'}, { 'en_type':'I16', 'industry':'Motor vehicles, trailers and semi-trailers'}, { 'en_type':'I17', 'industry':'Other transport equipment'}, { 'en_type':'I18', 'industry':'Manufacturing nec  recycling (include Furniture)' } ], [ { 'en_type':'I19', 'industry':'Electricity, gas and water supply' }, { 'en_type':'I20', 'industry':'Construction' }, { 'en_type':'I21', 'industry':'Wholesale and retail tarde' }, { 'en_type':'I22', 'industry':'Hotels and restaurants' }, { 'en_type':'I23', 'industry':'Iransport and storage', }, { 'en_type':'I24', 'industry':'Post and Telecommunications' }, { 'en_type':'I25', 'industry':'Finance and insurance' }, { 'en_type':'I26', 'industry':'Real estate activities' }, { 'en_type':'I27', 'industry':'Renting of Machinery and equipment' }, { 'en_type':'I28', 'industry':'Computer and related activities' }, { 'en_type':'I29', 'industry':'R&D and other business activities' }, { 'en_type':'I30', 'industry':'Public administration and defence, compulsory social security' }, { 'en_type':'I31', 'industry':'Education' }, { 'en_type':'I32', 'industry':'Health and social work' }, { 'en_type':'I33', 'industry':'Other community, social and personal services' }, { 'en_type':'I34', 'industry':'Private households with employed persons & extra-territorial organizations & bodies' } ]
          ]
          let newData = [[],[],[],[]];
          data = JSON.parse(JSON.stringify(response.data.data));
          let i = 0;
          data.forEach((item,index)=>{
            if(newData[i].length>0 && newData[i][0].majorSector !== item.majorSector){
              i++;
            }
            newData[i].push(item);
          })
          console.log(newData);
          that.setindustry(newData);
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
          let newData = [];
          // let echartIndustry = []
          data.forEach((item, index) => {
              newData.push({
                  value: item.country,
                  label: item.en_name
              });
          })
          that.setcountry(newData);
      }).catch(function (error) {
          console.log(error);
      });
    },
    getMargorSector(){
      let that = this
      ajax({
          url: '/getMargorSector',
      })
      .then(function (response) {
          // let data = response.data.data
          // let newData = []
          // let echartIndustry = []
          // newData = Object.assign([], data);
          // data.forEach((item, index) => {
          //     newData.push({
          //         value: item.en_type,
          //         label: item.industry
          //     })
          //     // echartIndustry.push(item.en_type)
          // });
          console.log(response);
          // that.setindustry(newData);
      }).catch(function (error) {
          console.log(error);
      });
    }
  },
}
</script>
