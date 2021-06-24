let line = 5;
for(let i = line ; i >= 1 ; i--){
  let blank = '';
  // for(let j = i ; j <= line; j++){
    
  //   blank += ' ';
  // }
    for(let j = line ; j >= i; j--){
    
    blank += ' ';
  }

  for(let k = (i*2)-1  ; k>0 ; k--){
    blank += '*';
    
  }
  console.log(blank);
} 

// line =라인값 입력받은만큼 나오게하기
// 정렬안한 상태로 13579/ 97531 출력
// 정렬하기 


+ - + - + - + - +
 - + - + - + - +
- + - + - + - + -
 - + - + - + - + 
