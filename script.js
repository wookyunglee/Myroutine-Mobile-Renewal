// $(document).ready(function(){}) == $(function(){})
// // 	충돌을 막기 위해서 html이 끝나고 js 시작
// // document:html이 무거울 경우 사용
// // 함수가 제대로 작동하는 지 확인하는 방법 2가지
// 1. alert("text")
// $(document).redy(function(){
// 	$("class name").click(function(){
// 		 alert("알림");
// 	})
// });


// console.clear();
// // 콘솔 창 깨끗하게 지우기 : 문서 시작 할때 가장 위에 씀

// 2.console.log("text")
// $(document).ready(function(){
// 	$("class name").click(function(){
//     console.log("콘솔")
// 	})
// });


// //     let = var : 정의를 내린다.

$(document).ready(function(){
  $(".guide__select1").click(function () {
    $(this).addClass("active");
    $(this).next().removeClass("active");
    $(this).next().next().removeClass("active");

    $(".guide__box1").addClass("active");
      $(".guide__box1").next().removeClass("active");
      $(".guide__box1").next().next().removeClass("active");
  });

  $(".guide__select2").click(function () {
    $(this).addClass("active");
    $(this).prev().removeClass("active");
    $(this).next().removeClass("active");

    $(".guide__box2").addClass("active");
    $(".guide__box2").prev().removeClass("active");
    $(".guide__box2").next().removeClass("active");
  });

  $(".guide__select3").click(function () {
    $(this).addClass("active");
    $(this).prev().removeClass("active");
    $(this).prev().prev().removeClass("active");

    $(".guide__box3").addClass("active");
    $(".guide__box3").prev().removeClass("active");
    $(".guide__box3").prev().prev().removeClass("active");
  });


})