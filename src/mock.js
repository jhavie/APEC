const echartOptions = require('@/data.js')
const Mock = require('mockjs');

Mock.mock(/getCountry/, function () {
    let mockCountry = {
        "code": 0,
        "msg": "",
        "data": [
            {"id": 1,"country": "AUS","en_name": "Australia"},
            {"id": 2,"country": "BRN","en_name": "Brunei Darussalam"},
            {"id": 3,"country": "CAN","en_name": "Canada"},
            {"id": 4,"country": "CHL","en_name": "Chile"},
            {"id": 5,"country": "CHN","en_name": "People republic of China"},
            {"id": 6,"country": "EU28","en_name": "European Union "},
            {"id": 7,"country": "HKG","en_name": "Hong Kong, China"},
            {"id": 8,"country": "IDN","en_name": "Indonesia"},
            {"id": 9,"country": "JPN","en_name": "Japan"},
            {"id": 10,"country": "KOR","en_name": "Republic of Korea"},
            {"id": 11,"country": "MEX","en_name": "Mexico"},
            {"id": 12,"country": "MYS","en_name": "Malaysia"},
            {"id": 13,"country": "NZL","en_name": "New Zealand"},
            {"id": 14,"country": "PER","en_name": "Peru"},
            {"id": 15,"country": "PHL","en_name": "The Philippines"},
            {"id": 16,"country": "RUS","en_name": "Russia"},
            {"id": 17,"country": "SGP","en_name": "Singapore"},
            {"id": 18,"country": "THA","en_name": "Thailand"},
            {"id": 19,"country": "TWN","en_name": "Chinese Taipei"},
            {"id": 20,"country": "USA","en_name": "The United States"},
            {"id": 21,"country": "VNM","en_name": "Viet Nam"},
            {"id": 22,"country": "RoW","en_name": "Rest of World"}
        ]
    }
    return mockCountry;
});
Mock.mock(/getIndustry/, function () {
    let mockIndustry = {
    "code":0,
    "msg":"",
    "data":[
        // ['Agriculture, hunting, forestry and fishing'],
        // ['Mining and quarrying'],
        // ['Food products, beverages and tobacco','Textiles and textile products,leather and footwear','Wood and products of wood and cork','Pulp, paper, paper products, printing and publishing','Coke, refined petroleum products and nuclear fuel','Chemicals','Rubber and plastics products','Other non-metallic mineral products','Basic metals','Fabricated metal products, except machinery and equipment','Machinery and equipment, nec','Computer, electronic and optical equipment','Electrical machinery and apparatus, nec','Motor vehicles, trailers and semi-trailers','Other transport equipment','Manufacturing nec  recycling (include Furniture)'],
        // ['Electricity, gas and water supply','Construction','Wholesale and retail tarde','Hotels and restaurants','Transport and storage','Post and Telecommunications','Finance and insurance','Real estate activities','Renting of Machinery and equipment','Computer and related activities','R&D and other business activities','Public administration and defence, compulsory social security','Education','Health and social work','Other community, social and personal services','Private households with employed persons & extra-territorial organizations & bodies']
    // { value: 'beijing', label: '北京', children: [ { value: 'gugong', label: '故宫' } ] },
        // { value: 'jiangsu', label: '江苏', children: [ { value: 'nanjing', label: '南京' } ] }
        // {"id":1,"industry":"Agriculture, hunting, forestry and fishing","en_type":"I1"},
        // {"id":2,"industry":"Mining and quarrying","en_type":"I2"},
        // {"id":3,"industry":"Food products, beverages and tobacco","en_type":"I3"},
        // {"id":4,"industry":"Textiles and textile products,leather and footwear","en_type":"I4"},
        // {"id":5,"industry":"Wood and products of wood and cork","en_type":"I5"},
        // {"id":6,"industry":"Pulp, paper, paper products, printing and publishing","en_type":"I6"},
        // {"id":7,"industry":"Coke, refined petroleum products and nuclear fuel","en_type":"I7"},
        // {"id":8,"industry":"Chemicals","en_type":"I8"},
        // {"id":9,"industry":"Rubber and plastics products","en_type":"I9"},
        // {"id":10,"industry":"Other non-metallic mineral products","en_type":"I10"},
        // {"id":11,"industry":"Basic metals","en_type":"I11"},
        // {"id":12,"industry":"Fabricated metal products, except machinery and equipment","en_type":"I12"},
        // {"id":13,"industry":"Machinery and equipment, nec","en_type":"I13"},
        // {"id":14,"industry":"Computer, electronic and optical equipment","en_type":"I14"},
        // {"id":15,"industry":"Electrical machinery and apparatus, nec","en_type":"I15"},
        // {"id":16,"industry":"Motor vehicles, trailers and semi-trailers","en_type":"I16"},
        // {"id":17,"industry":"Other transport equipment","en_type":"I17"},
        // {"id":18,"industry":"Manufacturing nec recycling (include Furniture)","en_type":"I18"},
        // {"id":19,"industry":"Electricity, gas and water supply","en_type":"I19"},
        // {"id":20,"industry":"Construction","en_type":"I20"},
        // {"id":21,"industry":"Wholesale and retail tarde","en_type":"I21"},
        // {"id":22,"industry":"Hotels and restaurants","en_type":"I22"},
        // {"id":23,"industry":"Transport and storage","en_type":"I23"},
        // {"id":24,"industry":"Post and Telecommunications","en_type":"I24"},
        // {"id":25,"industry":"Finance and insurance","en_type":"I25"},
        // {"id":26,"industry":"Real estate activities","en_type":"I26"},
        // {"id":27,"industry":"Renting of Machinery and equipment","en_type":"I27"},
        // {"id":28,"industry":"Computer and related activities","en_type":"I28"},
        // {"id":29,"industry":"R&D and other business activities","en_type":"I29"},
        // {"id":30,"industry":"Public administration and defence, compulsory social security","en_type":"I30"},
        // {"id":31,"industry":"Education","en_type":"I31"},
        // {"id":32,"industry":"Health and social work","en_type":"I32"},
        // {"id":33,"industry":"Other community, social and personal services","en_type":"I33"},
        // {"id":34,"industry":"Private households with employed persons & extra-territorial organizations & bodies","en_type":"I34"}
        [
            {
                'en_type':'T1',
                'industry':'Agriculture, hunting, forestry and fishing'
            }
        ],
        [
            {
                'en_type':'T2',
                'industry':'Mining and quarrying'
            }
        ],
        [
            {
                'en_type':'T3',
                'industry':'Food products, beverages and tobacco'},
            {
                'en_type':'T4',
                'industry':'Textiles and textile products,leather and footwear'},
            {
                'en_type':'T5',
                'industry':'Wood and products of wood and cork'},
            {
                'en_type':'T6',
                'industry':'Pulp, paper, paper products, printing and publishing'},
            {
                'en_type':'T7',
                'industry':'Coke, refined petroleum products and nuclear fuel'},
            {
                'en_type':'T8',
                'industry':'Chemicals'},
            {
                'en_type':'T9',
                'industry':'Rubber and plastics products'},
            {
                'en_type':'T10',
                'industry':'Other non-metallic mineral products'},
            {
                'en_type':'T11',
                'industry':'Basic metals'},
            {
                'en_type':'T12',
                'industry':'Fabricated metal products, except machinery and equipment'},
            {
                'en_type':'T13',
                'industry':'Machinery and equipment, nec'},
            {
                'en_type':'T14',
                'industry':'Computer, electronic and optical equipment'},
            {
                'en_type':'T15',
                'industry':'Electrical machinery and apparatus, nec'},
            {
                'en_type':'T16',
                'industry':'Motor vehicles, trailers and semi-trailers'},
            {
                'en_type':'T17',
                'industry':'Other transport equipment'},
            {
                'en_type':'T18',
                'industry':'Manufacturing nec  recycling (include Furniture)'
            }
        ],
        [
            {
                'en_type':'T19',
                'industry':'Electricity, gas and water supply'
            },
            {
                'en_type':'T20',
                'industry':'Construction'
            },
            {
                'en_type':'T21',
                'industry':'Wholesale and retail tarde'
            },
            {
                'en_type':'T22',
                'industry':'Hotels and restaurants'
            },
            {
                'en_type':'T23',
                'industry':'Transport and storage',
            },
            {
                'en_type':'T24',
                'industry':'Post and Telecommunications'
            },
            {
                'en_type':'T25',
                'industry':'Finance and insurance'
            },
            {
                'en_type':'T26',
                'industry':'Real estate activities'
            },
            {
                'en_type':'T27',
                'industry':'Renting of Machinery and equipment'
            },
            {
                'en_type':'T28',
                'industry':'Computer and related activities'
            },
            {
                'en_type':'T29',
                'industry':'R&D and other business activities'
            },
            {
                'en_type':'T30',
                'industry':'Public administration and defence, compulsory social security'
            },
            {
                'en_type':'T31',
                'industry':'Education'
            },
            {
                'en_type':'T32',
                'industry':'Health and social work'
            },
            {
                'en_type':'T33',
                'industry':'Other community, social and personal services'
            },
            {
                'en_type':'T34',
                'industry':'Private households with employed persons & extra-territorial organizations & bodies'
            }
        ]
    ]
}
    return mockIndustry;
});

