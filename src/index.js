// canvas要素の取得
const canvas = document.getElementById("maincanvas");
const ctx = canvas.getContext("2d");

// ロード時に画面描画の処理が実行されるようにする
window.addEventListener("load", update);

// 画面を更新する関数を定義 (繰り返しここの処理が実行される)
function update() {
  // 画面全体をクリア
  ctx.clearRect(0, 0, 640, 480);

  // 主人公の画像を表示
  var image = new Image();
  image.src = "../images/character-01/base.png";
  ctx.drawImage(image, 0, 0, 32, 32);

  // 再描画
  window.requestAnimationFrame(update);
}
