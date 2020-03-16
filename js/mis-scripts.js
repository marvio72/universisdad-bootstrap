$(function(){

  /*==============================================================================================
  1. Configuración de Rd-navbar
  ==============================================================================================*/
  $(".rd-navbar").RDNavbar({
    /*Cancela que se duplique el nav*/
    stickUpClone:false,
    responsive:{
      0:{
        layout: 'rd-navbar-fixed'
      },
      768:{
        layout: 'rd-navbar-static',
        stickUp:false
      },
      992:{
        stickUp:false
      }
    }
  });
  /*==============================================================================================
  2. Configuración de Universal-parallax
  ==============================================================================================*/
  new universalParallax().init({
    speed: 6.0
  });
});