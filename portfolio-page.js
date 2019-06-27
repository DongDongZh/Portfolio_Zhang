function filter(button, filter) {
  button.on("click", function (event) {
    event.preventDefault();
    $(".card").hide();
    for (var i = 0; i < filter.length; i++) {
      $(filter[i]).show();
    };
    console.log("btn is clicked");
    for (var j = 0; j<$(".btn-port").length; j++){
      $($(".btn-port")[j]).removeClass("btn-active"); 
    }
    button.addClass("btn-active");
  })
};

filter($("#btn-all"), $(".all"));
filter($("#btn-full"), $(".full-stack"));
filter($("#btn-front"), $(".front-end"));
filter($("#btn-back"), $(".back-end")); 
filter($("#btn-group"), $(".group")); 
