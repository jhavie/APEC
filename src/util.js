import axios from 'axios';
import store from '@/store.js'
const instance = axios.create({
    baseURL: global.DEV_HOST,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

export default instance;
export function mapData(responseData){
// let industry = store.getters.getRawIndustry;
    let newData = []
    newData = responseData.forEach(item=>{
        let i = find(item.industry)
        return {
            id: item.id,
            exp: item.exp,
            imp: item.imp,
            industry: i.enName+" "+i.enType+" "+i.industryCode,
            value: item.value,
            year_type: item.year_type
        }
    })

    console.log(newData);
    // that.tableData.map(item=>{
    //     {
    //         id:item.id,
    //         exp:item.exp,
    //         imp:item.imp,
    //         industry:item.industry,
    //         value:item.value,
    //         year_type:item.year_type
    //     }
    // })
    return newData;

}

function find(i){
    let industry = store.getters.getRawIndustry;
    // console.log(industry);
    let obj = industry.filter(item=>{
            return item.enType === i
        })
    return obj[0]
}