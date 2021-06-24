
const IMAGE_WIDTH = 300;

//이미지 갯수
const slide_contents = document.querySelectorAll(".slide_contents");
const slide_list = document.querySelector('.slide_list'); // 자바에선 문자열을 작은따옴표로 사용
const btnPrev = document.querySelector(".slide_btn_pre");
const btnNext = document.querySelector(".slide_btn_next");
const SLIDE_CON_LEN = slide_contents.length;


let curIndex = 0; // 현재 보여지고 있는 이미지의 index

function clickBtnPrev(){
    // console.log("prev");  콘솔 로그로 찍으면서 계속 확인해야 함
    curIndex--;
    if(curIndex <0){
      curIndex = 0;
    }

    btnNext.removeAttribute('disabled');
      slide_list.style.transform = `translateX(-${IMAGE_WIDTH*(curIndex)}px)`; //-300px 이동
      slide_list.style.transition = `300ms`; //

    if(curIndex === 0){
      btnPrev.setAttribute('disabled','true');
    }
}

function clickBtnNext(){
    if(curIndex >= SLIDE_CON_LEN -1 )
      {curIndex = SLIDE_CON_LEN-1;
      }
    else{
      curIndex++; // 현재 이미지 index 증가 0에서 1로 증가됨
      slide_list.style.transform = `translateX(-${IMAGE_WIDTH*(curIndex)}px)`; //-300px 이동
      slide_list.style.transition = `300ms`; //
      btnPrev.removeAttribute('disabled');
    }
    if(curIndex === SLIDE_CON_LEN-1){
      btnNext.setAttribute('disabled','true');
    }
}


// 버튼 이벤트 처리
function btnEvent(){
btnPrev.addEventListener('click', clickBtnPrev);
btnNext.addEventListener('click', clickBtnNext);
}

function init(){ //여러가지 시작 함수를 모아서 실행하기 위한 함수
  btnEvent(); //버튼 이벤트 함수 호출
  //slide_list의  width값 설정
  slide_list.style.width = (IMAGE_WIDTH * SLIDE_CON_LEN) + 'px'; //css속성을 변경할때 'style' 속성
  slide_list.style.transform = 'translateX(0px)';
  btnPrev.setAttribute('disabled','true');
}

init();