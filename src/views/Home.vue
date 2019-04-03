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
            <component :is="getComponent"></component>
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
// import { GE, GEBI } from '@/views/GTI'
import GE from '@/views/GTI/GE.vue'
import GEBI from '@/views/GTI/GEBI.vue'


export default {
  name: 'home',
  components: { Navigation ,LeftMenu ,GE ,GEBI},
  data() {
    return {
      // components:'GE',
    }
  },
  computed: {
    getComponent(){
      return 'GE'
    }
  },
  mounted() {
    // let item = localStorage.getItem('item');
    // console.log(item);
    // let i = () => import(`@/views/GTI/GEBI.vue`)
    // console.log(i);
    // this.component = () => import(`@/views/GEBI/${val}`) 
  },
}
</script>
