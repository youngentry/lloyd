$(function () {
  $(".menuBtn").on("click", function (e) {
    e.preventDefault();
    $(".menu").toggleClass("on");
  });

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
  $(".bestSlider").on("afterChange", function (e, s, c) {
    $(".bestNumber").text(`0${c + 1} / 0${s.slideCount}`);
  });

  $(".custom").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
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
    $(this).addClass("on").siblings().removeClass("on");
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

  $(".necklace li").on("click", function () {
    $(this).children("figure").addClass("on");
    $(this).siblings().children("figure").removeClass("on");
    $(this).parent().siblings().children().children().removeClass("on");

    var imgSrc = $(this).children().children().attr("src");
    $(".centerImg").attr("src", `${imgSrc}`);
  });
});
