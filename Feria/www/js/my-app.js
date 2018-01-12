var myApp = new Framework7();
var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    checkPermissions();
    //checkBluetooth();
});

$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;
    myApp.closePanel();
    if (page.name == 'contacto') {
        $$("#myform").submit(function(e) {
          e.preventDefault();
          var datos = [];
          datos.push($$("#nombre").val(), $$("#correo").val(), $$("#asunto").val(), $$("#mensaje").val());
          $$.ajax({
            type: "POST",
            url: "http://apps.opion-tech.com/correoFeria.php",
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


    /*if (page.name == 'foro') {
        $("#imagenid").remove();
        $("#imagenid1").remove();
        $(".toolbar").hide();
        $(".sdasdsa").css("background-color", "#fc9a00 !important");
    }*/
});

function checkPermissions(){
  var permissions = cordova.plugins.permissions;
  permissions.hasPermission(permissions.ACCESS_COARSE_LOCATION, function(status){
    if (!status.hasPermission) {
      permissions.requestPermission(permissions.ACCESS_COARSE_LOCATION, success, error);
    }
    //checkBluetooth();
  });
}

function error() {
  $('#ModalCenterPositive').modal('toggle');
  $('#ModalCenterPositive').modal('show');
  $("#mensajemodal").empty();
  $("#mensajemodal").append("Te recomendamos dar permisos para acceder a tu ubicación");
}

function success( status ) {
  if( !status.hasPermission ){
    error();
  }
}

function checkBluetooth(){
  cordova.plugins.diagnostic.isBluetoothEnabled(function(enabled){
    if (!enabled) {
      myApp.confirm('¿Podemos encender tu Bluetooth?', '', function () {
        turnBluetooth();
        }, function () {}
      );
    }
  }, function(error){
    myApp.alert('Ocurrió el error: '+ error);
  });
}

function turnBluetooth(){
  cordova.plugins.diagnostic.setBluetoothState(function(){
      //console.log("Bluetooth was enabled");
  }, function(error){
      myApp.alert("Ocurrió un error, enciéndelo manualmente por favor");
  }, true);
}
