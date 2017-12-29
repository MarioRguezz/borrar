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
    welcomescreen.open();
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
    }


    if (page.name == 'foro') {
        $("#imagenid").remove();
        $("#imagenid1").remove();
        $(".toolbar").hide();
        $(".sdasdsa").css("background-color", "#fc9a00 !important");
    }
});

var permissions = cordova.plugins.permissions;
permissions.hasPermission(permissions.ACCESS_COARSE_LOCATION, function(status){
  if (!status.hasPermission) {
    permissions.requestPermission(permissions.ACCESS_COARSE_LOCATION, success, error);
  }
});

function error() {
  myApp.alert('Te recomenadamos dar permisos para acceder a tu ubicación');
}

function success( status ) {
if( !status.hasPermission ) error();
}

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
});
