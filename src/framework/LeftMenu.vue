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
        <template slot="title">GDP Production Indicators</template>
        <Menu-item
          :name="item.name"
          v-for="(item,index) in GDPPI"
          :key="index"
          @click.native="change(item.alias)"
        >{{item.label}}</Menu-item>
      </Submenu>
      <Submenu name="4">
        <template slot="title">Final Production Indicators</template>
        <Menu-item
          :name="item.name"
          v-for="(item,index) in FPI"
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
          // Gross exports
          label: "Gross Exports",
          alias: "GE",
          name: "0-0"
        },
        {
          // Gross imports
          label: "Gross Imports",
          alias: "GI",
          name: "0-1"
        },
        {
          // Bilateral trade balance, gross
          label: "Bilateral trade balance, gross",
          alias: "TBG",
          name: "0-2"
        }
      ],
      VATI: [
        // a.Value added exports ($): by APEC economy, trading partner, industry, year 
        // b.Domestic content in intermediate exports that eventually return home ($): by APEC economy, industry, year
        // c.Foreign value added content in gross exports ($): by APEC economy, industry, year
        // d.Value added exports as a share of gross exports (%): by APEC economy, industry, year
        // e.Domestic content in intermediate exports that eventually return home as a share of gross exports (%): by APEC economy, industry, year
        // f.Foreign value added as a share of gross exports (%): by APEC economy, industry, year
        // g.Bilateral trade balance, value added ($): by APEC economy, trading partner, year
        // h.Indicator selection choices:
        {
          // Value added exports
          label: "Value Added Exports",
          alias: "VAE",
          name: "1-0"
        },
        {
          //Domestic content in intermediate exports that eventually return home
          label: "Domestic Content in Intermediate exports that eventually return home",
          alias: "DCRH",
          name: "1-1"
        },
        {
          //Domestic content in intermediate exports that eventually return home
          // Domestic content in gross exports (EXGR_DC, $)
          label: "Domestic Content in Intermediate Exports that Eventually Return Home",
          alias: "DCIEERH",
          name: "1-2"
        },
        {
          //Foreign value added content in gross exports
          // Domestic content as a share of gross exports (EXGR_DCSH, %)
          label: "Foreign Value Added Content in Gross Exports",
          alias: "FVACGE",
          name: "1-3"
        },
        {
          //Value added exports as a share of gross exports
          //Domestic content returning home as a share of gross exports (EXGR_VS1SH, %)
          label: "Value Added Exports as a Share of Gross Exports",
          alias: "VAESGE",
          name: "1-4"
        },
        {
          //Domestic content in intermediate exports that eventually return home as a share of gross exports
          //Foreign content as a share of gross exports (EXGR_VSSH, %)
          label: "Domestic Content in Intermediate Exports that Eventually Return Home as a Share of Gross Exports",
          alias: "DCIEERHSGE",
          name: "1-5"
        },
        {
          // Foreign value added as a share of gross exports
          //Trade balance, value added (BALVA, $)
          label: "Trade Balance, Value Added (BALVA, $)",
          alias: "BTBVA",
          name: "1-6"
        },
      ],
      GDPPI: [
        {
          //GDP production of final product exports
          label: "GDP Production of Final Product Exports",
          alias: "GPFPE",
          name: "2-0"
        },
        {
          //GDP production of final product exports, as a share of GDP
          label: "GDP Production of Final Product Exports, As a Share of GDP",
          alias: "GPFPEASG",
          name: "2-1"
        },
        {
          //GDP production of intermediate product exports
          label: "GDP Production of Intermediate Product Exports",
          alias: "FVAEBC",
          name: "2-2"
        },
        {
          //GDP production of intermediate product exports, as a share of GDP
          label: "GDP Production of Intermediate Product Exports, as a Share Of GDP",
          alias: "DCDVAE",
          name: "2-3"
        },
        {
          //GDP production of intermediate product exports, for importer’s direct absorption
          label: "GDP Production of Intermediate Product Exports, for Importer’s Direct Absorption",
          alias: "GPIPEFIDA",
          name: "2-4"
        },
        {
          //GDP production of intermediate product exports, for importer’s direct absorption, as a share of GDP
          label: "GDP Production of Intermediate Product Exports, for Importer’s Direct Absorption, As a Share of GDP",
          alias: "GPIPEFIDAASG",
          name: "2-5"
        },
        {
          //GDP production of intermediate product exports, for further cross-border processing
          label: "GDP production of intermediate product exports, for further cross-border processing",
          alias: "DCFVAE",
          name: "2-6"
        },
        {
          //GDP production of intermediate product exports, for further cross-border process, as a share of GDP
          label: "GDP Production of Intermediate Product Exports, for Further Cross-border Process, As a Share of GDP",
          alias: "GPIPEFFCPASG",
          name: "2-7"
        }
      ],
      FPI: [
        {
          //Foreign value added as a share of final production
          label: "Foreign Value Added as a Share of Final Production",
          alias: "FVASFP",
          name: "3-0"
        },
        {
          //Final production for domestic consumption 
          label: "Final Production for Domestic Consumption",
          alias: "FPDC",
          name: "3-1"
        },
        {
          //Foreign Value as a Share of Final Production for Domestic Consumption
          label: "Foreign Value as a Share of Final Production for Domestic Consumption",
          alias: "FVSFPDC",
          name: "3-2"
        },
        {
          //Final production for foreign consumption
          label: "Final Production for Foreign Consumption",
          alias: "FPFC",
          name: "3-3"
        },
        {
          //Foreign value as a share of final production for foreign consumption
          label: "Foreign Value as a Share of Final Production for Foreign Consumption",
          alias: "GII",
          name: "3-4"
        },
        {
          //Imported Intermediates in Final Production
          label: "Imported Intermediates in Final Production",
          alias: "IIFP",
          name: "3-5"
        },
        {
          //Imported Intermediates as a Share of Final Production
          label: "Imported Intermediates as a Share of Final Production",
          alias: "IISFP",
          name: "3-6"
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
    },
    selectMenu(val) {
      let arr = val.split('-');
      this.changepid(Number(arr[0]));
      this.changefid(Number(arr[1]))
    },
  },
};
</script>

<style>
</style>
