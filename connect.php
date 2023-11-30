<?php
 $firstname =$_post['firstname'];
 $lastname =$_post['lastname'];
 $phone_number =$_post['phone_number'];
 $password=$_post['password'];

 //database connection
//  $conn = new mysqli('localhost','root','','test');
//  if($conn->connect_error){
//     die('connection failed : '.$conn->connect_error)
//  }
// else{
//     $stmt = $conn->prepare("insert into registration(firstname, lastname, phone_number, password)
//     values(?, ?, ?, ? ");
//     $stmt->bind_param("sssssi", $firstname, $lastname, $phone_number, $password);
//     $stmt->execute();
//     echo "registration successfull...";
//     $stmt->close();
//     $conn->close();
//  }
// ?>