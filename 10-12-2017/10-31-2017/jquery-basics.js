function main (){
  // document.getElementById('google').innerHTML = "Google";
$('#google').html("Google");
  //let links = document.getElementsByClassName('my-link');
let links = $('.my-link');
  links[0].innerHTML= "Twitter ";
  links[0].href="http://www.twitter.com";
  links[1].innerHTML= "TBD";
    links[1].href="#";

// hide and show the main text
    $('#main-text').hide();
    $('#main-text').fadeIn(4000);
// hide projects
  $('.projects').hide();

// event for buttons
  $('.my-buttons').click(function (){
  // $('.projects').show().toggle(5000);
  //  $('.projects').slideToggle(500);

$(this).next().slideToggle(500);

  });
}


$(document).ready(main);
