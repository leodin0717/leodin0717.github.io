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
    $str = "달러는 변수이다, 변수명: 영문자, 숫자, _<br>";
    echo "$str";
    echo $str;
    $a = 10;
    $b = 20;
    $sum = $a+ $b;
    echo "$sum <br>";
    echo $a + $b ;
    echo "따옴표를 쓰면 문자열로 출력<br>"
    echo $a * $b ,"곱하기<br>";
    echo $b / $a ,"나누기<br>";
    echo $a **2 ,"제곱<br>";
    ?>
    <?php
for($i = 0; $i<10; $i++){
  if($i % 2 == 0) continue;
  for($j = 0; $j<10; $j++){
    if($j % 2 == 0) continue;
    echo($i, $j, ($i*$j));
  }
}
?>
</body>
</html>