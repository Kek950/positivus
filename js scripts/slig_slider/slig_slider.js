$('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    margin: 32,
    variableWidth: true,
    autoplay: true,
    autoplayspeed: 2000,
    dots: true,
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


  let li = document.querySelectorAll(".slick-dots li")
  let star = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="white"/>
  </svg>`
  
  
  
  function fillLi() {
      li.forEach(i => {
          i.innerHTML = star
          
          
      });
  }
  fillLi()