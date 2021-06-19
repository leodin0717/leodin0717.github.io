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

let sum = '';
let length = 5;
for( i = 0; i < length; i++){
  for( j = length; j>i; j--){
    sum +=' ';
  }
  for(j = 0; j<=2*i ;j++){
    sum +='*';
  }
  sum += '\n';
}
for( i = 0; i < length; i++){
  for( j = 0; j<i; j++){
    sum +=' ';
  }
  for(j = 0; j<2*length -2*i-1  ;j++){
    sum +='*';
  }
  sum += '\n';
}
console.log(sum);




