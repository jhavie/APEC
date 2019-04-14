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
          label: "Gross Exports (EXGR, $)",
          alias: "GTI_GE",
          name: "0-0"
        },
        {
          // Gross imports
          // Gross exports, intermediate (EXGR_INT, $)
          label: "Gross Exports, Intermediate (EXGR_INT, $)",
          alias: "GTI_GEI",
          name: "0-1"
        },
        {
          // Bilateral trade balance, gross
          // Gross exports, final (EXGR_FIN, $)
          label: "Gross Exports, Final (EXGR_FIN, $)",
          alias: "GTI_GEF",
          name: "0-2"
        },
        {
          // Gross imports (IMGR, $)
          label: "Gross Imports (IMGR, $)",
          alias: "GTI_GI",
          name: "0-3"
        },
        {
          // Gross imports, intermediate (IMGR_INT, $)
          label: "Gross Imports, Intermediate (IMGR_INT, $)",
          alias: "GTI_GII",
          name: "0-4"
        },
        {
          // Gross imports, final (IMGR_FIN, $)
          label: "Gross Imports, Final (IMGR_FIN, $)",
          alias: "GTI_GIF",
          name: "0-5"
        },
        {
          // Trade balance, gross (BALGR, $)
          label: "Trade Balance, Gross (BALGR, $)",
          alias: "GTI_TBG",
          name: "0-6"
        }
      ],
      VATI: [
          // Value added exports (EXVA, $)
          // Value added imports (IMVA, $)
          // Trade balance, value added (BALVA, $)
        {
          // Value added exports
          label: "Value Added Exports (EXVA, $)",
          alias: "VATI_VAE",
          name: "1-0"
        },
        {
          // Value added imports (IMVA, $)
          label: "Value Added Imports (IMVA, $)",
          alias: "VATI_VAI",
          name: "1-1"
        },
        {
          // Trade balance, value added (BALVA, $)
          label: "Trade Balance, Value Added (BALVA, $)",
          alias: "VATI_TBVA",
          name: "1-2"
        }
      ],
      GDPPI: [
        {
          //GDP production of final product exports
          label: "GDP Production of Final Product Exports",
          alias: "GDPPI_GPFPE",
          name: "2-0"
        },
        {
          //GDP production of final product exports, as a share of GDP
          label: "GDP Production of Final Product Exports, As a Share of GDP",
          alias: "GDPPI_GPFPEASG",
          name: "2-1"
        },
        {
          //GDP production of intermediate product exports
          label: "GDP Production of Intermediate Product Exports",
          alias: "GDPPI_FVAEBC",
          name: "2-2"
        },
        {
          //GDP production of intermediate product exports, as a share of GDP
          label: "GDP Production of Intermediate Product Exports, as a Share Of GDP",
          alias: "GDPPI_DCDVAE",
          name: "2-3"
        },
        {
          //GDP production of intermediate product exports, for importer’s direct absorption
          label: "GDP Production of Intermediate Product Exports, for Importer’s Direct Absorption",
          alias: "GDPPI_GPIPEFIDA",
          name: "2-4"
        },
        {
          //GDP production of intermediate product exports, for importer’s direct absorption, as a share of GDP
          label: "GDP Production of Intermediate Product Exports, for Importer’s Direct Absorption, As a Share of GDP",
          alias: "GDPPI_GPIPEFIDAASG",
          name: "2-5"
        },
        {
          //GDP production of intermediate product exports, for further cross-border processing
          label: "GDP production of intermediate product exports, for further cross-border processing",
          alias: "GDPPI_DCFVAE",
          name: "2-6"
        },
        {
          //GDP production of intermediate product exports, for further cross-border process, as a share of GDP
          label: "GDP Production of Intermediate Product Exports, for Further Cross-border Process, As a Share of GDP",
          alias: "GDPPI_GPIPEFFCPASG",
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
