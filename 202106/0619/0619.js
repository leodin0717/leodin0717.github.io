// let sum = '';
// let length = 9;
// for( i=0; i<length; i++){
//   for(j = length; j>i+1; j--){
//     sum += ' ';
//   }
//   for(j = 0; j<(2*i)+1; j++){
//     sum +='*';
//   }
//   sum +='\n';
// }
// console.log(sum);

// let sum = '';
// let length = 9;
// for( i=0; i<length; i++){
//   for(j =length-1; j>i; j--){
//     sum += ' ';
//   }
//     for(j =0 ; j<=i ;j++){
//       sum +='*';
//     }
//   sum +='\n'
// }
// console.log(sum);

// let sum = '';
// let length = 9;
// for( i=0; i<length; i++){
//   // for(j =length-1; j>i; j--){
//   //   sum += ' ';
//   // }
//     for(j =length ; j>i ;j--){
//       sum +='*';
//     }
//   sum +='\n'
// }
// console.log(sum);

// let sum = '';
// let length = 5;
// for( i = 0; i < length; i++){
//   for( j = length-1; j>i; j--){
//     sum +=' ';
//   }
//   for(j = 0; j<2*i+1 ;j++){
//     sum +='*';
//   }
//   sum += '\n';
// }
// for( i = 0; i < length; i++){
//   for( j = 0; j<=i; j++){
//     sum +=' ';
//   }
//   for(j = 0; j<2*(length-i)-3  ;j++){
//     sum +='*';
//   }
//   sum += '\n';
// }
// console.log(sum);
// 마름모 완성

// let sum = '';
// let length = 5;
// for(i=0; i<length; i++){
//   for(j = 0; j<i; j++){
//     sum += ' ';
//   }
//   for(k = 0; k<2*(length-i)-1; k++){
//     sum +='*';
//   }
//   sum += '\n';
// }

// length = 4;
// for(i=0; i<length; i++){
//   for(j = 0; j<length-i-1; j++){
//     sum +=' ';
//   }
//   for(k = 0; k<length+2*i-1; k++){
//     sum +='*';
//   }
//   sum+='\n';
// }

// console.log(sum);

mul = function(n){
let sum = 1;
for(i=1; i<=n; i++){
  sum *= i
};
return sum;
};

mul(10);


