<?php
	// 引入其他php文件
	include 'connect.php';

	// $phonenumber = isset($_GET['phonenumber']) ? $_GET['phonenumber'] : '';
	// $password = isset($_GET['password']) ? $_GET['password'] : '';

	// md5加密
	// $password = md5($password);
	$phonenumber = $_GET["phonenumber"];
	$password = $_GET["password"];
	$sql = "select * from user where phonenumber='$phonenumber' and password='$password'";
	
	// 获取查询结果
	$data = $conn->query($sql);

	if($data->num_rows > 0){
		echo "ok";
		
	}else{
		echo "no";
			
	};
	
	// $url  =  "http://localhost/ztuan/src/index.html" ;  
	// echo " <   script   language = 'javascript'  
	// type = 'text/javascript' > ";  
	// echo " window.location.href = '$url' ";  
	// echo " <  /script > ";  
	//关闭连接
	$conn->close();
?>