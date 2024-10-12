$('.PartnersCarousel').slick({
    centerMode: true,
    centerPadding: '60px',
    margin: 32,
    variableWidth: true,
    autoplay: true,
    autoplayspeed: 6000,
    infinite: true,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
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



  
  
