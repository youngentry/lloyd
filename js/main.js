$(function () {
  $(".mainSlider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 1,
    cssEase: "linear",
  });

  $(".bestSlider").slick({
    arrows: false,
    asNavFor: ".productName",
    centerMode: true,
    centerPadding: "25%",
  });

  $(".custom").slick({
    arrows: false,
    dots: true,
    autoplay: true,
  });

  $(".productName").slick({
    arrows: false,
    slidesToShow: 1,
  });

  $(".leftArrow").on("click", function () {
    $(".bestSlider").slick("slickPrev");
  });
  $(".rightArrow").on("click", function () {
    $(".bestSlider").slick("slickNext");
  });

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

  $(".lloydGold").on("mouseenter", function () {
    $(".mouseCircle").addClass("lloydGold");
  });
  $(".lloydGold").on("mouseleave", function () {
    $(".mouseCircle").removeClass("lloydGold");
  });
  $(".lloydGem").on("mouseenter", function () {
    $(".mouseCircle").addClass("lloydGem");
  });
  $(".lloydGem").on("mouseleave", function () {
    $(".mouseCircle").removeClass("lloydGem");
  });
});
