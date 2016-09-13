$(document).ready(function(){

  console.log("hello the page loaded!")
  $("#blanks form").submit(function(event){

    var answer1Input = $("input#answer1").val();

    $(".answer1").text(answer1Input);

    $("#response").show();

    event.preventDefault();

  });
});
