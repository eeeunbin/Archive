$(document).ready(function(){
  //function 함수이름(입력값1,입력값2,...){}
  function skill(id,percent){
    var bar = new ProgressBar.Circle(id,{
      strokeWidth: 4,
      trailWidth: 4,
      color: "black",
      duration: 2400,
      // step: (state, bar) => {
        step:function(state, bar ){
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
    
    bar.animate(percent)
  }
  skill("#ae",0.8)
  skill("#pr",0.7)
  skill("#ps",0.6)
  skill("#ai",0.5)
  skill("#c4",0.4)
})
$(document).ready(function(){
  $('.container .interview-video').click(function(){
    $('.modal').addClass("show")
    $('.modal').append(`<div class="item_box">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${$(this).data("video")}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`)
  })
  $('.modal .dim').click(function(){
    $('.modal .item_box').remove()
    $('.modal').removeClass('show')
  })
})