const Mock = require('mockjs');

export let  yearOptions =[{
            label: '2005',
            value: '2005'
        }, {
            label: '2012',
            value: '2012'
        }
];

export let echart3DOption = {
    title: {
        text: 'Gross trade indicators(Unit: million $)',
        subtext: 'Gross exports ($): by APEC economy, trading partner, industry, year',
        subtextStyle: {
            color: '#000',
            fontSize: 15,
        }
    },
    toolbox: {
        feature: {
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,

        // selected: data.selected
    },
    tooltip: {
        trigger: 'item',
    },
    visualMap: {
        type: 'piecewise',
        max: 20000,
        min: 0,
        dimension: 2,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    dataset: {
        // dimensions: [
        //     'Exporting Country','Importing Country','Value
        // ],
        source: [
            ["Trading Partner","Year","Value"],
            ["AUS",2005,2341.6],
            ["BRN",2005,3.22],
            ["CAN",2005,10048.11],
            ["CHL",2005,12347.75],
            ["AUS",2012,2341.6],
            ["BRN",2012,3.22],
            ["CAN",2012,10048.11],
            ["CHL",2012,12347.75]
        ]
    },
    yAxis3D: {
        type: 'category',
        name: 'Trading Partner',
        //Importing Countries Y
        nameTextStyle: {
            fontSize: 14
        }
    },
    xAxis3D: {
        type: 'category',
        name: 'Year',
        //Exporting Countries
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
};

export function generate3DData(){
    let economiesArr = ['AUS','BRN','CAN','CHL'];
    let economiesArr2 = ['CHN','EU28','HKG','IDN'];
    let data = [];
    economiesArr.forEach((item)=>{
         economiesArr2.forEach((item2)=>{
             data.push(
                 Mock.mock(
                    [item,item2,'@float(0,20000,2,2)','@float(0,20000,2,2)']
                )
             )
         })
    })
    return data;
    
};
export let echartPieOption = {
    title: {
        text: 'Gross trade indicators(Unit: million $)',
        subtext: 'Gross exports ($): by APEC economy, trading partner, industry, year',
        subtextStyle: {
            color: '#000',
            fontSize: 15,
        }
    },
    legend: {
        type:'scroll',
        left: 20,
        orient: 'vertical',
        right: 10,
        top: 80,
        bottom: 20,
    },
    tooltip: {},
    dataset: {
        source: [
            // ["product","AUS,BRN"],
            // ["Agriculture, hunting, forestry and fishing","123"],
            // ["Mining and quarrying","22.1"],
            // ["Food products, beverages and tobacco","312"],
            // ["Textiles and textile products,leather and footwear","1920"],
            // ["Wood and products of wood and cork","12"],
            // ["Pulp, paper, paper products, printing and publishing","0.5"],
            // ["Coke, refined petroleum products and nuclear fuel","3"],
            // ["Chemicals","123"],
            // ["Rubber and plastics products","1.1"],
            // ["Other non-metallic mineral products","432.1"],
            // ["Basic metals","12.2"],
            // ["Fabricated metal products, except machinery and equipment","432.1"],
            // ["Machinery and equipment, nec","41.1"],
            // ["Computer, electronic and optical equipment","51.1"],
            // ["Electrical machinery and apparatus, nec","42.1"],
            // ["Motor vehicles, trailers and semi-trailers","412"],
            // ["Other transport equipment","411"],
            // ["Manufacturing nec recycling (include Furniture)","555"],
            // ["Electricity, gas and water supply","40"],
            // ["Construction","3.1"],
            // ["Wholesale and retail tarde","0.4"],
            // ["Hotels and restaurants","1.55"],
            // ["Transport and storage","8.2"],
            // ["Post and Telecommunications","87"],
            // ["Finance and insurance","13"],
            // ["Real estate activities","44"],
            // ["Renting of Machinery and equipment","5.25"],
            // ["Computer and related activities","11.1"],
            // ["R&D and other business activities","33.4"],
            // ["Public administration and defence, compulsory social security","44.1"],
            // ["Education","1.12"],
            // ["Health and social work","4.1"],
            // ["Other community, social and personal services","5.5"],
            // ["Private households with employed persons & extra-territorial organizations & bodies","0.1"]
        ]
    },
    toolbox: {
        feature: {
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    // visualMap: {
    //     show: true,
    //     min: 0,
    //     max: 20000,
        // inRange: {
        //     colorLightness: [0, 1]
        // }
    // },
    series: [
        {
            type: 'pie',
            radius: [50,150],
            center: ['30%', '50%'],
            roseType : 'radius',
            encode: {
                itemName: 'Trading Partner',
                value: '2005'
            },
            itemStyle: {
                normal: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
        // No encode specified, by default, it is '2012'.
        }, 
        {
            type: 'pie',
            radius: [50,150],
            center: ['75%', '50%'],
            roseType : 'radius',
            encode: {
                itemName: 'Trading Partner',
                value: '2012'
            },
            itemStyle: {
                normal: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
        // No encode specified, by default, it is '2012'.
        }, 
    // {
    //     type: 'pie',
    //     radius: [25,60],
    //     center: ['75%', '30%'],
    //     roseType : 'area',
    //     encode: {
    //         itemName: 'product',
    //         value: 'AUS,CAN'
    //     }
    // }, {
    //     type: 'pie',
    //     radius: [25,60],
    //     center: ['25%', '75%'],
    //     roseType : 'area',
    //     encode: {
    //         itemName: 'product',
    //         value: 'AUS,CHN'
    //     }
    // }, {
    //     type: 'pie',
    //     radius: [25,60],
    //     center: ['75%', '75%'],
    //     roseType : 'area',
    //     encode: {
    //         itemName: 'product',
    //         value: 'AUS,EU28'
    //     },
    //     label: {
    //         formatter: '{c}'
    //     }
    // }, {
    //     type: 'pie',
    //     radius: [25,60],
    //     center: ['75%', '100%'],
    //     roseType : 'area',
    //     encode: {
    //         itemName: 'product',
    //         value: 'AUS,BRN'
    //     },
    //     label: {
    //         formatter: '{c}'
    //     }
    // }
    ]
};

export function generatePieData (){
    let hearArr = ['Economies','Value'];
    let economiesArr =["AUS","BRN","CAN","CHL","CHN","EU28","HKG","IDN","JPN","KOR","MEX","MYS","NZL","PER","PHL","RUS","SGP","THA","TWN","USA","VNM","RoW"]; 
    let pieData = [];
    pieData.push(hearArr);
    economiesArr.forEach((item)=>{
        pieData.push(Mock.mock(
            [item,'@float(0,20000,2,2)']
        ))
    })
    this.echartPieOption.dataset.source = pieData;
    console.log(pieData)
    return this.echartPieOption;
};

export let echartBarOption = {
    title: {
        text: 'Gross trade indicators(Unit: million $)',
        subtext: 'Gross exports ($): by APEC economy, trading partner, industry, year',
        subtextStyle: {
            color: '#000',
            fontSize: 15,
        }
    },
    legend: {},
    tooltip: {
        trigger: 'axis',
    },
    toolbox: {
        feature: {
            // magicType: {
            //     show: true,
            //     type: ['line', 'bar']
            // },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    dataZoom: [{
        xAxisIndex: [0]
    }, {
        yAxisIndex: [0]
    }],
    grid: {
        left: '10%',
        right: '10%',
        bottom: '10%',
        top: '20%',
        containLabel: true
    },
    // visualMap: {
    //     show:false,
    //     type: 'piecewise',
    //     max: 132323,
    //     min: 0,
    //     dimension: 2,
    //     // seriesIndex:0,
    //     inRange: {
    //         color: ['#455a64', '#616161', '#5d4037', '#ff6e40', '#ffab40', '#ffd740', '#ffff00', '#eeff41', '#b2ff59', '#69f0ae', '#64ffda', '#18ffff', '#40c4ff', '#448aff', '#536dfe', '#7c4dff', '#e040fb', '#ff4081', '#ff5252']
    //     }
    // },
    dataset: {
        // dimensions: ['Trading Partner', '2005','2012'],
        source: [
            // ['EXP,IMP', '2005','2012'],
            // ['Trading Partner', '2005','2012'],
            ["AUS",12.2,412.1],
            ["ROW",1221.2,312.1],
            ["BRN", 38.42, 1112.12],
            ["CAN", 7700.92, 1412.12],
            ["CHN", 2098.58, 112.12],
            ["EU28", 25129.1, 912.12],
        ]
    },
    xAxis: {
        type: 'category',
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    // color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    // color: '#c34531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
        },
    ]
};

export function generateBarData(){
    let barData = [];
    let economiesArr = ["BRN,AUS", "CAN,AUS", "CHN,AUS", "EU28,AUS", "AUS,BRN", "CAN,BRN", "CHN,BRN", "EU28,BRN", "AUS,CAN", "BRN,CAN", "CHN,CAN", "EU28,CAN", "AUS,CHL", "BRN,CHL", "CAN,CHL", "EU28,CHL", "AUS,EU28", "BRN,EU28", "CAN,EU28", "CHN,EU28"];
    economiesArr.map((item)=>{
        barData.push(
            Mock.mock(
                [item,'@float(0,20000,2,2)','@float(0,20000,2,2)']
            )
        )
    })
    this.echartBarOption.dataset.source = barData;
    return this.echartBarOption;
}

export let echartLineOption = {
    title: {
        text: 'Gross trade indicators(Unit: million $)',
        subtext: 'Gross exports ($): by APEC economy, trading partner, industry, year',
        subtextStyle: {
            color: '#000',
            fontSize: 15,
        }
    },
    legend: {},
    tooltip: {
        trigger: 'axis',
    },
    toolbox: {
        feature: {
            // magicType: {
            //     show: true,
            //     type: ['line', 'bar']
            // },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    dataZoom: [{
        xAxisIndex: [0]
    }, {
        yAxisIndex: [0]
    }],
    grid: {
        left: '10%',
        right: '10%',
        bottom: '10%',
        top: '20%',
        containLabel: true
    },
    // visualMap: {
    //     show:false,
    //     type: 'piecewise',
    //     max: 132323,
    //     min: 0,
    //     dimension: 2,
    //     // seriesIndex:0,
    //     inRange: {
    //         color: ['#455a64', '#616161', '#5d4037', '#ff6e40', '#ffab40', '#ffd740', '#ffff00', '#eeff41', '#b2ff59', '#69f0ae', '#64ffda', '#18ffff', '#40c4ff', '#448aff', '#536dfe', '#7c4dff', '#e040fb', '#ff4081', '#ff5252']
    //     }
    // },
    dataset: {
        // dimensions: ['Trading Partner', '2005','2012'],
        source: [
            ["AUS",12.2,412.1],
            ["ROW",1221.2,312.1],
            ["BRN", 38.42, 1112.12],
            ["CAN", 7700.92, 1412.12],
            ["CHN", 2098.58, 112.12],
            ["EU28", 25129.1, 912.12],
        ]
    },
    xAxis: {
        type: 'category',
    },
    yAxis: {},
    series: [
        {
            type: 'line',
            itemStyle: {
                normal: {
                    // color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
        },
        {
            type: 'line',
            itemStyle: {
                normal: {
                    // color: '#c34531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

        },
    ]
};

export function generateLineData(){
    let lineData = [];
    let economiesArr = ["BRN,AUS", "CAN,AUS", "CHN,AUS", "EU28,AUS", "AUS,BRN", "CAN,BRN", "CHN,BRN", "EU28,BRN", "AUS,CAN", "BRN,CAN", "CHN,CAN", "EU28,CAN", "AUS,CHL", "BRN,CHL", "CAN,CHL", "EU28,CHL", "AUS,EU28", "BRN,EU28", "CAN,EU28", "CHN,EU28"];
    economiesArr.map((item)=>{
        lineData.push(
            Mock.mock(
                [item,'@float(0,20000,2,2)','@float(0,20000,2,2)']
            )
        )
    })
    this.echartLineOption.dataset.source = lineData;
    return this.echartLineOption;
}


export let echartTreeOption = {
    title: {
        text: 'Gross trade indicators(Unit: million $)',
        subtext: 'Gross exports ($): by APEC economy, trading partner, industry, year',
        subtextStyle: {
            color: '#000',
            fontSize: 15,
        }
    },
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    toolbox: {
        feature: {
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series:[
        {
            type: 'tree',

            data: [{"name":"AUS","children":[{"name":"BRN","children":[{"name":"Agriculture, hunting, forestry and fishing","value":333},{"name":"Mining and quarrying","value":333},{"name":"Food products, beverages and tobacco","value":333},{"name":"Textiles and textile products,leather and footwear","value":333},{"name":"Wood and products of wood and cork","value":333},{"name":"Pulp, paper, paper products, printing and publishing","value":333},{"name":"Coke, refined petroleum products and nuclear fuel","value":333},{"name":"Chemicals","value":333},{"name":"Rubber and plastics products","value":333},{"name":"Other non-metallic mineral products","value":333},{"name":"Basic metals","value":333},{"name":"Fabricated metal products, except machinery and equipment","value":333},{"name":"Machinery and equipment, nec","value":333},{"name":"Computer, electronic and optical equipment","value":333},{"name":"Electrical machinery and apparatus, nec","value":333},{"name":"Motor vehicles, trailers and semi-trailers","value":333},{"name":"Other transport equipment","value":333},{"name":"Manufacturing nec recycling (include Furniture)","value":333},{"name":"Electricity, gas and water supply","value":333},{"name":"Construction","value":333},{"name":"Wholesale and retail tarde","value":333},{"name":"Hotels and restaurants","value":333},{"name":"Transport and storage","value":333},{"name":"Post and Telecommunications","value":333},{"name":"Finance and insurance","value":333},{"name":"Real estate activities","value":333},{"name":"Renting of Machinery and equipment","value":333},{"name":"Computer and related activities","value":333},{"name":"R&D and other business activities","value":333},{"name":"Public administration and defence, compulsory social security","value":333},{"name":"Education","value":333},{"name":"Health and social work","value":333},{"name":"Other community, social and personal services","value":333},{"name":"Private households with employed persons & extra-territorial organizations & bodies","value":333}]},{"name":"CAN","children":[{"name":"Agriculture, hunting, forestry and fishing","value":158},{"name":"Mining and quarrying","value":158},{"name":"Food products, beverages and tobacco","value":158},{"name":"Textiles and textile products,leather and footwear","value":158},{"name":"Wood and products of wood and cork","value":158},{"name":"Pulp, paper, paper products, printing and publishing","value":158},{"name":"Coke, refined petroleum products and nuclear fuel","value":158},{"name":"Chemicals","value":158},{"name":"Rubber and plastics products","value":158},{"name":"Other non-metallic mineral products","value":158},{"name":"Basic metals","value":158},{"name":"Fabricated metal products, except machinery and equipment","value":158},{"name":"Machinery and equipment, nec","value":158},{"name":"Computer, electronic and optical equipment","value":158},{"name":"Electrical machinery and apparatus, nec","value":158},{"name":"Motor vehicles, trailers and semi-trailers","value":158},{"name":"Other transport equipment","value":158},{"name":"Manufacturing nec recycling (include Furniture)","value":158},{"name":"Electricity, gas and water supply","value":158},{"name":"Construction","value":158},{"name":"Wholesale and retail tarde","value":158},{"name":"Hotels and restaurants","value":158},{"name":"Transport and storage","value":158},{"name":"Post and Telecommunications","value":158},{"name":"Finance and insurance","value":158},{"name":"Real estate activities","value":158},{"name":"Renting of Machinery and equipment","value":158},{"name":"Computer and related activities","value":158},{"name":"R&D and other business activities","value":158},{"name":"Public administration and defence, compulsory social security","value":158},{"name":"Education","value":158},{"name":"Health and social work","value":158},{"name":"Other community, social and personal services","value":158},{"name":"Private households with employed persons & extra-territorial organizations & bodies","value":158}]},{"name":"CHL","children":[{"name":"Agriculture, hunting, forestry and fishing","value":158},{"name":"Mining and quarrying","value":158},{"name":"Food products, beverages and tobacco","value":158},{"name":"Textiles and textile products,leather and footwear","value":158},{"name":"Wood and products of wood and cork","value":158},{"name":"Pulp, paper, paper products, printing and publishing","value":158},{"name":"Coke, refined petroleum products and nuclear fuel","value":158},{"name":"Chemicals","value":158},{"name":"Rubber and plastics products","value":158},{"name":"Other non-metallic mineral products","value":158},{"name":"Basic metals","value":158},{"name":"Fabricated metal products, except machinery and equipment","value":158},{"name":"Machinery and equipment, nec","value":158},{"name":"Computer, electronic and optical equipment","value":158},{"name":"Electrical machinery and apparatus, nec","value":158},{"name":"Motor vehicles, trailers and semi-trailers","value":158},{"name":"Other transport equipment","value":158},{"name":"Manufacturing nec recycling (include Furniture)","value":158},{"name":"Electricity, gas and water supply","value":158},{"name":"Construction","value":158},{"name":"Wholesale and retail tarde","value":158},{"name":"Hotels and restaurants","value":158},{"name":"Transport and storage","value":158},{"name":"Post and Telecommunications","value":158},{"name":"Finance and insurance","value":158},{"name":"Real estate activities","value":158},{"name":"Renting of Machinery and equipment","value":158},{"name":"Computer and related activities","value":158},{"name":"R&D and other business activities","value":158},{"name":"Public administration and defence, compulsory social security","value":158},{"name":"Education","value":158},{"name":"Health and social work","value":158},{"name":"Other community, social and personal services","value":158},{"name":"Private households with employed persons & extra-territorial organizations & bodies","value":158}]},{"name":"CHN","children":[{"name":"Agriculture, hunting, forestry and fishing","value":158},{"name":"Mining and quarrying","value":158},{"name":"Food products, beverages and tobacco","value":158},{"name":"Textiles and textile products,leather and footwear","value":158},{"name":"Wood and products of wood and cork","value":158},{"name":"Pulp, paper, paper products, printing and publishing","value":158},{"name":"Coke, refined petroleum products and nuclear fuel","value":158},{"name":"Chemicals","value":158},{"name":"Rubber and plastics products","value":158},{"name":"Other non-metallic mineral products","value":158},{"name":"Basic metals","value":158},{"name":"Fabricated metal products, except machinery and equipment","value":158},{"name":"Machinery and equipment, nec","value":158},{"name":"Computer, electronic and optical equipment","value":158},{"name":"Electrical machinery and apparatus, nec","value":158},{"name":"Motor vehicles, trailers and semi-trailers","value":158},{"name":"Other transport equipment","value":158},{"name":"Manufacturing nec recycling (include Furniture)","value":158},{"name":"Electricity, gas and water supply","value":158},{"name":"Construction","value":158},{"name":"Wholesale and retail tarde","value":158},{"name":"Hotels and restaurants","value":158},{"name":"Transport and storage","value":158},{"name":"Post and Telecommunications","value":158},{"name":"Finance and insurance","value":158},{"name":"Real estate activities","value":158},{"name":"Renting of Machinery and equipment","value":158},{"name":"Computer and related activities","value":158},{"name":"R&D and other business activities","value":158},{"name":"Public administration and defence, compulsory social security","value":158},{"name":"Education","value":158},{"name":"Health and social work","value":158},{"name":"Other community, social and personal services","value":158},{"name":"Private households with employed persons & extra-territorial organizations & bodies","value":158}]},{"name":"EU28","children":[{"name":"Agriculture, hunting, forestry and fishing","value":158},{"name":"Mining and quarrying","value":158},{"name":"Food products, beverages and tobacco","value":158},{"name":"Textiles and textile products,leather and footwear","value":158},{"name":"Wood and products of wood and cork","value":158},{"name":"Pulp, paper, paper products, printing and publishing","value":158},{"name":"Coke, refined petroleum products and nuclear fuel","value":158},{"name":"Chemicals","value":158},{"name":"Rubber and plastics products","value":158},{"name":"Other non-metallic mineral products","value":158},{"name":"Basic metals","value":158},{"name":"Fabricated metal products, except machinery and equipment","value":158},{"name":"Machinery and equipment, nec","value":158},{"name":"Computer, electronic and optical equipment","value":158},{"name":"Electrical machinery and apparatus, nec","value":158},{"name":"Motor vehicles, trailers and semi-trailers","value":158},{"name":"Other transport equipment","value":158},{"name":"Manufacturing nec recycling (include Furniture)","value":158},{"name":"Electricity, gas and water supply","value":158},{"name":"Construction","value":158},{"name":"Wholesale and retail tarde","value":158},{"name":"Hotels and restaurants","value":158},{"name":"Transport and storage","value":158},{"name":"Post and Telecommunications","value":158},{"name":"Finance and insurance","value":158},{"name":"Real estate activities","value":158},{"name":"Renting of Machinery and equipment","value":158},{"name":"Computer and related activities","value":158},{"name":"R&D and other business activities","value":158},{"name":"Public administration and defence, compulsory social security","value":158},{"name":"Education","value":158},{"name":"Health and social work","value":158},{"name":"Other community, social and personal services","value":158},{"name":"Private households with employed persons & extra-territorial organizations & bodies","value":158}]}]}],

            left: '2%',
            right: '20%',
            top: '8%',
            bottom: '2%',

            symbol: 'emptyCircle',

            // orient: 'vertical',
            expandAndCollapse: true,
            initialTreeDepth:1,
            label: {
                normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 10
                }
            },
            leaves: {
                label: {
                    normal: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left',
                        fontSize: 10
                    }
                }
            },

            animationDurationUpdate: 750
        }
    ]
}

export let echartTreeMapOption = {
    title: {
        text: 'Gross trade indicators(Unit: million $)',
        subtext: 'Gross exports ($): by APEC economy, trading partner, industry, year',
        subtextStyle: {
            color: '#000',
            fontSize: 15,
        }
    },
    toolbox: {
        feature: {
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [{
        type: 'treemap',
        data: [
    {
        "name":"AUS",
        "children":[
            {
                "name":"AUS",
                "children":[
                    {
                        "name":"Agriculture, hunting, forestry and fishing",
                        "value":111
                    },
                    {
                        "name":"Mining and quarrying",
                        "value":3588
                    },
                    {
                        "name":"Food products, beverages and tobacco",
                        "value":0
                    },
                    {
                        "name":"Textiles and textile products,leather and footwear",
                        "value":4324.1
                    },
                    {
                        "name":"Wood and products of wood and cork",
                        "value":111
                    },
                    {
                        "name":"Pulp, paper, paper products, printing and publishing",
                        "value":111
                    },
                    {
                        "name":"Coke, refined petroleum products and nuclear fuel",
                        "value":158
                    },
                    {
                        "name":"Chemicals",
                        "value":158
                    },
                    {
                        "name":"Rubber and plastics products",
                        "value":158
                    },
                    {
                        "name":"Other non-metallic mineral products",
                        "value":4324.1
                    },
                    {
                        "name":"Basic metals",
                        "value":158
                    },
                    {
                        "name":"Fabricated metal products, except machinery and equipment",
                        "value":158
                    },
                    {
                        "name":"Machinery and equipment, nec",
                        "value":158
                    },
                    {
                        "name":"Computer, electronic and optical equipment",
                        "value":4291.1
                    },
                    {
                        "name":"Electrical machinery and apparatus, nec",
                        "value":158
                    },
                    {
                        "name":"Motor vehicles, trailers and semi-trailers",
                        "value":9853.1
                    },
                    {
                        "name":"Other transport equipment",
                        "value":158
                    },
                    {
                        "name":"Manufacturing nec recycling (include Furniture)",
                        "value":158
                    },
                    {
                        "name":"Electricity, gas and water supply",
                        "value":158
                    },
                    {
                        "name":"Construction",
                        "value":158
                    },
                    {
                        "name":"Wholesale and retail tarde",
                        "value":9853.1
                    },
                    {
                        "name":"Hotels and restaurants",
                        "value":158
                    },
                    {
                        "name":"Transport and storage",
                        "value":9853.1
                    },
                    {
                        "name":"Post and Telecommunications",
                        "value":158
                    },
                    {
                        "name":"Finance and insurance",
                        "value":158
                    },
                    {
                        "name":"Real estate activities",
                        "value":421
                    },
                    {
                        "name":"Renting of Machinery and equipment",
                        "value":421
                    },
                    {
                        "name":"Computer and related activities",
                        "value":158
                    },
                    {
                        "name":"R&D and other business activities",
                        "value":158
                    },
                    {
                        "name":"Public administration and defence, compulsory social security",
                        "value":421
                    },
                    {
                        "name":"Education",
                        "value":158
                    },
                    {
                        "name":"Health and social work",
                        "value":421
                    },
                    {
                        "name":"Other community, social and personal services",
                        "value":158
                    },
                    {
                        "name":"Private households with employed persons & extra-territorial organizations & bodies",
                        "value":158
                    }
                ]
            },
            {
                "name":"BRN",
                "children":[
                    {
                        "name":"Agriculture, hunting, forestry and fishing",
                        "value":0.2
                    },
                    {
                        "name":"Mining and quarrying",
                        "value":0
                    },
                    {
                        "name":"Food products, beverages and tobacco",
                        "value":0.2
                    },
                    {
                        "name":"Textiles and textile products,leather and footwear",
                        "value":0.2
                    },
                    {
                        "name":"Wood and products of wood and cork",
                        "value":0.2
                    },
                    {
                        "name":"Pulp, paper, paper products, printing and publishing",
                        "value":0.2
                    },
                    {
                        "name":"Coke, refined petroleum products and nuclear fuel",
                        "value":0.2
                    },
                    {
                        "name":"Chemicals",
                        "value":158
                    },
                    {
                        "name":"Rubber and plastics products",
                        "value":158
                    },
                    {
                        "name":"Other non-metallic mineral products",
                        "value":453
                    },
                    {
                        "name":"Basic metals",
                        "value":158
                    },
                    {
                        "name":"Fabricated metal products, except machinery and equipment",
                        "value":158
                    },
                    {
                        "name":"Machinery and equipment, nec",
                        "value":158
                    },
                    {
                        "name":"Computer, electronic and optical equipment",
                        "value":158
                    },
                    {
                        "name":"Electrical machinery and apparatus, nec",
                        "value":158
                    },
                    {
                        "name":"Motor vehicles, trailers and semi-trailers",
                        "value":158
                    },
                    {
                        "name":"Other transport equipment",
                        "value":158
                    },
                    {
                        "name":"Manufacturing nec recycling (include Furniture)",
                        "value":158
                    },
                    {
                        "name":"Electricity, gas and water supply",
                        "value":158
                    },
                    {
                        "name":"Construction",
                        "value":158
                    },
                    {
                        "name":"Wholesale and retail tarde",
                        "value":158
                    },
                    {
                        "name":"Hotels and restaurants",
                        "value":158
                    },
                    {
                        "name":"Transport and storage",
                        "value":158
                    },
                    {
                        "name":"Post and Telecommunications",
                        "value":158
                    },
                    {
                        "name":"Finance and insurance",
                        "value":829
                    },
                    {
                        "name":"Real estate activities",
                        "value":421
                    },
                    {
                        "name":"Renting of Machinery and equipment",
                        "value":9201
                    },
                    {
                        "name":"Computer and related activities",
                        "value":158
                    },
                    {
                        "name":"R&D and other business activities",
                        "value":158
                    },
                    {
                        "name":"Public administration and defence, compulsory social security",
                        "value":158
                    },
                    {
                        "name":"Education",
                        "value":158
                    },
                    {
                        "name":"Health and social work",
                        "value":9201
                    },
                    {
                        "name":"Other community, social and personal services",
                        "value":158
                    },
                    {
                        "name":"Private households with employed persons & extra-territorial organizations & bodies",
                        "value":158
                    }
                ]
            },
            {
                "name":"CAN",
                "children":[
                    {
                        "name":"Agriculture, hunting, forestry and fishing",
                        "value":0.2
                    },
                    {
                        "name":"Mining and quarrying",
                        "value":0
                    },
                    {
                        "name":"Food products, beverages and tobacco",
                        "value":0.2
                    },
                    {
                        "name":"Textiles and textile products,leather and footwear",
                        "value":0.2
                    },
                    {
                        "name":"Wood and products of wood and cork",
                        "value":0.2
                    },
                    {
                        "name":"Pulp, paper, paper products, printing and publishing",
                        "value":0.2
                    },
                    {
                        "name":"Coke, refined petroleum products and nuclear fuel",
                        "value":0.2
                    },
                    {
                        "name":"Chemicals",
                        "value":158
                    },
                    {
                        "name":"Rubber and plastics products",
                        "value":158
                    },
                    {
                        "name":"Other non-metallic mineral products",
                        "value":453
                    },
                    {
                        "name":"Basic metals",
                        "value":158
                    },
                    {
                        "name":"Fabricated metal products, except machinery and equipment",
                        "value":158
                    },
                    {
                        "name":"Machinery and equipment, nec",
                        "value":158
                    },
                    {
                        "name":"Computer, electronic and optical equipment",
                        "value":158
                    },
                    {
                        "name":"Electrical machinery and apparatus, nec",
                        "value":158
                    },
                    {
                        "name":"Motor vehicles, trailers and semi-trailers",
                        "value":158
                    },
                    {
                        "name":"Other transport equipment",
                        "value":158
                    },
                    {
                        "name":"Manufacturing nec recycling (include Furniture)",
                        "value":158
                    },
                    {
                        "name":"Electricity, gas and water supply",
                        "value":158
                    },
                    {
                        "name":"Construction",
                        "value":158
                    },
                    {
                        "name":"Wholesale and retail tarde",
                        "value":158
                    },
                    {
                        "name":"Hotels and restaurants",
                        "value":158
                    },
                    {
                        "name":"Transport and storage",
                        "value":158
                    },
                    {
                        "name":"Post and Telecommunications",
                        "value":158
                    },
                    {
                        "name":"Finance and insurance",
                        "value":829
                    },
                    {
                        "name":"Real estate activities",
                        "value":421
                    },
                    {
                        "name":"Renting of Machinery and equipment",
                        "value":9201
                    },
                    {
                        "name":"Computer and related activities",
                        "value":158
                    },
                    {
                        "name":"R&D and other business activities",
                        "value":158
                    },
                    {
                        "name":"Public administration and defence, compulsory social security",
                        "value":158
                    },
                    {
                        "name":"Education",
                        "value":158
                    },
                    {
                        "name":"Health and social work",
                        "value":9201
                    },
                    {
                        "name":"Other community, social and personal services",
                        "value":158
                    },
                    {
                        "name":"Private households with employed persons & extra-territorial organizations & bodies",
                        "value":158
                    }
                ]
            },
            {
                "name":"EU28",
                "children":[
                    {
                        "name":"Agriculture, hunting, forestry and fishing",
                        "value":0.2
                    },
                    {
                        "name":"Mining and quarrying",
                        "value":0
                    },
                    {
                        "name":"Food products, beverages and tobacco",
                        "value":0.2
                    },
                    {
                        "name":"Textiles and textile products,leather and footwear",
                        "value":0.2
                    },
                    {
                        "name":"Wood and products of wood and cork",
                        "value":0.2
                    },
                    {
                        "name":"Pulp, paper, paper products, printing and publishing",
                        "value":0.2
                    },
                    {
                        "name":"Coke, refined petroleum products and nuclear fuel",
                        "value":0.2
                    },
                    {
                        "name":"Chemicals",
                        "value":158
                    },
                    {
                        "name":"Rubber and plastics products",
                        "value":158
                    },
                    {
                        "name":"Other non-metallic mineral products",
                        "value":453
                    },
                    {
                        "name":"Basic metals",
                        "value":158
                    },
                    {
                        "name":"Fabricated metal products, except machinery and equipment",
                        "value":158
                    },
                    {
                        "name":"Machinery and equipment, nec",
                        "value":158
                    },
                    {
                        "name":"Computer, electronic and optical equipment",
                        "value":158
                    },
                    {
                        "name":"Electrical machinery and apparatus, nec",
                        "value":158
                    },
                    {
                        "name":"Motor vehicles, trailers and semi-trailers",
                        "value":158
                    },
                    {
                        "name":"Other transport equipment",
                        "value":158
                    },
                    {
                        "name":"Manufacturing nec recycling (include Furniture)",
                        "value":158
                    },
                    {
                        "name":"Electricity, gas and water supply",
                        "value":158
                    },
                    {
                        "name":"Construction",
                        "value":158
                    },
                    {
                        "name":"Wholesale and retail tarde",
                        "value":158
                    },
                    {
                        "name":"Hotels and restaurants",
                        "value":158
                    },
                    {
                        "name":"Transport and storage",
                        "value":158
                    },
                    {
                        "name":"Post and Telecommunications",
                        "value":158
                    },
                    {
                        "name":"Finance and insurance",
                        "value":829
                    },
                    {
                        "name":"Real estate activities",
                        "value":421
                    },
                    {
                        "name":"Renting of Machinery and equipment",
                        "value":9201
                    },
                    {
                        "name":"Computer and related activities",
                        "value":158
                    },
                    {
                        "name":"R&D and other business activities",
                        "value":158
                    },
                    {
                        "name":"Public administration and defence, compulsory social security",
                        "value":158
                    },
                    {
                        "name":"Education",
                        "value":158
                    },
                    {
                        "name":"Health and social work",
                        "value":9201
                    },
                    {
                        "name":"Other community, social and personal services",
                        "value":158
                    },
                    {
                        "name":"Private households with employed persons & extra-territorial organizations & bodies",
                        "value":158
                    }
                ]
            },
            {
                "name":"Row",
                "children":[
                    {
                        "name":"Agriculture, hunting, forestry and fishing",
                        "value":0.2
                    },
                    {
                        "name":"Mining and quarrying",
                        "value":0
                    },
                    {
                        "name":"Food products, beverages and tobacco",
                        "value":0.2
                    },
                    {
                        "name":"Textiles and textile products,leather and footwear",
                        "value":0.2
                    },
                    {
                        "name":"Wood and products of wood and cork",
                        "value":0.2
                    },
                    {
                        "name":"Pulp, paper, paper products, printing and publishing",
                        "value":0.2
                    },
                    {
                        "name":"Coke, refined petroleum products and nuclear fuel",
                        "value":0.2
                    },
                    {
                        "name":"Chemicals",
                        "value":158
                    },
                    {
                        "name":"Rubber and plastics products",
                        "value":158
                    },
                    {
                        "name":"Other non-metallic mineral products",
                        "value":453
                    },
                    {
                        "name":"Basic metals",
                        "value":158
                    },
                    {
                        "name":"Fabricated metal products, except machinery and equipment",
                        "value":158
                    },
                    {
                        "name":"Machinery and equipment, nec",
                        "value":158
                    },
                    {
                        "name":"Computer, electronic and optical equipment",
                        "value":158
                    },
                    {
                        "name":"Electrical machinery and apparatus, nec",
                        "value":158
                    },
                    {
                        "name":"Motor vehicles, trailers and semi-trailers",
                        "value":158
                    },
                    {
                        "name":"Other transport equipment",
                        "value":158
                    },
                    {
                        "name":"Manufacturing nec recycling (include Furniture)",
                        "value":158
                    },
                    {
                        "name":"Electricity, gas and water supply",
                        "value":158
                    },
                    {
                        "name":"Construction",
                        "value":158
                    },
                    {
                        "name":"Wholesale and retail tarde",
                        "value":158
                    },
                    {
                        "name":"Hotels and restaurants",
                        "value":158
                    },
                    {
                        "name":"Transport and storage",
                        "value":158
                    },
                    {
                        "name":"Post and Telecommunications",
                        "value":158
                    },
                    {
                        "name":"Finance and insurance",
                        "value":829
                    },
                    {
                        "name":"Real estate activities",
                        "value":421
                    },
                    {
                        "name":"Renting of Machinery and equipment",
                        "value":9201
                    },
                    {
                        "name":"Computer and related activities",
                        "value":158
                    },
                    {
                        "name":"R&D and other business activities",
                        "value":158
                    },
                    {
                        "name":"Public administration and defence, compulsory social security",
                        "value":158
                    },
                    {
                        "name":"Education",
                        "value":158
                    },
                    {
                        "name":"Health and social work",
                        "value":9201
                    },
                    {
                        "name":"Other community, social and personal services",
                        "value":158
                    },
                    {
                        "name":"Private households with employed persons & extra-territorial organizations & bodies",
                        "value":158
                    }
                ]
            }
        ]
    },
    {
        "name":"BRN",
        "children":[
            {
                "name":"AUS",
                "children":[
                    {
                        "name":"Agriculture, hunting, forestry and fishing",
                        "value":11321
                    },
                    {
                        "name":"Mining and quarrying",
                        "value":158
                    },
                    {
                        "name":"Food products, beverages and tobacco",
                        "value":158
                    },
                    {
                        "name":"Textiles and textile products,leather and footwear",
                        "value":158
                    },
                    {
                        "name":"Wood and products of wood and cork",
                        "value":158
                    },
                    {
                        "name":"Pulp, paper, paper products, printing and publishing",
                        "value":158
                    },
                    {
                        "name":"Coke, refined petroleum products and nuclear fuel",
                        "value":158
                    },
                    {
                        "name":"Chemicals",
                        "value":158
                    },
                    {
                        "name":"Rubber and plastics products",
                        "value":158
                    },
                    {
                        "name":"Other non-metallic mineral products",
                        "value":158
                    },
                    {
                        "name":"Basic metals",
                        "value":158
                    },
                    {
                        "name":"Fabricated metal products, except machinery and equipment",
                        "value":0.2
                    },
                    {
                        "name":"Machinery and equipment, nec",
                        "value":0.2
                    },
                    {
                        "name":"Computer, electronic and optical equipment",
                        "value":11321
                    },
                    {
                        "name":"Electrical machinery and apparatus, nec",
                        "value":0.2
                    },
                    {
                        "name":"Motor vehicles, trailers and semi-trailers",
                        "value":0.2
                    },
                    {
                        "name":"Other transport equipment",
                        "value":0.2
                    },
                    {
                        "name":"Manufacturing nec recycling (include Furniture)",
                        "value":0.2
                    },
                    {
                        "name":"Electricity, gas and water supply",
                        "value":0.2
                    },
                    {
                        "name":"Construction",
                        "value":158
                    },
                    {
                        "name":"Wholesale and retail tarde",
                        "value":11321
                    },
                    {
                        "name":"Hotels and restaurants",
                        "value":11321
                    },
                    {
                        "name":"Transport and storage",
                        "value":11321
                    },
                    {
                        "name":"Post and Telecommunications",
                        "value":11321
                    },
                    {
                        "name":"Finance and insurance",
                        "value":158
                    },
                    {
                        "name":"Real estate activities",
                        "value":158
                    },
                    {
                        "name":"Renting of Machinery and equipment",
                        "value":432
                    },
                    {
                        "name":"Computer and related activities",
                        "value":158
                    },
                    {
                        "name":"R&D and other business activities",
                        "value":158
                    },
                    {
                        "name":"Public administration and defence, compulsory social security",
                        "value":158
                    },
                    {
                        "name":"Education",
                        "value":158
                    },
                    {
                        "name":"Health and social work",
                        "value":158
                    },
                    {
                        "name":"Other community, social and personal services",
                        "value":158
                    },
                    {
                        "name":"Private households with employed persons & extra-territorial organizations & bodies",
                        "value":158
                    }
                ]
            }
        ]
    },
    {
        "name":"RoW",
        "children":[
            {
                "name":"AUS",
                "children":[
                    {
                        "name":"Agriculture, hunting, forestry and fishing",
                        "value":158
                    },
                    {
                        "name":"Mining and quarrying",
                        "value":158
                    },
                    {
                        "name":"Food products, beverages and tobacco",
                        "value":158
                    },
                    {
                        "name":"Textiles and textile products,leather and footwear",
                        "value":158
                    },
                    {
                        "name":"Wood and products of wood and cork",
                        "value":158
                    },
                    {
                        "name":"Pulp, paper, paper products, printing and publishing",
                        "value":158
                    },
                    {
                        "name":"Coke, refined petroleum products and nuclear fuel",
                        "value":158
                    },
                    {
                        "name":"Chemicals",
                        "value":158
                    },
                    {
                        "name":"Rubber and plastics products",
                        "value":158
                    },
                    {
                        "name":"Other non-metallic mineral products",
                        "value":158
                    },
                    {
                        "name":"Basic metals",
                        "value":158
                    },
                    {
                        "name":"Fabricated metal products, except machinery and equipment",
                        "value":158
                    },
                    {
                        "name":"Machinery and equipment, nec",
                        "value":158
                    },
                    {
                        "name":"Computer, electronic and optical equipment",
                        "value":158
                    },
                    {
                        "name":"Electrical machinery and apparatus, nec",
                        "value":158
                    },
                    {
                        "name":"Motor vehicles, trailers and semi-trailers",
                        "value":158
                    },
                    {
                        "name":"Other transport equipment",
                        "value":158
                    },
                    {
                        "name":"Manufacturing nec recycling (include Furniture)",
                        "value":158
                    },
                    {
                        "name":"Electricity, gas and water supply",
                        "value":158
                    },
                    {
                        "name":"Construction",
                        "value":158
                    },
                    {
                        "name":"Wholesale and retail tarde",
                        "value":158
                    },
                    {
                        "name":"Hotels and restaurants",
                        "value":158
                    },
                    {
                        "name":"Transport and storage",
                        "value":158
                    },
                    {
                        "name":"Post and Telecommunications",
                        "value":158
                    },
                    {
                        "name":"Finance and insurance",
                        "value":158
                    },
                    {
                        "name":"Real estate activities",
                        "value":158
                    },
                    {
                        "name":"Renting of Machinery and equipment",
                        "value":158
                    },
                    {
                        "name":"Computer and related activities",
                        "value":158
                    },
                    {
                        "name":"R&D and other business activities",
                        "value":158
                    },
                    {
                        "name":"Public administration and defence, compulsory social security",
                        "value":158
                    },
                    {
                        "name":"Education",
                        "value":158
                    },
                    {
                        "name":"Health and social work",
                        "value":158
                    },
                    {
                        "name":"Other community, social and personal services",
                        "value":158
                    },
                    {
                        "name":"Private households with employed persons & extra-territorial organizations & bodies",
                        "value":158
                    }
                ]
            }
        ]
    },
    {
        "name":"CHN",
        "children":[
            {
                "name":"AUS",
                "children":[
                    {
                        "name":"Agriculture, hunting, forestry and fishing",
                        "value":158
                    },
                    {
                        "name":"Mining and quarrying",
                        "value":158
                    },
                    {
                        "name":"Food products, beverages and tobacco",
                        "value":158
                    },
                    {
                        "name":"Textiles and textile products,leather and footwear",
                        "value":158
                    },
                    {
                        "name":"Wood and products of wood and cork",
                        "value":158
                    },
                    {
                        "name":"Pulp, paper, paper products, printing and publishing",
                        "value":158
                    },
                    {
                        "name":"Coke, refined petroleum products and nuclear fuel",
                        "value":158
                    },
                    {
                        "name":"Chemicals",
                        "value":158
                    },
                    {
                        "name":"Rubber and plastics products",
                        "value":158
                    },
                    {
                        "name":"Other non-metallic mineral products",
                        "value":158
                    },
                    {
                        "name":"Basic metals",
                        "value":158
                    },
                    {
                        "name":"Fabricated metal products, except machinery and equipment",
                        "value":158
                    },
                    {
                        "name":"Machinery and equipment, nec",
                        "value":158
                    },
                    {
                        "name":"Computer, electronic and optical equipment",
                        "value":158
                    },
                    {
                        "name":"Electrical machinery and apparatus, nec",
                        "value":158
                    },
                    {
                        "name":"Motor vehicles, trailers and semi-trailers",
                        "value":158
                    },
                    {
                        "name":"Other transport equipment",
                        "value":158
                    },
                    {
                        "name":"Manufacturing nec recycling (include Furniture)",
                        "value":158
                    },
                    {
                        "name":"Electricity, gas and water supply",
                        "value":158
                    },
                    {
                        "name":"Construction",
                        "value":158
                    },
                    {
                        "name":"Wholesale and retail tarde",
                        "value":158
                    },
                    {
                        "name":"Hotels and restaurants",
                        "value":158
                    },
                    {
                        "name":"Transport and storage",
                        "value":158
                    },
                    {
                        "name":"Post and Telecommunications",
                        "value":158
                    },
                    {
                        "name":"Finance and insurance",
                        "value":158
                    },
                    {
                        "name":"Real estate activities",
                        "value":158
                    },
                    {
                        "name":"Renting of Machinery and equipment",
                        "value":158
                    },
                    {
                        "name":"Computer and related activities",
                        "value":158
                    },
                    {
                        "name":"R&D and other business activities",
                        "value":158
                    },
                    {
                        "name":"Public administration and defence, compulsory social security",
                        "value":158
                    },
                    {
                        "name":"Education",
                        "value":158
                    },
                    {
                        "name":"Health and social work",
                        "value":158
                    },
                    {
                        "name":"Other community, social and personal services",
                        "value":158
                    },
                    {
                        "name":"Private households with employed persons & extra-territorial organizations & bodies",
                        "value":158
                    }
                ]
            }
        ]
    },
    {
        "name":"CAN",
        "children":[
            {
                "name":"AUS",
                "children":[
                    {
                        "name":"Agriculture, hunting, forestry and fishing",
                        "value":158
                    },
                    {
                        "name":"Mining and quarrying",
                        "value":158
                    },
                    {
                        "name":"Food products, beverages and tobacco",
                        "value":158
                    },
                    {
                        "name":"Textiles and textile products,leather and footwear",
                        "value":158
                    },
                    {
                        "name":"Wood and products of wood and cork",
                        "value":158
                    },
                    {
                        "name":"Pulp, paper, paper products, printing and publishing",
                        "value":158
                    },
                    {
                        "name":"Coke, refined petroleum products and nuclear fuel",
                        "value":158
                    },
                    {
                        "name":"Chemicals",
                        "value":158
                    },
                    {
                        "name":"Rubber and plastics products",
                        "value":158
                    },
                    {
                        "name":"Other non-metallic mineral products",
                        "value":158
                    },
                    {
                        "name":"Basic metals",
                        "value":158
                    },
                    {
                        "name":"Fabricated metal products, except machinery and equipment",
                        "value":158
                    },
                    {
                        "name":"Machinery and equipment, nec",
                        "value":158
                    },
                    {
                        "name":"Computer, electronic and optical equipment",
                        "value":158
                    },
                    {
                        "name":"Electrical machinery and apparatus, nec",
                        "value":158
                    },
                    {
                        "name":"Motor vehicles, trailers and semi-trailers",
                        "value":158
                    },
                    {
                        "name":"Other transport equipment",
                        "value":158
                    },
                    {
                        "name":"Manufacturing nec recycling (include Furniture)",
                        "value":158
                    },
                    {
                        "name":"Electricity, gas and water supply",
                        "value":158
                    },
                    {
                        "name":"Construction",
                        "value":158
                    },
                    {
                        "name":"Wholesale and retail tarde",
                        "value":158
                    },
                    {
                        "name":"Hotels and restaurants",
                        "value":158
                    },
                    {
                        "name":"Transport and storage",
                        "value":158
                    },
                    {
                        "name":"Post and Telecommunications",
                        "value":158
                    },
                    {
                        "name":"Finance and insurance",
                        "value":158
                    },
                    {
                        "name":"Real estate activities",
                        "value":158
                    },
                    {
                        "name":"Renting of Machinery and equipment",
                        "value":158
                    },
                    {
                        "name":"Computer and related activities",
                        "value":158
                    },
                    {
                        "name":"R&D and other business activities",
                        "value":158
                    },
                    {
                        "name":"Public administration and defence, compulsory social security",
                        "value":158
                    },
                    {
                        "name":"Education",
                        "value":158
                    },
                    {
                        "name":"Health and social work",
                        "value":158
                    },
                    {
                        "name":"Other community, social and personal services",
                        "value":158
                    },
                    {
                        "name":"Private households with employed persons & extra-territorial organizations & bodies",
                        "value":158
                    }
                ]
            }
        ]
    }
]
    }]
};

