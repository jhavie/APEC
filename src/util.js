import axios from 'axios';
const instance = axios.create({
    baseURL: global.DEV_HOST,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

export default instance;
export function mapData(){
    console.log(1)
        // that.tableData.map(item=>{
    return 1
    // {
    //     id:item.id,
    //     exp:item.exp,
    //     imp:item.imp,
    //     industry:item.industry,
    //     value:item.value,
    //     year_type:item.year_type
    // }
    // })

}