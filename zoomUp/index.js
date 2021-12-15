window.addEventListener('scroll', () => {
  //idがkeyvisualの要素を取得
  let elem = document.getElementById('keyvisual');
  //現在のスクロール位置を取得して、10で除算
  let scrollY = window.scrollY/10;
  //上で取得した値と画像幅を加算して、elemの背景サイズに設定
  elem.style.backgroundSize = 100 + scrollY + '%';
});
