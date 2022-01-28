<?php
session_start();
$conn = new mysqli("localhost", "root" , "", "artigianonline");
if (!$conn) 
{
  echo"Connection failed: " . mysqli_connect_error();
  die();
}