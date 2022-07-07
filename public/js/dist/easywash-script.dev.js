"use strict";

//===============================
// 手機板 PC板 menu nav
//========================
// 定義視窗寬度的變數
var windowWidth = $(window).width();

if (windowWidth >= 768) {
  //大於等於768執行
  //$('nav>ul>li').hover(functiom(){}, function(){})
  $('nav>ul>li').hover(function () {
    //滑鼠滑入執行
    $(this), find('.submenu').addClass('active');
  }, function () {
    //滑鼠滑出執行
    $(this), find('.submenu').removeClass('active');
  });
} else {
  //小於768執行
  $('#btn-nav-switch').on('click', function () {
    $('nav').toggleClass('active');
  }); // btn-nav-switch end

  $('nav>ul>li').on('click', function () {
    $(this).find('.submenu').toggleClass('active');
  }); // nav>ul>li end
} //大於等於768執行 end


$('.question-container').on('click', function () {
  $(this).toggleClass('active');
  $(this).siblings().removeClass('active');
}); //.question-content end

new WOW().init();