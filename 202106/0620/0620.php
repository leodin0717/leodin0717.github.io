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
    $list = file('*.txt');
    ?>

  <table border='1' width='700'>
    <tr>
      <th>이름</th>
      <th>이름2</th>
      <th>이름3</th>
    </tr>
  <?php
    foreach($list as $content){
      $str = explode(', ', $content);
  ?>

      <tr>
          <td><?=$str[0]?></td>
          <td><?=$str[1]?></td>
          <td><?=$str[2]?></td>
    </tr>

  <?php } ?>
  </table>
</body>
</html>