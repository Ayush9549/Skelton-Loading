  setInterval(function(){
    $(".shadow").animate({"marginLeft":"75%"},1000,function(){
      $(this).animate({"margin-left":"-0%"},1000);
    });
  },1000);
