<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
    session_start();
    if(isset($_SESSION['userid'])) $userid = $_SESSION['userid'];
    else $userid = '';
    if(isset($_SESSION['username'])) $userid = $_SESSION['username'];
    else $username = '';
    if(isset($_SESSION['userlevel'])) $userid = $_SESSION['userlevel'];
    else $userlevel = '';
    if(isset($_SESSION['userpoint'])) $userid = $_SESSION['userpoint'];
    else $userpoint = '';
    ?>
  <div>
  <?php
    if(!$userid){
      ?>
      <a href="member_form.php">회원가입</a>
      |
      <a href="login_form.php">로그인</a> 
      }
    else{
      <?php
      $logged = $username."('$userid')님 [level: '$userlevel', point: '$userpoint']";
      ?>
    }

  </div>
</body>
</html>