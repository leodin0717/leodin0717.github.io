// for(i = 1 ; i <= 9 ; i++){
//   for(j = 1 ; j <= 9; j++){
//       console.log(i, '*', j, '=', i*j);
//   }
// }


// const line = 5;
// let star = '';
// for(let i = 1; i<=line; i++){
//   for(let j = 1; j<=(2*i)-1; j++){
//     star += '*';
//   }
//   console.log(star);

const line = 5;
let star = '';
for(let i = 1 ; i<=line; i++){
  for(let j = 1; j<=line-i; j++)
  
  star += ' ';
  for(let k = 1; k<=2*i-1; k++)
  star += '*';
}
console.log(star);
