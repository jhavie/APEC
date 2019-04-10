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
            <component :is="component"></component>
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
import { mapActions, mapState } from "vuex";
// import { GE, GEBI } from '@/views/GTI'
// import GE from '@/views/GTI/GE.vue'
// import GEBI from '@/views/GTI/GEBI.vue'
// import GEOFPBI from '@/views/GTI/GEOFPBI.vue'
// import GEOIPBI from '@/views/GTI/GEOIPBI.vue'
// import TB from '@/views/GTI/TB.vue'

export default {
  name: 'home',
  components: { Navigation ,LeftMenu},
  data() {
    return {
      component: null,

      // component
      // components:'GE',
    }
  },
  computed: {
    ...mapState(['pid', 'fid', 'page']),
    getComponent(){
      if(this.page ===''){
        return 'GE'
      }
      return this.page;
      // return 'GE'
    }
  },

  watch: {
    getComponent: {
      handler: function(val, oldVal) {
        this.component = () => import(`./GTI/${val}`)
      },
      immediate: true
    }
  },
  mounted() {
  },
}
</script>
