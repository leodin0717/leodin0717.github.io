<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script type="text/javascript" src="login.js">
  </script>
</head>
<body>
  <header>
    <?php include "header.php";?>
  </header>
  <hr>
  <section>
    <form name="login_form" method="post" action="login.php">
      <p>
        아이디 : <input type="text" name="id"><br>
        비밀번호 : <input type="password" name="pass"><br>
        <input type="button" value="Click" onclick="check_input()">
      </p>
  </form>
  </section>
  <hr>
  <footer>
    <?php include "footer.php";?>
  </footer>
</body>
</html>