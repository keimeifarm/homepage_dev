$(function() {
  // タブ押下時の切り替え処理
  $("ul#panel li:not("+$("ul#menu li a.selected").attr("href")+")").hide();
  $("ul#menu li a").click(function(){
    $("ul#menu li a.selected").removeClass("selected");
    $(this).addClass("selected");
    $("ul#panel li").hide();
    $($(this).attr("href")).show();            // パッと表示
    //$($(this).attr("href")).slideDown("fast"); // 上から下へスライド
    //$($(this).attr("href")).fadeIn(1000);        // フェードイン
    return false;
  });

  // トップ画像切替え
  let index = 0;
  $('.img').eq(index).addClass('current-img');
  setInterval(function(){
    // 非表示
    $('.img').eq(index).removeClass('current-img');
    // 画像の最後判定
    if(index == $('.img').length - 1){
      index = 0;
    }else{
      index++;
    }
    // 表示
    $('.img').eq(index).addClass('current-img');
  }, 7000);

});