// Mock.mock(/getTableData/,function(){
//     let resultData = {
//     "code":0,
//     "msg":"",
//     "t_name":"gt_gbe",
//     // 1:5
//     "data":{
//         "current_page":1,
//         "first_page_url":"http://192.168.5.57:9000?page=1",
//         "from":1,
//         "last_page":1,
//         "last_page_url":"http://192.168.5.57:9000?page=1",
//         "next_page_url":null,
//         "path":"http://192.168.5.57:9000",
//         "per_page":15,
//         "prev_page_url":null,
//         "to":10,
//         "data":[
//             {"value":"0.00","e_country":"AUS","i_country":"AUS","year_type":2005,"id":25},
//             {"value":"40.39","e_country":"AUS","i_country":"BRN","year_type":2005,"id":47},
//             {"value":"565.43","e_country":"AUS","i_country":"CAN","year_type":2005,"id":69},
//             {"value":"120.70","e_country":"AUS","i_country":"CHL","year_type":2005,"id":91},
//             {"value":"2341.59","e_country":"AUS","i_country":"CHN","year_type":2005,"id":113},
//             // {"value":"0.00","e_country":"AUS","i_country":"AUS","year_type":2012,"id":533},
//             // {"value":"38.47","e_country":"AUS","i_country":"BRN","year_type":2012,"id":555},
//             // {"value":"386.25","e_country":"AUS","i_country":"CAN","year_type":2012,"id":577},
//             // {"value":"117.08","e_country":"AUS","i_country":"CHL","year_type":2012,"id":599},
//             // {"value":"3627.28","e_country":"AUS","i_country":"CHN","year_type":2012,"id":621}
//         ],
//         "total":10
//         }
//     // 5:5
// /*     "data":{
//     "code":0,
//     "msg":"",
//     "t_name":"gt_gbe",
//     "data":{
//         "current_page":1,
//         "first_page_url":"http://192.168.5.57:9000?page=1",
//         "from":1,
//         "last_page":4,
//         "last_page_url":"http://192.168.5.57:9000?page=4",
//         "next_page_url":"http://192.168.5.57:9000?page=2",
//         "path":"http://192.168.5.57:9000",
//         "per_page":15,
//         "prev_page_url":null,
//         "to":15,
//         "total":50,
//         "data":[
//             {"value":"6050.69","e_country":"AUS","i_country":"EU28","year_type":2005,"id":135},
//             {"value":"1.29","e_country":"BRN","i_country":"EU28","year_type":2005,"id":136},
//             {"value":"18582.50","e_country":"CAN","i_country":"EU28","year_type":2005,"id":137},
//             {"value":"1190.88","e_country":"CHL","i_country":"EU28","year_type":2005,"id":138},
//             {"value":"132322.71","e_country":"CHN","i_country":"EU28","year_type":2005,"id":139},
//             {"value":"186.17","e_country":"AUS","i_country":"HKG","year_type":2005,"id":157},
//             {"value":"109.15","e_country":"BRN","i_country":"HKG","year_type":2005,"id":158},
//             {"value":"3791.75","e_country":"CAN","i_country":"HKG","year_type":2005,"id":159},
//             {"value":"147.92","e_country":"CHL","i_country":"HKG","year_type":2005,"id":160},
//             {"value":"50140.72","e_country":"CHN","i_country":"HKG","year_type":2005,"id":161},
//             {"value":"582.70","e_country":"AUS","i_country":"IDN","year_type":2005,"id":179},
//             {"value":"18.46","e_country":"BRN","i_country":"IDN","year_type":2005,"id":180},
//             {"value":"519.56","e_country":"CAN","i_country":"IDN","year_type":2005,"id":181},
//             {"value":"4868.00","e_country":"CHL","i_country":"IDN","year_type":2005,"id":182},
//             {"value":"17622.92","e_country":"CHN","i_country":"IDN","year_type":2005,"id":183
//             }
//         ],
//         },
//         } */
//     }
//     return resultData;
// })

