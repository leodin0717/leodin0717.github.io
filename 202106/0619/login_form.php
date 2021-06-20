<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php include 'header.php' ?> <hr>
  <form action="login.php" name='login_form' method='post'>
  아이디 : <input type="text" name="id"><br>
  비밀번호 : <input type="password" name="pass"><br><br>
  <input type="button" onclick='check_input()' value="Click">
  </form>
  <hr>
  <?php include 'footer.php' ?>
</body>
</html>