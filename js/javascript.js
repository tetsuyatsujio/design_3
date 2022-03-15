

document.addEventListener('DOMContentLoaded', function(){
    // タブに対してクリックイベントを適用
    const tabs = document.getElementsByClassName('tab');
    for(let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', tabSwitch, false);
    }
  
    // タブをクリックすると実行する関数
    function tabSwitch(){
      // タブのclassの値を変更
      document.getElementsByClassName('is-active')[0].classList.remove('is-active');
      this.classList.add('is-active');
      // コンテンツのclassの値を変更
      document.getElementsByClassName('is-show')[0].classList.remove('is-show');
      const arrayTabs = Array.prototype.slice.call(tabs);
      const index = arrayTabs.indexOf(this);
      document.getElementsByClassName('panel')[index].classList.add('is-show');
    };
  }, false);


// 時間の指定
var timer = 3000;
// スライドする要素を取得
var imgs = document.querySelectorAll('#slider img');
// 最初の画像を表示
imgs[0].classList.add('show');
// 画像の番号
var imgNum = 0;
function showImg () {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove('show');
  }
  if (imgNum >= imgs.length - 1) {
    imgNum = 0;
  } else {
    imgNum++;
  }
  imgs[imgNum].classList.add('show');
  showImgTimer();
}
function showImgTimer () {
  setTimeout(showImg, timer);
}
showImgTimer()



//ボタン
const scroll_to_top_btn = document.querySelector('#scroll-to-top-btn');

//クリックイベントを追加
scroll_to_top_btn.addEventListener( 'click' , scroll_to_top );

function scroll_to_top(){
	window.scroll({top: 0, behavior: 'smooth'});
};


//スクロール時のイベントを追加
window.addEventListener( 'scroll' , scroll_event );

function scroll_event(){
	
	if(window.pageYOffset > 400){
		scroll_to_top_btn.style.opacity = '1';
	}else	if(window.pageYOffset < 400){
		scroll_to_top_btn.style.opacity = '0';
	}
	
};