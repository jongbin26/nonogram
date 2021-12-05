<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/main.css">
  <link rel="stylesheet" href="../css/tuto.css">
  <script defer src="../js/tutoLevel1.js"></script>
  <script defer src="../js/tutoLevel2.js"></script>
  <script defer src="../js/tutoLevel3.js"></script>
  <script defer src="../js/tutoclock.js"></script>
  <script defer src="../js/save.js"></script>
  <link rel="icon" href="../favicon.PNG"/>
  <title>NONOGRAM</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap" rel="stylesheet">
</head>
<body>
  <!-- 돌아가기버튼 -->
  <div class="return">
    <a href="/nonogram.php"><</a>
  </div>

  <div class="start">
    <div class="start-box">
      <div class="level">
        <p class="level1 focus">level1</p>
        <p class="level2">level2</p>
        <p class="level3">level3</p>
      </div>
      <ul class="gamelist"></ul>
    </div>
  </div>

</body>
</html>

<?php
  session_start();

  $newScore = $_GET; // 정보 들어있는 array
  // newScore([name]=>'홍길동', [lv]=>lv1_2, [time]=>10.00)

  if(sizeof($newScore) != 3) {
    exit();
  }

  $name = "name";
  $lv = "lv";
  $time = "time";

  $_SESSION['connect'] = mysqli_connect("localhost", "root", "cscscs");
  $_SESSION['db_nonogram'] = mysqli_select_db($_SESSION['connect'], 'nonogram');

  $timeList = array();
  $score_result = mysqli_query($_SESSION['connect'], "SELECT score_time FROM $newScore[lv]");

  $create_table_query = "INSERT INTO $newScore[$lv] VALUES ('" . $newScore[$name] . "', $newScore[$time])";
  $results = $_SESSION['connect']->query($create_table_query);
  if($results == false) {
    echo "Error: " . $create_table_query . "<br>" . $_SESSION['connect']->error;
  }

  $toGetRow=mysqli_query($_SESSION['connect'], "SELECT * FROM $newScore[lv]");
  if (mysqli_num_rows($toGetRow) > 3) {
    $create_table_query = "DELETE FROM $newScore[$lv] WHERE score_time=(SELECT max(score_time) FROM $newScore[lv]);";
    $results = $_SESSION['connect']->query($create_table_query);
    if($results == false) {
      echo "Error: " . $create_table_query . "<br>" . $_SESSION['connect']->error;
    }
  }

  // 데이터베이스 출력 SELECT * FROM $newScore[$lv] ORDER BY score_time ASC
?>
