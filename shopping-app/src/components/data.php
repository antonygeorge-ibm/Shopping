<?php

$conn = mysqli_connect("localhost","root","","user_data");

$result=mysqli_query($conn,"SELECT * FROM details");

$data = array();
while($row=mysqli_fetch_assoc($result))
{
    $data[]=$row;
}

echo json_encode($data);
