<?php
// 数据库连接信息
$servername = "192.168.0.100";
$username = "cheesett_JuneT";
$password = "5tgb\$RFV";
$dbname = "cheesett_curious";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

// 查询
$sql = "SELECT id, name FROM test";
$result = $conn->query($sql);

// 准备数据
$data = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// 关闭连接
$conn->close();

// 返回JSON数据
header('Content-Type: application/json');
echo json_encode($data);
?>
