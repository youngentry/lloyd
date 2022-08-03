$(function () {
  $(".mainSlider").slick({
    arrows: false,
    autoplay: true,
    // autoplaySpeed: 0,
    speed: 500,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 1,
    cssEase: "linear",
  });

  $(".featureSlider").slick({});

  var xCoor = $(window).on("mousemove", function (e) {
    $(".mouseX").text("mouseX : " + e.pageX);
    $(".mouseY").text("mouseY : " + e.pageY);
    $(".mouseCircle").css("top", `${e.pageY - 10}px`);
    $(".mouseCircle").css("left", `${e.pageX - 10}px`);
  });

  $(".category li").on("click", function () {
    var idx = $(this).index();
    $(".tabList").children().eq(idx).addClass("on").siblings().removeClass("on");
  });
});
