var _cities = {
    cityInfo :{
        '北京':['北京'],
        '上海':['上海'],
        '天津':['天津'],
        '重庆':['重庆'],
        '河北省':['石家庄','张家口','承德','秦皇岛','唐山','廊坊','保定'],
        '山西省':['太原','大同','朔州','阳泉','长治'],
        '香港':['香港'],
        '澳门':['澳门'],
        '台湾':['台北','台南','其他']
    },
    //获取所有的省份
    getProvinces : function(){
        var provinces = [];
        for(var item in this.cityInfo){
            provinces.push(item);
        }
        return provinces;
    },
    //获取某省份的所有城市
    getCities : function(provinceName){
        return this.cityInfo[provinceName] || [];
    }
}
module.exports = _cities