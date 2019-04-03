import axios from 'axios';
export default {
    getIndustry() {
        let echartIndustry = []
        let newData = []
        axios({
            method: 'GET',
            url: global.DEV_HOST + '/getIndustry',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(function (response) {
            let data = response.data.data
            data.forEach((item, index) => {
                newData.push({
                    value: item.en_type,
                    label: item.industry
                })
                echartIndustry.push(item.en_type)
            });
        }).catch(function (error) {
            console.log(error);
        });
        return newData;
    },

    getCountry() {
        let echartCountry = []
        let newData = []
        axios({
            method: 'GET',
            url: global.DEV_HOST + '/getCountry',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(function (response) {
            let data = response.data.data
            data.forEach((item, index) => {
                newData.push({
                    value: item.country,
                    label: item.en_name
                });
                echartCountry.push(item.country)
            });
        }).catch(function (error) {
            console.log(error);
        });
        return newData;
    },

    getYearOptions() {
        let yearOptions = [{
            label: '2005',
            value: '2005'
        }, {
            label: '2012',
            value: '2012'
        }];
        return yearOptions;
    },

    exportData(tableData,name) {
        tableData.exportCsv({
            filename: name
         });
    },

    exportAllData(data) {
        // Vue.delete(data, 'page')
        axios({
            method: 'GET',
            url: global.DEV_HOST + '/export',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            params: data,
            responseType: 'blob'
        }).then(function (response) {
            let url = window.URL.createObjectURL(response.data);
            // window.location.href = url;
            var link = document.createElement('a');
            // link.download = that.text + ' ' + that.subtext;
            link.href = url;
            link.click();
            window.URL.revokeObjectURL(link.href)
        }).catch(function (error) {
            console.log(error);
        });
    },

}