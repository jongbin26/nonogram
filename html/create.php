<?php
  session_start();

  if(!isset($_SESSION['connect'])) {
    $_SESSION['connect'] = mysqli_connect("localhost", "root", "cscscs");
    if($_SESSION['connect'] -> connect_errno) {
      die("Cannot connect! " . $_SESSION['connect'] -> connect_error);
    }

    $db_nonogram = mysqli_select_db($_SESSION['connect'], 'nonogram');
    if(!$db_nonogram) {
      if(!mysqli_query($_SESSION['connect'], "CREATE DATABASE nonogram")) {
          echo "<script>alert('Failed to Create Databases :: nonogram');</script>";
        return;
      }
    }
    $db_nonogram = mysqli_select_db($_SESSION['connect'], 'nonogram');

    $check = mysqli_query($_SESSION['connect'], "SELECT score_name FROM lv1_1");
    if($check == false) {
      for ($i = 1; $i <= 3; $i++) {
        for ($j = 1; $j <= 14; $j++) {
          $lv = "lv" . $i . "_" . $j;
          $create_table_query = "CREATE TABLE $lv (
                        score_name varchar(20),
                        score_time float(10),
                        PRIMARY KEY (score_name)
                        )";
          $results = $_SESSION['connect']->query($create_table_query);
          if($results == false) {
            echo "Error: " . $create_table_query . "<br>" . $_SESSION['connect']->error;
          }
        }
      }
    }
  }
?>

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/main.css">
  <link rel="stylesheet" href="../css/create.css">
  <script defer src="../js/create.js"></script>
  <link rel="icon" href="../favicon.PNG"/>
  <title>NONOGRAM</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap" rel="stylesheet">
</head>
<body>

  <!-- 돌아가기 버튼 -->
  <div class="return">
    <a href="/nonogram.php"><</a>
  </div>

  <div class="create">
    <div class="create-box">
      <div class="level">
        <div class="level1">level1</div>
        <div class="level2">level2</div>
        <div class="level3">level3</div>
      </div>
      <div class="board">
        <table>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
            <tr>
              <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
            </tr>
        </table>
      </div> 
      <div class="plus">plus</div>
    </div>
  </div>
</body>
</html>