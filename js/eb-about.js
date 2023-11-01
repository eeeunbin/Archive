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