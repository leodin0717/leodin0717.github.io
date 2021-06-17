// 트리********************
// const num = 5;
// for(let i =1 ; i<=num;  i++){
//   let star = "";
//   for(let k =1; k<=num-i; k++){
//     star +=' ';
//   }
//   for(let j = 1 ; j<=(i*2)-1; j++){
//     star +='*';
//   }
  
//   console.log(star);
// }
// i = 1, j <=1
// i = 2, j <=3
// i = 3, j <=5
// i = 4, j <=7
// i = 5, j <=9

//****************펙토리얼
// let nInput = 5;
// let nFac = 1;
// let i = 2;
// while(i<=nInput){
//   nFac *= i;
//   i++;
// }
// console.log(nInput,"!=",nFac);
// n!
// 1*.2.3.4.5....n = 
// i += i 
//(((1*2)*3)*4)*5


//************1~100 까지 짝수끼리의 합을 구하시오.(while or For)
// 짝수 = 2 + 4 + 6 + 8 + 10 ...+100
   // ==> 2*1 + 2*2 + 2*3 + 2*4 + 2*50
// let sum = 0;
// let even = 2;
// for(let i =1; i<=50; i++ ){
//   sum = sum + even*i
// }
// console.log(sum);

// let sum = 0;
// for(let i=1 ; i<=100 ; i++){
//   if(i%2 == 0){
//     sum += i;
//     sum = sum + i
//   }
// }
// console.log(sum);

// 10~15
// (1+0) + (1+1) + (1+2) + (1+3) + (1+4) + (1+5)

// 12 = 10 + 2
// 12/ 10  의 몫 1 나머지 2
// (12/10 ) + 12(%10)
// Math.floor 나머지를 버려라

 //10의 자리 숫자를 1의 자리 숫자로 만드려면 10으로 나눈다.
 // 1의 자리로 만든 수와 뒷자리 수를 더한다
 // 그 다음 더할 때 뒷 자리수를 ++ 해준다.

const start = 10;
const end = 15;
let sum = 0;


for(let i = start ; i<=end ; i++){
    console.log(i);
    let floor = Math.floor(i/10);
    let remain = (i%10);
    sum += floor;
    //sum = sum + floor
    sum += remain;
}
console.log(sum);

// let value = function (name){
//   return `${name} 님 안녕`;

// }
// let value = (name) => {
//   `${name} 님 아녕`;
// };
// console.log(value('hong'));
