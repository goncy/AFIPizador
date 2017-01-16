// Polyfill window.navigate
window.navigate = function (x) { window.location.href = x; }

// Replace form1 por document.form1
if (document.form1) form1 = document.form1;

// Polyfill obtenerParam
function obtenerParam() {
    var tramite_tempo, parametro;
    var motivo, cuit, inteSoc, eventual, asocCoop, cuitCoop;

    var carSacar1 = /\./gi;
    var carSacar2 = /,/gi;
    var carSacar3 = /-/gi;
    var carNum = /.[a-z]/gi;

    motivo = "---";

    for (tramite_tempo = 0; tramite_tempo <= (document.form1.motivo_tramite.length - 1); tramite_tempo++) {
        if (document.form1.motivo_tramite[tramite_tempo].checked) {
            motivo = document.form1.motivo_tramite[tramite_tempo].value;
            break;
        }
    }
    if (motivo == "---") {
        window.alert("Debe seleccionar el Tipo de Trámite que desea realizar.");
        return "ERROR";
    }

    if (document.form1.cuit.value == "-1") {
        window.alert("Debe seleccionar la CUIT sobre la que realizará el Empadronamiento.");
        return "ERROR";
    }
    else
        cuit = document.form1.cuit.value;

    if (document.form1.inte_sociedad.checked)
        inteSoc = "S";
    else
        inteSoc = "N";

    eventual = document.form1.eventual_al_final.value;

    if (document.form1.cooperativa.checked) {
        if (document.form1.cuit_coperativa.value == "") {
            window.alert("Debe ingresar la CUIT de la Cooperativa de Trabajo a la que está asociado.");
            return "ERROR";
        }
        else {
            // Verifico la cuit de la cooperativa
            var stringIntermedio = document.form1.cuit_coperativa.value;
            // Le saco los puntos
            stringIntermedio = stringIntermedio.replace(carSacar1, "");
            // Le saco las comas.
            stringIntermedio = stringIntermedio.replace(carSacar2, "");
            // Le saco los guiones.
            stringIntermedio = stringIntermedio.replace(carSacar3, "");

            document.form1.cuit_coperativa.value = stringIntermedio

            if (carNum.test(document.form1.cuit_coperativa.value) == true) {
                window.alert("Debe ingresar una CUIT para la Cooperativa de Trabajo válida. (Solo se permiten valores numéricos)");
                return "ERROR";
            }

            if (document.form1.cuit_coperativa.value.length != 11) {
                window.alert("La CUIT de la Cooperativa de Trabajo debe tener un largo de 11 números.");
                return "ERROR";
            }
        }
        asocCoop = "S";
        cuitCoop = document.form1.cuit_coperativa.value;
    }
    else {
        asocCoop = "N";
        cuitCoop = 0;
    }

    // Controlo que no haya seleccionado Empadronamiento y una cuit que no sea persona juridica.
    // Esto se deshabilitó el 25/06/2004.
    /*
     if (motivo == "6" && cuit < "29999999999")
     {
     window.alert("El tramite solicitado solo está disponible para Personas Jurídicas. Para Personas Fisicas debe completar el Formulario F158 y presentarlo en el Banco.");
     return "ERROR";
     }
     */

    parametro = "?tramite=" + motivo + "&cuit=" + cuit + "&intesoc=" + inteSoc + "&eventual=" + eventual + "&coop=" + asocCoop + "&cuitcoop=" + cuitCoop

    return parametro

};