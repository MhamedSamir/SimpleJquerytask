$(document).ready(function(){

$("#dv1").hover(function(){
    $(this).animate({left: "0px"},1000)
},
function(){
    $(this).animate({left: "-100px"},1000)})

  $("p").click(function(){
      $("ul").slideUp()
      $(this).next().slideDown()
  })
})
