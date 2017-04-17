

  $('#slides').slick({
    centerMode: true,
    slidesToShow: 3,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('#arrow-prev').click(function(){
    $("#slides").slick('slickPrev');
    console.log('ss');
  });
  $('#arrow-next').click(function(){
    $("#slides").slick('slickNext');
    console.log('ss');
  });
  $('#go-to-text').click(function () {
    $("#l1, #l2").addClass('active');
  })
  $('#overlay').click(function () {
    $("#l1, #l2").removeClass('active');
  })
  $(document).scroll(function() {
    if ($(document).scrollTop() == 0) {

    }
    // console.log($(document).scrollTop());
  })

  $('#go-to-text').click(function() {
    // $('#l1').addClass('active');
    // $('#l2').addClass('active');
    console.log('d');
  })
