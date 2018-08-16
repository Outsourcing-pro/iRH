const base = {
    // 服务端返回成功的状态码
    errok: 200,
    config: {
		duration_X: 300, // 动画持续时长
		duration: 300,
		duration_S: 150
    },
    formatDatetime: function(validDate, fmt) {
        if (typeof validDate === 'string'){
            validDate = validDate.replace('T',' ').replace(/-/g,'\/');
        } else if (validDate === undefined){
            return '';
        }
        let date = new Date(validDate);
        var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) 
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
}

export default base;