Mock.mock(/get3Ddata/,function(){
    let chart3DData = {
    "code":0,
    "msg":"",
    "t_name":"gt_gbe",
    "max":20000,
    "min":0,
    "xAxis":["AUS", "BRN", "CAN", "CHL"],
    "yAxis":["2005","2012"],
    "correspond_arr":["Trading Partner","Year","Value"],
    "data":[
            ["AUS",2005,2341.6],
            ["BRN",2005,3.22],
            ["CAN",2005,10048.11],
            ["CHL",2005,12347.75],
            ["AUS",2012,2341.6],
            ["BRN",2012,3.22],
            ["CAN",2012,10048.11],
            ["CHL",2012,12347.75],
        ]
    };
    // let data = echartOptions.generate3DData();
    // chart3DData.data = data;
    return chart3DData;
})

Mock.mock(/getPiedata/,function(){
    let chart2DData = echartOptions.generatePieData();
    // let chart2DData = echartOptions.echartPieOption;
    return chart2DData;
})
Mock.mock(/getBardata/,function(){
    let chart2DData = echartOptions.echartBarOption;
    return chart2DData;
})
Mock.mock(/getLinedata/,function(){
    let chart2DData = echartOptions.echartLineOption;
    return chart2DData;
})
Mock.mock(/getTreedata/,function(){
    let chart2DData = echartOptions.echartTreeOption;
    return chart2DData;
})
Mock.mock(/getTreeMapdata/,function(){
    let chart2DData = echartOptions.echartTreeMapOption;
    return chart2DData;
})

