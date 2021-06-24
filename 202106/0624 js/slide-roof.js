
const IMAGE_WIDTH = 300;
const slide_list = document.querySelector('.slide_list');
const slide_contents = document.querySelectorAll('.slide_contents');
const SLIDE_CON_LEN = slide_contents.length;
let curIndex = 0;


function clickBtnNext(){
  if(curIndex <= SLIDE_CON_LEN-1){
    //translate를 이용해서 이동
      slide_list.style.transition = '300ms';
      slide_list.style.transform = 'translateX(-' + IMAGE_WIDTH*(curIndex+2)+'px)';
  }
  if(curIndex === SLIDE_CON_LEN-1){
    //slide_list 위치 이동 : 첫번째 이미지가 보여지도록
    slide_list.style.transition = '0ms';
    slide_list.style.transform = ('translateX(' + 0 + 'px)'
  }
  curIndex++;
}

function clickBtnPrev(){
  if(curIndex >= 0){
        //translate를 이용해서 이동
      slide_list.style.transition = '300ms';
      slide_list.style.transform = 'translateX(' + IMAGE_WIDTH*curIndex +'px)';

  }
  if(curIndex === 0 ){
    //slide_list 위치 이동 : 마지막 이미지가 보여지도록
    setTimeout(function(){
      slide_list.style.transition = '0ms';
      slide_list.style.transform = 'translateX(-' + (IMAGE_WIDTH*SLIDE_CON_LEN) + 'px)';
    },SLIDE_SPEED);
    curIndex = SLIDE_CON_LEN;
  }
  curIndex--;
}

function btnEvent(){
  const btnNext = document.querySelector('.slide_btn_next');
  const btnPrev = document.querySelector('.slide_btn_pre');
  btnNext.addEventListener('click', clickBtnNext);
  btnPrev.addEventListener('click', clickBtnPrev);
}
function cloneImageNode(){
  const firstNode = slide_list.firstElementChild;
  const lastNode = slide_list.lastElementChild;
  let cloneFirst = firstNode.cloneNode(true);
  let cloneLast = lastNode.cloneNode(true);
  slide_list.appendChild(cloneFirst);
  slide_list.insertBefore(cloneLast,firstNode);
}
function init(){
// 초기화 함수
  btnEvent();
  cloneImageNode();
  // slide list 전체 width 설정
  slide_list.style.width = IMAGE_WIDTH * (SLIDE_CON_LEN+2) + 'px';
  slide_list.style.transform = 'translateX(0)';
}
init();

