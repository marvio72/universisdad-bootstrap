$(function(){

  /*==============================================================================================
  1. Configuración de Rd-navbar
  ==============================================================================================*/
  $(".rd-navbar").RDNavbar({
    /*Cancela que se duplique el nav*/
    stickUpClone: false,
    responsive:{
      0:{
        layout: 'rd-navbar-fixed'
      },
      768:{
        layout: 'rd-navbar-static'
      }
    }
  });
});