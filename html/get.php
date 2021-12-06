<?php
        session_start();

        $_SESSION['connect'] = mysqli_connect("localhost", "root", "cscscs");
        $_SESSION['db_nonogram'] = mysqli_select_db($_SESSION['connect'], 'nonogram');

        $boards = array();
        for ($i = 1; $i <= 3; $i++) {
          for ($j = 1; $j <= 14; $j++) {
            $lv = "lv" . $i . "_" . $j;
            $create_table_query = "SELECT * FROM $lv ORDER BY score_time ASC";
            $results = $_SESSION['connect']->query($create_table_query);
            if($results == false) {
              echo "Error: " . $create_table_query . "<br>" . $_SESSION['connect']->error;
            }
            for ($rank = 1; $rank <= 3; $rank++) {
              if($toGetArray = mysqli_fetch_array($results)) {
                $boards[$lv][$rank] = $toGetArray; // $boards[lv1_1][1][score_name]부터 $boards[lv3_14][3][score_time]까지 저장
              }
              else {
                $boards[$lv][$rank] = Array("score_name"=>"","score_time"=>"");
              }
            }
            
          }
        }
        echo json_encode($boards);
?>