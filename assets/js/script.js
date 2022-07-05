 var mixer = mixitup('.portfolio');
    $('.progressBar_1').LineProgressbar({
      percentage: 90,
      fillBackgroundColor: '#3498db',
      backgroundColor: '#EEEEEE',
      radius: '0px',
      height: '10px',
      width: '100%'
    });
$('.progressBar_2').LineProgressbar({
    percentage: 70,
    fillBackgroundColor: '#3498db',
    backgroundColor: '#EEEEEE',
    radius: '0px',
    height: '10px',
    width: '100%'
  });
$('.progressBar_3').LineProgressbar({
    percentage: 70,
    fillBackgroundColor: '#3498db',
    backgroundColor: '#EEEEEE',
    radius: '0px',
    height: '10px',
    width: '100%'
  });
$('.progressBar_4').LineProgressbar({
    percentage: 80,
    fillBackgroundColor: '#3498db',
    backgroundColor: '#EEEEEE',
    radius: '0px',
    height: '10px',
    width: '100%'
  });

new Typed("#text_typing",{
  strings: ["Web Designer","Developer"],
  typeSpeed: 200,
  backSpeed: 50,
  loop:true,
})
   // Navbar
   $('.logo-area i').click(function(){
     $('.menu-area ul li').slideToggle(500);
   });

    // ScrollSpy
    $('.navbar li a').click(function(){
        $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top
        },1000);

        return false;
    });

        // Back to Top (Button)
    $('.btt_btn').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },1000);

        return false;
    });
 $(window).scroll(function(){
        var scrollvalue = $(this).scrollTop();

        if (scrollvalue>500) {
            $('.btt_btn').fadeIn();
        }
        else{
            $('.btt_btn').fadeOut();
        }
    });
