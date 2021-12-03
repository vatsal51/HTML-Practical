$(".partner-slider").slick({
    lazyLoad:'ondemand',
 infinite: true,
 autoplay: true,
 autoplaySpeed: 1000,
 slidesToShow: 5,
 // slidesPerRow: 5,
 slidesToScroll: 5,
 speed: 800,
 dots: true,
 responsive: [
    
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    
  ]
});
$(".brand-slider").slick({
 lazyLoad:'ondemand',
 infinite: true,
 autoplay: true,
 autoplaySpeed: 1000,
 slidesToShow: 5,
 // slidesPerRow: 5,
 slidesToScroll: 5,
 speed: 800,
 dots: true,
 responsive: [
 
     {
       breakpoint: 769,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     
   ]
});

    $(".my-slider").slick({
     infinite: true,
     arrows: false,
     autoplay: true,
     autoplaySpeed: 5000,
     slidesToShow: 1,
     // slidesPerRow: 1,
     slidesToScroll: 1,
     speed: 500,
     dots: true,
    
    });


