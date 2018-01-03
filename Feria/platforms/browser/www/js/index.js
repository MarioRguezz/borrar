// Initialize app
var myApp = new Framework7({

});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    //welcomescreen.open();
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

});

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;
    myApp.closePanel();

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }

    if (page.name == 'login') {
        myApp.params.swipePanel = false;
    }

    if (page.name == 'index') {
        $("#imagenid3").remove();
          $(".toolbar").show();
    }


    if (page.name == 'gastronomia') {
        $("#imagenid").remove();
        $("#imagenid1").remove();
        $(".toolbar").hide();

    }

    if (page.name == 'mapa') {
        $("#imagenid").remove();
        $("#imagenid1").remove();
        $("#imagenid4").remove();
          $(".toolbar").hide();
    }

    if (page.name == 'total') {
        $("#imagenid3").remove();
    }

    if (page.name == 'contacto') {
      $("#imagenid").remove();
      $("#imagenid1").remove();
        $(".toolbar").hide();
        $$("#myform").submit(function(e) {
          e.preventDefault();
          var datos = [];
          datos.push($$("#nombre").val(), $$("#correo").val(), $$("#asunto").val(), $$("#mensaje").val());
          $$.ajax({
            type: "POST",
            url: "http://.opion-tech.com/correoFeria.php", 
            contentType: "application/x-www-form-urlencoded",
            data: {
              data: datos
            },
            beforeSend: function() {
              $$("#myform").hide();
              $$("#body").append("<div id='loading' class='content-block' style='text-align: center;'><span style='width:42px; height:42px' class='preloader'></span><h4>Espera por favor...</h4></div>");
            },
            success: function(response) {
            //  myApp.addNotification("El correo se envió exitosamente", "Feria 2018");
                  $('#ModalCenterPositive').modal('toggle');
                  $('#ModalCenterPositive').modal('show');
              $$("#myform")[0].reset();
            },
            error: function(error) {
              $('#ModalCenterPositive').modal('toggle');
              $('#ModalCenterPositive').modal('show');
              $("#mensajemodal").empty();
              $("#mensajemodal").append("Ocurrió un error, intenta de nuevo");
            //  myApp.addNotification("Ocurrió un error, intenta de nuevo", "Feria 2018")
            },
            complete: function() {
              $$("#loading").remove();
              $$("#myform").show();
            }
          });
        });
    }


    if (page.name == 'foro') {
        $("#imagenid").remove();
        $("#imagenid1").remove();
        $(".toolbar").hide();
        $(".sdasdsa").css("background-color", "#fc9a00 !important");
    }
    var permissions = cordova.plugins.permissions;
    permissions.hasPermission(permissions.ACCESS_COARSE_LOCATION, function(status){
      if (!status.hasPermission) {
        permissions.requestPermission(permissions.ACCESS_COARSE_LOCATION, success, error);
      }
    });
});

function error() {
  myApp.addNotification({
        title: 'Feria de León',
        message: 'Te recomendamos dar permisos para acceder a tu ubicación'
    });
}

function success( status ) {
  if( !status.hasPermission ) error();
}

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
});
