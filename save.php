<?php
  

  $servername="localhost";
  $username="root";
  $password="";
  $dbname="college";


  $con=mysqli_connect($servername,$username,$password,$dbname);
   
  if(!$con)
  {
    echo "not connected";
  }
  

  $name = $_POST['name'];
  $email= $_POST['email'];
  $contact=$_POST['contact'];
  $message=$_POST['message'];

  $sql ="INSERT INTO `college`(`name`, `email`, `subject`, `message`) VALUES ('$name','$email','$contact','$message')";

   $result= mysqli_query($con ,$sql);
   if($result)
   {
    echo "data submitted";
   }
   else {
     echo "query failed...!!!";
   }
   ?>