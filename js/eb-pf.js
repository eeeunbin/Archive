

$(document).ready(function(){
  $('.card-wrap a').click(function(){
    $('.modal').addClass("show")
    $('.modal').append(`<div class="item_box">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${$(this).data("video")}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`)
  })
  $('.modal .dim').click(function(){
    $('.modal .item_box').remove()
    $('.modal').removeClass('show')
  })
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // rewind: true,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
})