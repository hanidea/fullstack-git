<?php
//链接数据库，获取数据
//获取的数据填充到模版文件
//把动态页面转化为静态页面，生成纯静态文件
if(is_file('./index.shtml') && (time()-filemtime('./index.shtml') < 1200)) {
	require_once('./index.shtml');
}else {
require_once('./db.php');
$connect = Db::getInstance()->connect();
$sql = "select * from news where `category_id`= 1 and `status`= 1 order by id desc limit 5";
$result = mysql_query($sql,$connect);
$new = array();
while($row = mysql_fetch_array($result)){
    $news[]=$row;
}
ob_start();
//引入模版文件
require_once('./templates/singwa.php');
file_put_contents('index.shtml',ob_get_contents());
// if(file_put_contents('index.shtml',ob_get_clean())){
//     echo "success";
// }else{
//     echo "error";
// }
}