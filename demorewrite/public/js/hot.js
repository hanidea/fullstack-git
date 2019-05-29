// ajax请求热门排行数据
$.ajax({ 
	type : "GET",
	url: "http://demowrite.com:8888/api/hot.php",
	dataType : "json",
	success: function(result){
        if(result.code == 1){
            html = '';
            // 如果数据请求成功
            $.each(result.data,function(key,value){
                html += '<li><a href="#">'+value.title+'</a></li>';
            });
            $("#hot_html").html(html);
        }
	}
});