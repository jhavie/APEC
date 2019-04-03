<template>
  <div>
    <i-menu active-name="0-0" :open-names="['1']" @on-select="selectMenu">
      <Submenu name="1">
        <template slot="title">Gross Trade Indicators</template>
        <Menu-item
          :name="item.name"
          v-for="(item,index) in GTI"
          :key="index"
          @click.native="change(item.alias)"
        >{{item.label}}</Menu-item>
      </Submenu>
      <Submenu name="2">
        <template slot="title">Value Added Trade Indicators</template>
        <Menu-item
          :name="item.name"
          v-for="(item,index) in VATI"
          :key="index"
          @click.native="change(item.alias)"
        >{{item.label}}</Menu-item>
      </Submenu>
      <Submenu name="3">
        <template slot="title">Gross Export Decomposition Based Indicators</template>
        <Menu-item
          :name="item.name"
          v-for="(item,index) in GEDBI"
          :key="index"
          @click.native="change(item.alias)"
        >{{item.label}}</Menu-item>
      </Submenu>
      <Submenu name="4">
        <template slot="title">Global Production</template>
        <Menu-item
          :name="item.name"
          v-for="(item,index) in GP"
          :key="index"
          @click.native="change(item.alias)"
        >{{item.label}}</Menu-item>
      </Submenu>
    </i-menu>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "LeftMenu",
  data() {
    return {
      GTI: [
        {
          label: "Gross Export",
          alias: "GE",
          name: "0-0"
        },
        {
          label: "Gross Export by industry",
          alias: "GEBI",
          name: "0-1"
        },
        {
          label: "Gross Export Of Intermediate Products by industry",
          alias: "GEOIPBI",
          name: "0-2"
        },
        {
          label: "Gross Export Of Final Products by industry",
          alias: "GEOFPBI",
          name: "0-3"
        },
        {
          label: "Trade Balance",
          alias: "TB",
          name: "0-4"
        }
      ],
      VATI: [
        {
          label: "Value Added Export",
          alias: "VAE",
          name: "1-0"
        },
        {
          label: "Value Added Export by industry",
          alias: "VAEBI",
          name: "1-1"
        },
        {
          label: "Value Added Trade Balance",
          alias: "VATB",
          name: "1-2"
        }
      ],
      GEDBI: [
        {
          label: "Domestic Value Added Export",
          alias: "DVAE",
          name: "2-0"
        },
        {
          label: "Foreign Value Added Export",
          alias: "FVAE",
          name: "2-1"
        },
        {
          label: "Foreign Value Added Export by country",
          alias: "FVAEBC",
          name: "2-2"
        },
        {
          label: "Double Counted Domestic Value Added Export",
          alias: "DCDVAE",
          name: "2-3"
        },
        {
          label: "Double Counted Foreign Value Added Export",
          alias: "DCFVAE",
          name: "2-4"
        }
      ],
      GP: [
        {
          label: "Interdependence Indicators",
          alias: "II",
          name: "3-0"
        },
        {
          label: "Gvc Income Indicators",
          alias: "GII",
          name: "3-1"
        }
      ]
    };
  },
  computed: {
    ...mapState(['pid', 'fid', 'page']),
  },
  methods: {
    ...mapActions(['changepid','changefid','changepage']),
    change(val){
      this.changepage(val)
      // console.log(val);
      // console.log(this.pid);
      // console.log(this.fid);
    },
    selectMenu(val) {
      let arr = val.split('-');
      this.changepid(Number(arr[0]));
      this.changefid(Number(arr[1]))
      // this.pid = Number(arr[0])
      // this.fid = Number(arr[1])
    },
  },
};
</script>

<style>
</style>
