// 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요
입력 : 18234
출력 : 18

입력 : 3849
출력 : 24

// 각 자릿수를 분리
//


// for(let i = start ; i<=end ; i++){
//     console.log(i);
//     let floor = Math.floor(i/10);
//     let remain = (i%10);
//     sum += floor;
//     //sum = sum + floor
//     sum += remain;
// }
// console.log(sum);

var num = 12345; 
var sum = 0;
 for(i=0;i<5;i++)
  { sum+=num%10; 
    // console.log(sum);
    num = parseInt(num/10); 
    console.log(num);
  }
  // console.log(sum);



// let sum = 0;
// let num = '18234';
// for( let i = 0; i < num.length ; i++){
//   console.log(num[i]);
//   // sum += num[i];
//   sum += Number(num[i]);
// }
// console.log(sum);


// let sum = 0;
// let num = '3849';
// for(let i =0 ; i<num.length; i++ ){
//   console.log(num[i]);
//   sum += Number(num[i]);
// }
// console.log(sum);

