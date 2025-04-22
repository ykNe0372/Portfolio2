const loading = document.getElementById('loading');
const isFirstLoad = sessionStorage.getItem('isFirstLoad');

// cssクラスを追加する関数
function animation() {
  loading.classList.add('loaded');
}

//画面が読み込まれたら animation を呼び出す
window.addEventListener('load', function() {
  if (!isFirstLoad) {
    animation();
    sessionStorage.setItem('isFirstLoad', true);
  } else {
    loading.style.display = 'none';
  }
});