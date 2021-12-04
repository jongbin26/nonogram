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
  <!-- ajax -->
  <input type="button" value="ajax 테스트" id="ajax_btn">

</body>
</html>

<?php
print_r($_GET);
?>