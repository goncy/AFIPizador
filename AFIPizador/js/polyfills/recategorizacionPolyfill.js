
function URLDecode(sConvert){
    var sOutput=""
    sOutput = sConvert.replace(/\+/g, " ");
    
   return decodeURIComponent(sOutput);
    
}

function getIntegrantes() {
    var tr, td;
    var tabla = document.all.tablaIntegrantes
    var rowCount = tabla.rows.length;
    var integrantes_ = new Array();
    for (cont = 0; cont < rowCount; cont++) {
        var row = tabla.rows[cont];
        var integrante = row.objIntegrante
        integrantes_[cont] = row.objIntegrante; 
    };
    return integrantes_ 

}







function trim (myString) {
    if (typeof myString != "undefined") {
        myclassString = new String(myString);
        if (!myclassString.hasOwnProperty('trim')) {
            return myclassString.replace(/^\s+|\s+$/g, '');
        }
        else return myclassString.trim();
    }
    else return myString;
}

function esCuitValida(cuit)
//*******************************
{
    var carNum = /.[a-z]/gi;
    var mprefijo

    xcuit = cuit_veri.toString();

    mprefijo = xcuit.substr(0, 2).valueOf();
    if (mprefijo == 30 || mprefijo == 33 || mprefijo == 27 || mprefijo == 20 || mprefijo == 23 || mprefijo == 24 || mprefijo == 34) {
        msufijo = xcuit.substr(10, 1).valueOf();
        a01 = xcuit.substr(9, 1).valueOf() * 2;
        a02 = xcuit.substr(8, 1).valueOf() * 3;
        a03 = xcuit.substr(7, 1).valueOf() * 4;
        a04 = xcuit.substr(6, 1).valueOf() * 5;
        a05 = xcuit.substr(5, 1).valueOf() * 6;
        a06 = xcuit.substr(4, 1).valueOf() * 7;
        a07 = xcuit.substr(3, 1).valueOf() * 2;
        a08 = xcuit.substr(2, 1).valueOf() * 3;
        a09 = xcuit.substr(1, 1).valueOf() * 4;
        a10 = xcuit.substr(0, 1).valueOf() * 5;
        a12 = a01 + a02 + a03 + a04 + a05 + a06 + a07 + a08 + a09 + a10;
        a13 = a12 % 11;

        switch (a13) {
            case 0:
                {
                    a14 = 0;
                    break;
                }
            case 1:
                {
                    a14 = 5;
                    break;
                }
            default:
                {
                    a14 = 11 - a13;
                    break;
                }
        }

        if (a14 != msufijo) {
            return (false);
        }
        else {
            // Si llego aca, es porque está OK.
            return (true);
        }
    }
    else {
        return (false);
    }
}


// JScript source code
function Right(str, n)
{
    if (n <= 0)
       return '';
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}

function Left(str, n)
{
            if (n <= 0)
                return '';
            else if (n > String(str).length)
                return str;
            else
                return String(str).substring(0,n);
}

function stringToDate(fechaIn)
{
	var fechaConvert = new Date();
    var strFecha = new String(fechaIn);
    parseFecha = strFecha.split('/');
    fechaConvert.setDate(parseFecha[0]);
    fechaConvert.setMonth(parseFecha[1] - 1);
    fechaConvert.setFullYear(parseFecha[2]);
    return(fechaConvert);
}
function IsNumeric(strEval)
{
    if (strEval == '')
    {
		return(0);
    }
    
    var RegExp = /^(-)?(\d*)(\.?)(\d*)$/;
    var result = strEval.match(RegExp);
    return result;
}

function getDecTipoIdentificacion(codigo) {
    var descripcion = "";
    if (codigo == '80') descripcion = "C.U.I.T.";
    if (codigo == '81') descripcion = "C.D.I.";
    if (codigo == '86') descripcion = "C.U.I.L.";
    if (codigo == '89') descripcion = "LIBRETA";
    if (codigo == '90') descripcion = "LIBRETA";
    if (codigo == '93') descripcion = "ACTA";
    if (codigo == '96') descripcion = "DOC.NACIONAL";
    return descripcion;
}   
function getParentesco(codigo) {
    var descripcion = "";
    if (codigo=='1') descripcion = "Conyuge/Conviviente";
    if (codigo=='2') descripcion = "Hijo/a";
    if (codigo=='4') descripcion = "Menor Tutelado";
            
    return descripcion;
}   
                              
                                

                                
function getDescripcionOperacion(codigo) {
    var descripcion = "s/d";
    if (codigo=='1') descripcion = "Adhesión";
    if (codigo=='3') descripcion = "Recategorización";
    if (codigo=='4') descripcion = "Modificación de Datos";
    if (codigo=='6') descripcion = "Empadronamiento";        
    return descripcion;
}
function validarIntegrantesRecategorizacion()
//*********************
{
    var integrantes = getIntegrantes();
    var errorObj = new Object();
    errorObj.errorNegocio = "";
    var cantidadIntegrantes = integrantes.length;
    for (var cont = 0; cont < cantidadIntegrantes; cont++) {
        var integrante = integrantes[cont];
        var integranteId = integrante.nroIdentificacion
        var integranteTipoId = integrante.codigo_tipo_identificacion
        if (integrante.parentesco != 1 && integrante.parentesco != 2 && integrante.parentesco != 4) {
            alert("El intengrante con CUIT/CUIT/CDI " + integranteId + " tiene el parentesco mal cargado. Debe borrarlo y volver a cargarlo en el tipo de trámite '' Modificacion de Datos");
            return false;
        }
        
    }
    return true;

}


function validarIntegrantesVsPUC()
//*********************
{
    var integrantes = getIntegrantes();
    var errorObj = new Object();
    errorObj.errorNegocio = "";
    var parametros = "?";
    var cantidadIntegrantes = integrantes.length;
    for (var cont = 0; cont < cantidadIntegrantes; cont++) {
        var integrante=integrantes[cont];
        var integranteId = integrante.nroIdentificacion
        var integranteTipoId = integrante.codigo_tipo_identificacion
        if (integrante.parentesco != 1 && integrante.parentesco != 2 && integrante.parentesco != 4) {
            alert("El intengrante con CUIT/CUIT/CDI " + integranteId + " tiene el parentesco mal cargado. Debe borrarlo y volver a cargarlo en el tipo de trámite '' Modificacion de Datos");
            return false;
        }
        parametros = parametros + "id=" + integranteId + "&";
        parametros = parametros + "tipo_id=" + integranteTipoId + "&";
    }

    ReturnObj = window.showModalDialog("validarIntegrantesVsPUC.asp" + parametros, errorObj, "status:0;dialogWidth: 460px; dialogHeight: 200px; center:yes");
    if (ReturnObj.evento == "defaultClose") {
        return true;
    } else {
    
    if (errorObj.errorNegocio != "" ) {
        
        window.showModalDialog("error.asp?codigo=" + errorObj.errorNegocio + "&nroIdentificacion=" + ReturnObj.nro_identificacion, null, "status:0;dialogWidth: 750px; dialogHeight: 600px; center:yes"); 
        };
        return false;
    };
}


function generarCategoriaAutonomo(NotificacionDeclaSIPA,esSucesion, esRegimen, esIntegrante, esAsocCoop, tipoTramite, cuitContribuyente, tipoPersona, nombreContri, cantiSocios, domiCalle, domiNro, domiCP, domiLocali, domiIDProv)
//*********************
{
    var tramiteObject;
    var error="";
    var categoria;
    tramiteObject = obtenerTramiteObject(NotificacionDeclaSIPA,esSucesion, esRegimen, esIntegrante, esAsocCoop, tipoTramite, cuitContribuyente, tipoPersona, nombreContri, cantiSocios, domiCalle, domiNro, domiCP, domiLocali, domiIDProv);
    var errorObj = new Object();
    errorObj.error=""
    var esValido = validacionesNegocio(tramiteObject, errorObj)
    var parametros = "";

    if (esValido) {
        if (tramiteObject.tipoPersona == "F") {
            if (tramiteObject.NotificacionSIPA == "" || tramiteObject.NotificacionSIPA == "N") {
                ReturnObjNotificacionDeclaSIPA = window.showModalDialog("NotificacionDeclaSIPA.asp", null, "status:0;dialogWidth: 650px; dialogHeight: 800px; center:yes");
                if (ReturnObjNotificacionDeclaSIPA.evento != "OkClose") {
                    if (ReturnObjNotificacionDeclaSIPA.evento == "buttonClose") {
                        tramiteObject.NotificacionSIPA = "N"
                    } else {
                        tramiteObject.NotificacionSIPA = ""
                    };

                } else {
                    tramiteObject.NotificacionSIPA = "S"
                };
            };

            if (tramiteObject.NotificacionSIPA == "") {
                alert("Sr. Contribuyente: es requisito necesario que Ud. se notifique de la obligatoriedad de la presentación de la Declaración Jurada de Salud. Caso contrario, no podrá continuar con este trámite.");
                return false;
            };
            if (tramiteObject.NotificacionSIPA == "N") {
                alert("Sr. Contribuyente: es requisito necesario que Ud. se notifique de la obligatoriedad de la presentación de la Declaración Jurada de Salud. Caso contrario, no podrá continuar con este trámite hasta que acepte dicha notificación.");
                return false;
            };
        };
        parametros = parametros + "?act1=" + tramiteObject.act1;
        if (tramiteObject.ObraSocial.unificaAportes) {
            parametros = parametros + "&uniApor=S";
        }
        else {
            parametros = parametros + "&uniApor=N";
        };
        
        parametros = parametros + "&esRegimen=" + tramiteObject.esRegimen;
        parametros = parametros + "&esIntegrante=" + tramiteObject.esIntegrante;
        parametros = parametros + "&esAsocCoop=" + tramiteObject.esAsocCoop;
        parametros = parametros + "&act2=" + tramiteObject.act2;
        parametros = parametros + "&act3=" + tramiteObject.act3;
        parametros = parametros + "&tact1=" + tramiteObject.tact1;
        parametros = parametros + "&tact2=" + tramiteObject.tact2; ;
        parametros = parametros + "&tact3=" + tramiteObject.tact3;
        parametros = parametros + "&contribuyente=" + tramiteObject.cuitContribuyente; ;
        parametros = parametros + "&cod_obra=" + tramiteObject.ObraSocial.codigo;
        parametros = parametros + "&ing_bruto=" + tramiteObject.ing_bruto;
        parametros = parametros + "&sup_afect=" + tramiteObject.sup_afec;
        parametros = parametros + "&energ_elect=" + tramiteObject.energ_elec;
        parametros = parametros + "&monto_alq=" + tramiteObject.monto_alq;
        parametros = parametros + "&cantact=" + tramiteObject.cantact;
        parametros = parametros + "&tipopersona=" + tramiteObject.tipoPersona;
        parametros = parametros + "&tipoTramite=" + tramiteObject.tipoTramite;
        parametros = parametros + "&cantAdherentesAObraSocial=" + tramiteObject.ObraSocial.cantAdherentesAObraSocial;
        parametros = parametros + "&cantSocios=" + tramiteObject.cantSocios;
        parametros = parametros + "&fecemp=" + tramiteObject.Autonomo.fecemp;
        parametros = parametros + "&fecini=" + tramiteObject.Autonomo.feciniaport;
        parametros = parametros + "&cuitemp=" + tramiteObject.Autonomo.cuitemp;
        parametros = parametros + "&autonomo=" + tramiteObject.Autonomo.categoriaAutonomo;
        tramiteObject.ResultObject = new Object();
        tramiteObject.ResultObject.errorNegocio = "";
        ReturnObjCalculoCategoria= window.showModalDialog("calculoCategoria.asp" + parametros, tramiteObject, "status:0;dialogWidth: 460px; dialogHeight: 200px; center:yes");
        if (ReturnObjCalculoCategoria.evento != "defaultClose") {
            if (tramiteObject.ResultObject.errorNegocio != "") {
            window.showModalDialog("error.asp?codigo=" + tramiteObject.ResultObject.errorNegocio, null, "status:0;dialogWidth: 750px; dialogHeight: 600px; center:yes"); }
            else {
                if (ReturnObjCalculoCategoria.evento == "OkClose") {
                    parametros="?"
                    parametros = parametros + "cuitContribuyente=" + tramiteObject.cuitContribuyente;
                    parametros = parametros + "&CUR=" + tramiteObject.CUR;
                    parametros = parametros + "&tipoTramite=" + tramiteObject.tipoTramite;
                    ReturnObjConfirmacionF814 = window.showModalDialog("formulario184.asp" + parametros, tramiteObject, "status:0;dialogWidth: 760px; dialogHeight: 600px; center:yes");
                    if (ReturnObjConfirmacionF814.evento != "defaultClose") {
                        if (tramiteObject.ResultObject.errorNegocio != "") { window.showModalDialog("error.asp?codigo=" + tramiteObject.ResultObject.errorNegocio, null, "status:0;dialogWidth: 750px; dialogHeight: 600px; center:yes"); }
                        else {
                            if (ReturnObjConfirmacionF814.evento == "OkClose") {
                                document.formGenerarXml.xml.value = getXmlTramite(tramiteObject);
                                document.formGenerarXml.submit();
                            };
                        };
                    };
                };
                    
           };
        };
    } else {

    if (errorObj.error != "") {
        
      window.showModalDialog("error.asp?codigo=" + errorObj.error, null, "status:0;dialogWidth: 750px; dialogHeight: 600px; center:yes"); };
    
    };
    

}
function obtenerCantAdherentesAObraSocial()
//*********************
{

    var cant = 0;
    var tabla = document.all.tablaIntegrantes;
    var rowCount = tabla.rows.length;
    if (rowCount >1 ){
        var filas = document.getElementById("op_obra");
        if (filas != null) {
            for (cont = 0; cont < form1.op_obra.length; cont++) {
                
                if (form1.op_obra.item(cont).checked) {
                    cant = cant + 1;
                }

            }
        }
    }
    else {
        
        if (rowCount == 1) {
            var check = document.getElementById("op_obra");
            if (check.checked)
                cant = cant + 1;
        }  
    }
    cantAdherentesAObraSocial = cant;    
    return cantAdherentesAObraSocial;

}
function unificaAportes()
//*********************
{
    var unifica=false;
    var cant = 0;
    
    var filas = document.getElementById("unifica_aportes");
    if (filas != null) {
        for (cont = 0; cont < form1.unifica_aportes.length; cont++) {
            var item=form1.unifica_aportes.item(cont);
            if (item.checked) {
                if (item.value=="S") unifica=true;
                else if (item.value=="N") unifica=false;
            }
            

        }
    }
    
    return unifica;

}
function tieneGrupoFamiliarPrimario()
//*********************
{
    var tieneGrupo = false;
    var cant = 0;

    var filas = document.getElementById("posee_grupo_primario");
    if (filas != null) {
        for (cont = 0; cont < form1.posee_grupo_primario.length; cont++) {
            var item = form1.posee_grupo_primario.item(cont);
            if (item.checked) {
                if (item.value == "S") tieneGrupo = true;
                else if (item.value == "N") tieneGrupo = false;
            }


        }
    }

    return tieneGrupo;

}
function getXmlTramite(tramiteObject) { 
    var strXML = ""
	strXML = "<?xml version = '1.0' ?>"
	strXML = strXML +"<CONTRIBUYENTE>"
	strXML = strXML +"<TIPO_TRAMITE>" + tramiteObject.tipoTramite + "</TIPO_TRAMITE>"
	strXML = strXML +"<CUIT>" + tramiteObject.cuitContribuyente + "</CUIT>"
	strXML = strXML +"<TIPO_PERSONA>" + tramiteObject.tipoPersona+ "</TIPO_PERSONA>"
	strXML = strXML +"<DENOMINACION>" + tramiteObject.nombreContri + "</DENOMINACION>"
	strXML = strXML +"<ES_SUCESION>" + tramiteObject.esSucesion + "</ES_SUCESION>"
	
	strXML = strXML +"<CALLE>" + tramiteObject.Domicilio.calle  + "</CALLE>"
	strXML = strXML +"<NUMERO>" + tramiteObject.Domicilio.nro + "</NUMERO>"
	strXML = strXML +"<CODIGO_POSTAL>" +  tramiteObject.Domicilio.CP + "</CODIGO_POSTAL>"
	strXML = strXML +"<LOCALIDAD>" + tramiteObject.Domicilio.Locali + "</LOCALIDAD>"
	strXML = strXML +"<ID_PROVINCIA>" + tramiteObject.Domicilio.IdProv + "</ID_PROVINCIA>"
	strXML = strXML +"<INTEGRANTE_SOCIEDAD>" + tramiteObject.esIntegrante + "</INTEGRANTE_SOCIEDAD>"
	strXML = strXML +"<EVENTUAL>" +   tramiteObject.esRegimen + "</EVENTUAL>"
	strXML = strXML +"<ASOCIADO_COOPERATIVA>" + tramiteObject.esAsocCoop + "</ASOCIADO_COOPERATIVA>"
	strXML = strXML +"<CUIT_COOPERATIVA>" + tramiteObject.cuitCooperativa + "</CUIT_COOPERATIVA>"
	strXML = strXML +"<CANTIDAD_SOCIOS>" + tramiteObject.cantSocios+ "</CANTIDAD_SOCIOS>"
	socXML = "<SOCIOS>"	
   	var sociosCount = tramiteObject.Socios.length;
   	var cont = 0;
    
   	for (cont = 0; cont < sociosCount; cont++) {
   	    var socio =tramiteObject.Socios[cont]

   	    socXML = socXML + "<ID>" + socio.identificacion + "</ID>"
   	    socXML = socXML + "<DENOMINACION>" + socio.apellidoYNombre + "</DENOMINACION>"

   	};

   	socXML = socXML + "</SOCIOS>"
   	strXML = strXML + socXML  
	strXML = strXML +"<TELEFONO_AREA>" + tramiteObject.telefono_area+ "</TELEFONO_AREA>"
	strXML = strXML +"<TELEFONO_NUMERO>" + tramiteObject.telefono_numero+ "</TELEFONO_NUMERO>"
	strXML = strXML +"<EMAIL>" + tramiteObject.email+ "</EMAIL>"
	strXML = strXML + "<FECHA_RETRO>" + tramiteObject.fecha_retro + "</FECHA_RETRO>"
	strXML = strXML + "<FECHA_CARGA>" + tramiteObject.fechaCarga + "</FECHA_CARGA>"
	strXML = strXML +"<CATEGORIA>" + tramiteObject.nuevacategoria + "</CATEGORIA>"
	strXML = strXML + "<DESCAT>" + tramiteObject.descripcionNuevaCategoria + "</DESCAT>"
	strXML = strXML + "<CUR>" + tramiteObject.CUR + "</CUR>"
	strXML = strXML + "<DIGITO_VERIFICADOR>" + tramiteObject.digiVerificador + "</DIGITO_VERIFICADOR>"
	strXML = strXML + "<NUMERO_TRANSACCION>" + tramiteObject.transaccionNro + "</NUMERO_TRANSACCION>"
	strXML = strXML + "<NOTIFICACION_SIPA>" + tramiteObject.NotificacionSIPA + "</NOTIFICACION_SIPA>"
	strXML = strXML + "<IMPORTE_CATEGORIA_MONOTRIBUTO>" + tramiteObject.importe_categoria_monotributo + "</IMPORTE_CATEGORIA_MONOTRIBUTO>"
	strXML = strXML + "<IMPORTE_AUTONOMO_MONOTRIBUTO>" + tramiteObject.importe_autonomo_monotributo + "</IMPORTE_AUTONOMO_MONOTRIBUTO>"
	strXML = strXML + "<IMPORTE_CUR_MONOTRIBUTO_OS>" + tramiteObject.importe_cur_monotributo_os + "</IMPORTE_CUR_MONOTRIBUTO_OS>"
	
	strXML = strXML +"<CANT_ACT>" +  tramiteObject.cantact+ "</CANT_ACT>"
	strXML = strXML +"<ACT1>" + tramiteObject.act1 + "</ACT1>"
	strXML = strXML +"<TIPO_ACT1>" + tramiteObject.tact1 + "</TIPO_ACT1>"
	strXML = strXML +"<ACT2>" + tramiteObject.act2 + "</ACT2>"
	strXML = strXML +"<TIPO_ACT2>" + tramiteObject.tact2 + "</TIPO_ACT2>"
	strXML = strXML +"<ACT3>" + tramiteObject.act3 + "</ACT3>"
	strXML = strXML +"<TIPO_ACT3>" + tramiteObject.tact3 + "</TIPO_ACT3>"
	

	strXML = strXML +"<ING_BRUTO>" + tramiteObject.ing_bruto + "</ING_BRUTO>"
	strXML = strXML +"<SUP_AFEC>" + tramiteObject.sup_afec  + "</SUP_AFEC>"
    strXML = strXML +"<ENERG_ELEC>" + tramiteObject.energ_elec  + "</ENERG_ELEC>"
	strXML = strXML +"<PRECIO_UNIT>" + tramiteObject.precio_unit + "</PRECIO_UNIT>"
	strXML = strXML +"<MONTO_ALQ>" + tramiteObject.monto_alq  + "</MONTO_ALQ>"
	strXML = strXML +"<CAJA>" + tramiteObject.Autonomo.caja+ "</CAJA>"
    strXML = strXML +"<FECINI>" + tramiteObject.Autonomo.feciniaport + "</FECINI>"
	strXML = strXML +"<MATRIC>" + tramiteObject.Autonomo.nromatric+ "</MATRIC>"
	strXML = strXML +"<CUITEMP>" + tramiteObject.Autonomo.cuitemp + "</CUITEMP>"
	strXML = strXML +"<FECEMP>" + tramiteObject.Autonomo.fecemp + "</FECEMP>"
	strXML = strXML + "<AUTONOMO>" + tramiteObject.Autonomo.categoriaAutonomo + "</AUTONOMO>"
	strXML = strXML + "<DESC_CAT_SEG_SOCIAL>" + tramiteObject.descpCatSegSocial + "</DESC_CAT_SEG_SOCIAL>"
	strXML = strXML + "<CANTIDAD_INTEGRANTES>" + tramiteObject.ObraSocial.integrantes.length + "</CANTIDAD_INTEGRANTES>"
	strXML = strXML + "<CANTIDAD_ADHERENTES_A_OBRA_SOCIAL>" + tramiteObject.ObraSocial.cantAdherentesAObraSocial + "</CANTIDAD_ADHERENTES_A_OBRA_SOCIAL>"
	
	if (tramiteObject.ObraSocial.unificaAportes) { strXML = strXML + "<UNIFICA_APORTES>S</UNIFICA_APORTES>" }
	else strXML = strXML + "<UNIFICA_APORTES>N</UNIFICA_APORTES>";
	if (tramiteObject.ObraSocial.tieneGrupoFamiliarPrimario) { strXML = strXML + "<POSEE_GRUPO_FAMILIAR_PRIMARIO>S</POSEE_GRUPO_FAMILIAR_PRIMARIO>" }
	else strXML = strXML + "<POSEE_GRUPO_FAMILIAR_PRIMARIO>N</POSEE_GRUPO_FAMILIAR_PRIMARIO>";
	strXML = strXML + "<OBRA_SOCIAL>" + tramiteObject.ObraSocial.codigo + "</OBRA_SOCIAL>"
	strXML = strXML + "<DESC_OBRA_SOCIAL>" + tramiteObject.ObraSocial.descp_obra_social + "</DESC_OBRA_SOCIAL>"
	strXML = strXML +"<CLAVE></CLAVE>"
	
	var integrantes=tramiteObject.ObraSocial.integrantes
	var integrantesCount = integrantes.length;
	if (integrantesCount>0){
	    strXML = strXML +"<GRUPO_FAMILIAR>"
		var cont = 0;
   	    for (cont = 0; cont < integrantesCount; cont++) {
   	    var integrante =integrantes[cont]
   	    strXML = strXML + "<TIPO_IDENTIFICACION>" + integrante.tipoIdentificacion + "</TIPO_IDENTIFICACION>"
   	    strXML = strXML + "<DESC_TIPO_IDENTIFICACION>" + integrante.descp_tipo_identificacion + "</DESC_TIPO_IDENTIFICACION>"
   	    strXML = strXML + "<NUMERO_IDENTIFICACION>" + integrante.nroIdentificacion+ "</NUMERO_IDENTIFICACION>"
   	    strXML = strXML + "<APELLIDO>" + integrante.apellido + "</APELLIDO>"
   	    strXML = strXML + "<NOMBRE>" + integrante.nombre + "</NOMBRE>"
   	    strXML = strXML + "<PARENTESCO>" + integrante.parentesco + "</PARENTESCO>"
   	    if (integrante.esAdherente)
   	        strXML = strXML + "<ES_ADHERENTE>S</ES_ADHERENTE>";
   	    else
   	        strXML = strXML + "<ES_ADHERENTE>N</ES_ADHERENTE>";
   	    };
	    strXML = strXML +"</GRUPO_FAMILIAR>"
	}
	strXML = strXML + "</CONTRIBUYENTE>"
	
	return strXML; 

}

function array_contains_item(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] == obj) {
            return true;
        }
    }
    return false;
}

function obtenerTramiteObject(NotificacionDeclaSIPA,esSucesion, esRegimen, esIntegrante, esAsocCoop, tipoTramite, cuitContribuyente, tipoPersona, nombreContri, cantiSocios, domiCalle, domiNro, domiCP, domiLocali, domiIDProv)
//*********************
{ 
  var tramiteObject = new Object();
  tramiteObject.nuevacategoria = -1;
  tramiteObject.CUR = "";
  tramiteObject.NotificacionSIPA = NotificacionDeclaSIPA;
  tramiteObject.importe_categoria_monotributo = "";
  tramiteObject.importe_autonomo_monotributo = "";
  tramiteObject.importe_cur_monotributo_os = "";
  tramiteObject.descripcionNuevaCategoria = "";
  tramiteObject.digiVerificador="";
  tramiteObject.transaccionNro ="";
    
  tramiteObject.descpCatSegSocial = "";    
  tramiteObject.esRegimen = esRegimen;
  tramiteObject.esIntegrante = esIntegrante;
  tramiteObject.esAsocCoop= esAsocCoop;
  tramiteObject.esSucesion = esSucesion;
  tramiteObject.telefono_area="";
  tramiteObject.telefono_numero="";
  tramiteObject.email="";
  tramiteObject.tipoTramite = tipoTramite;
  tramiteObject.cuitContribuyente = cuitContribuyente;
  tramiteObject.fechaCarga = "";
  
  if (typeof form1.cuitCooperativa.value == "undefined") { tramiteObject.cuitCooperativa = "" } else { tramiteObject.cuitCooperativa  = form1.cuitCooperativa.value; };
  tramiteObject.tipoPersona = tipoPersona;
  tramiteObject.nombreContri = nombreContri;
  tramiteObject.cantSocios = cantiSocios;
  tramiteObject.cantact = form1.cantact.value
  tramiteObject.Domicilio = new Object();
  tramiteObject.Domicilio.calle = domiCalle;
  tramiteObject.Domicilio.nro = domiNro;
  tramiteObject.Domicilio.CP= domiCP;
  tramiteObject.Domicilio.Locali = domiLocali
  tramiteObject.Domicilio.IdProv= domiIDProv;
  if (typeof form1.sup_afec.value == "undefined" || form1.sup_afec.value == "") { tramiteObject.sup_afec = "0" } else { tramiteObject.sup_afec = form1.sup_afec.value; };
  if (typeof form1.energ_elec.value == "undefined" || form1.energ_elec.value == "") { tramiteObject.energ_elec = "0" } else { tramiteObject.energ_elec = form1.energ_elec.value; };
  if (typeof form1.precio_unit.value == "undefined" || form1.precio_unit.value == "") { tramiteObject.precio_unit = "0" } else { tramiteObject.precio_unit = form1.precio_unit.value; };
  if (typeof form1.ing_bruto.value == "undefined" || form1.ing_bruto.value == "") { tramiteObject.ing_bruto = "0" } else { tramiteObject.ing_bruto = form1.ing_bruto.value; };
  if (typeof form1.monto_alq.value == "undefined" || form1.monto_alq.value == "") { tramiteObject.monto_alq = "0" } else { tramiteObject.monto_alq = form1.monto_alq.value; };
  
  tramiteObject.cantidad = form1.cantact.value;
  
  if (typeof form1.fecha_retro.value == "undefined") { tramiteObject.fecha_retro= "" } else { tramiteObject.fecha_retro= form1.fecha_retro.value; };
  if (typeof form1.act1.value == "undefined") { tramiteObject.act1 = "" } else { tramiteObject.act1 = form1.act1.value; };
  if (typeof form1.act2.value == "undefined") { tramiteObject.act2 = "" } else { tramiteObject.act2 = form1.act2.value; };
  if (typeof form1.act3.value == "undefined") { tramiteObject.act3 = "" } else { tramiteObject.act3 = form1.act3.value; };
  
  if (typeof form1.tact1.value == "undefined") { tramiteObject.tact1 = "" } else { tramiteObject.tact1 = form1.tact1.value; };  
  if (typeof form1.tact2.value == "undefined") { tramiteObject.tact2 = "" } else { tramiteObject.tact2 = form1.tact2.value; };
  if (typeof form1.tact3.value == "undefined") { tramiteObject.tact3 = "" } else { tramiteObject.tact3 = form1.tact3.value; };
  tramiteObject.esInte_sociedad = form1.inte_sociedad.checked;
  tramiteObject.esAsociadoAcooperativa= form1.cooperativa.checked;
  tramiteObject.ObraSocial= new Object();
  tramiteObject.ObraSocial.codigo=-1;
  tramiteObject.ObraSocial.descp_obra_social = "";
  
  tramiteObject.ObraSocial.integrantes = new Array();
  if (tramiteObject.tipoPersona == "F") {
      if (typeof form1.obra_social.value != "undefined") {
          tramiteObject.ObraSocial.codigo = form1.obra_social.value;
          if (tramiteObject.ObraSocial.codigo != "" & tramiteObject.ObraSocial.codigo != -1) {
              tramiteObject.ObraSocial.descp_obra_social = form1.obra_social.options[form1.obra_social.selectedIndex].text;
          }
      }
      tramiteObject.ObraSocial.cantAdherentesAObraSocial = obtenerCantAdherentesAObraSocial();
      
      tramiteObject.ObraSocial.unificaAportes = unificaAportes();
      tramiteObject.ObraSocial.tieneGrupoFamiliarPrimario = tieneGrupoFamiliarPrimario();

      var tabla = document.all.tablaIntegrantes
      var rowCount = tabla.rows.length;
      var cont = 0;
      var rows = tabla.rows;
      var esAdherenteCollection;
      esAdherenteCollection = document.getElementsByName('op_obra');
      
      for (cont = 0; cont < rowCount; cont++) {
          var row = tabla.rows[cont];
          //var celdas=row.cells;
          tramiteObject.ObraSocial.integrantes[cont] = new Object();
          var integrante = tramiteObject.ObraSocial.integrantes[cont];
          integrante.tipoIdentificacion = row.objIntegrante.codigo_tipo_identificacion;
          integrante.descp_tipo_identificacion = row.objIntegrante.descp_tipo_identificacion;
          integrante.nroIdentificacion = row.objIntegrante.nroIdentificacion;
          integrante.apellido = row.objIntegrante.apellido;
          integrante.nombre = row.objIntegrante.nombre;
          integrante.parentesco = row.objIntegrante.parentesco;
          if (esAdherenteCollection.item(cont).checked) { integrante.esAdherente = true; } else { integrante.esAdherente = false; };

      };
      if (form1.autonomo != null) {
          tramiteObject.Autonomo = new Object();
          for (cont = 0; cont < form1.autonomo.length; cont++) {
              if (form1.autonomo.item(cont).checked) {
                  tramiteObject.Autonomo.categoriaAutonomo = form1.autonomo.item(cont).value
              }
          }
          
          tramiteObject.Autonomo.caja = form1.caja.value
          if (typeof form1.fecini.value == "undefined") { tramiteObject.Autonomo.feciniaport = "" } else { tramiteObject.Autonomo.feciniaport = form1.fecini.value; };
          tramiteObject.Autonomo.nromatric = form1.matric.value;
          tramiteObject.Autonomo.cuitemp = form1.cuitemp.value;
          if (typeof form1.fecemp.value == "undefined") { tramiteObject.Autonomo.fecemp = "" } else { tramiteObject.Autonomo.fecemp = form1.fecemp.value; };

      }
      tramiteObject.PersonaFisica = new Object();
      tramiteObject.PersonaFisica.esEventual = form1.eventual.checked;
      tramiteObject.PersonaFisica.esEven_agrop = form1.eventual_agropecuario.checked;
  }
  else { 
     tramiteObject.ObraSocial.codigo = "0";
     tramiteObject.ObraSocial.descp_obra_social ="";
     tramiteObject.ObraSocial.cantAdherentesAObraSocial = 0;
     tramiteObject.ObraSocial.unificaAportes = false;
     tramiteObject.ObraSocial.tieneGrupoFamiliarPrimario = false;
     tramiteObject.Autonomo = new Object();
     tramiteObject.Autonomo.categoriaAutonomo = "-1";
     tramiteObject.Autonomo.caja = "";
     tramiteObject.Autonomo.feciniaport = "";
     tramiteObject.Autonomo.nromatric = "";
     tramiteObject.Autonomo.cuitemp = "";
     tramiteObject.Autonomo.fecemp = "";
     tramiteObject.PersonaFisica = new Object();
     tramiteObject.PersonaFisica.esEventual = false;
     tramiteObject.PersonaFisica.esEven_agrop = false;

  
  }
   	tramiteObject.Socios = new Array();
   	var sociosIds = document.getElementsByName('idSocio');
   	var sociosDenominacion = document.getElementsByName('nombreApellidoSocio');
   	var sociosCount = sociosIds.length;
   	cont = 0;
    
    for (cont = 0; cont < sociosCount; cont++) {
   	    tramiteObject.Socios[cont]=new Object();
   	    var socio = tramiteObject.Socios[cont];
   	    socio.identificacion = sociosIds.item(cont).value;
   	    socio.apellidoYNombre= sociosDenominacion.item(cont).value;
   	};

    

    return tramiteObject;
 }

 function validacionesNegocio(tramiteObject,errorObj)
 //*********************
 {  

     var ing_bruto, sup_afec, energ_elec, precio_unit, cantidad, cont, ckd_autonomo;
     var caja, feciniaport, nromatric, cuitemp, fecemp, t_act;
     errorObj.error = "";
     ing_bruto = form1.ing_bruto.value;
     sup_afec = form1.sup_afec.value;
     energ_elec = form1.energ_elec.value;
     precio_unit = form1.precio_unit.value;
     cantidad = form1.cantact.value;
     t_act = form1.tact1.value;
    
     if (isNaN(form1.cantact.value)) {
         window.alert("La cantidad ingresada debe ser un número");
         form1.cantact.focus();
         return false;
     }

     if (parseInt(form1.cantact.value) > 3) {
         window.alert("La cantidad de actividades no puede ser mayor a 3");
         form1.cantact.focus();
         return false;
     }
     if ((parseInt(form1.cantact.value) < 1) && (form1.cantact.value == '') && !(form1.inte_sociedad.checked)) {
         window.alert("La cantidad de actividades debe ser de 1 a 3.");
         form1.cantact.focus();
         return false;
     }

     // if (form1.cantact.value == 1 && (!(form1.tipo_act1LP.checked) && !(form1.tipo_act1RA.checked)))
     // {
     //	window.alert("Debe indicar un tipo de actividad para la actividad principal");
     //     form1.cantact.focus(); 
     //     return false;
     // }
     // if (form1.cantact.value == 2 && 
     //	((!(form1.tipo_act1LP.checked) && !(form1.tipo_act1RA.checked)) ||
     //	 (!(form1.tipo_act2LP.checked) && !(form1.tipo_act2RA.checked))))
     // {
     //	window.alert("Debe indicar un tipo de actividad ");
     //     form1.cantact.focus();  
     //     return false;
     // }
     // if (form1.cantact.value == 3 && 
     //	((!(form1.tipo_act1LP.checked) && !(form1.tipo_act1RA.checked)) ||
     //	( !(form1.tipo_act2LP.checked) && !(form1.tipo_act2RA.checked)) ||
     //	( !(form1.tipo_act3LP.checked) && !(form1.tipo_act3RA.checked))))
     // {
     //	window.alert("Debe indicar un tipo de actividad");
     //     form1.cantact.focus();  
     //     return false;
     // }
     if (form1.autonomo != null) {
         caja = form1.caja.value;
         feciniaport = form1.fecini.value;
         nromatric = form1.matric.value;
         cuitemp = form1.cuitemp.value;
         fecemp = form1.fecemp.value;
     }
     //t_act       ="";
     //t_act1      = form1.tipo_act1.value;
     //t_act2      = form1.tipo_act2.value;
     //t_act3      = form1.tipo_act3.value;
     eventual = form1.eventual.checked;
     even_agrop = form1.eventual_agropecuario.checked;

     if (trim(form1.act1.value )== "") {
         window.alert(" Debe Ingresar datos en el campo Codigo de Actividad.");
         form1.act1.focus();
         return false;
     }
     if (trim(form1.act2.value )== "" && cantidad > 1) {
         window.alert("Debe ingresar datos en el campo Codigo de Actividad.");
         //window.alert(cantidad);
         // window.alert(cont);
         form1.act2.focus();
         return false;
     }
     if (trim(form1.act3.value) == "" && cantidad > 2) {
         window.alert("Debe Ingresar Datos  en el campo Codigo de Actividad.");
         form1.act3.focus();
         return false;
     }

     if (trim(ing_bruto )== "" && !(form1.inte_sociedad.checked)) {
         window.alert("Debe Ingresar datos en el campo Ingresos Brutos.");
         form1.ing_bruto.focus();
         return false;
     }

     if (form1.ing_bruto.Enabled) {
         if (!IsNumeric(ing_bruto))
         //&& !(form1.inte_sociedad.checked))
         {
             window.alert('Debe ingresar números al campo Ingresos Brutos');
             form1.ing_bruto.focus();
             return false;
         }

         if (parseInt(ing_bruto) < 0 && !(form1.inte_sociedad.checked)) {
             window.alert("Debe Ingresar un monto mayor a cero en el campo Ingresos Brutos.");
             form1.ing_bruto.focus();
             return false;
         }
     }

     if ((trim(sup_afec) == "") && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
	    !(form1.inte_sociedad.checked) && !(form1.cooperativa.checked))) {
         window.alert("Debe Ingresar datos en el campo Superficie Afectada.");
         form1.sup_afec.focus();
         return false;
     }
     if (!IsNumeric(sup_afec) && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
	      !(form1.inte_sociedad.checked) && !(form1.cooperativa.checked))) {
         window.alert('Debe ingresar números');
         form1.sup_afec.focus();
         return false;
     }
     if (parseInt(sup_afec) < 0 && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
	   !(form1.inte_sociedad.checked))) {
         window.alert("Debe Ingresar un monto mayor a cero.");
         form1.sup_afec.focus();
         return false;
     }
     if ((trim(energ_elec) == "") && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
	    !(form1.inte_sociedad.checked) && !(form1.cooperativa.checked))) {
         window.alert("Debe Ingresar datos en el campo Energia Electrica.");
         form1.energ_elec.focus();
         return false;
     }
     if (!IsNumeric(energ_elec) && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
	   !(form1.inte_sociedad.checked) && !(form1.cooperativa.checked))) {
         window.alert('Debe ingresar números');
         form1.energ_elec.focus();
         return false;
     }

     if (parseInt(energ_elec) < 0 && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
	    !(form1.inte_sociedad.checked))) {
         window.alert("Debe Ingresar un monto mayor a cero.");
         form1.energ_elec.focus();
         return false;
     }

     /// Validaciones sobre el precio Unitario ///
     if ((trim(precio_unit) == "") && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
		!(form1.inte_sociedad.checked) && !(form1.cooperativa.checked))) {
         window.alert("Debe Ingresar datos en el campo Precio Unitario.");
         form1.precio_unit.focus();
         return false;
     }
     if (!IsNumeric(precio_unit) && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
		!(form1.inte_sociedad.checked) && !(form1.cooperativa.checked))) {
         window.alert('Debe ingresar números');
         form1.precio_unit.focus();
         return false;
     }
     if (parseInt(precio_unit) < 0 && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
		!(form1.inte_sociedad.checked))) {
         window.alert("Debe Ingresar un monto mayor a cero.");
         form1.precio_unit.focus();
         return false;
     }
     /// Si selecciona por lo menos 1 actividad como RESTO DE ACTIVIDADES (RA), entonces el precio unitario
     /// no puede ser mayor a 2500.
     if (
			parseInt(precio_unit) > 2500
			&& (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
		!(form1.inte_sociedad.checked))
     	) {
         window.alert("El precio unitario debe ser menor o igual a $ 2500.");
         form1.precio_unit.focus();
         return false;
     }
     if (parseInt(precio_unit) < 1 && (trim(t_act) == "Venta") && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
		!(form1.inte_sociedad.checked))) {
         window.alert("El precio unitario debe ser mayor a $ 0.");
         form1.precio_unit.focus();
         return false;
     }
     if (parseInt(precio_unit) < 0 && (trim(t_act) == "Servicios") && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
		!(form1.inte_sociedad.checked))) {
         window.alert("El precio unitario debe ser igual o mayor a $ 0.");
         form1.precio_unit.focus();
         return false;
     }

     /// FIN Validaciones sobre el precio Unitario ///

     ckd_autonomo = false;
     if (form1.autonomo != null) {
         /// Control solo para PERSONAS FISICAS QUE INGRESAN DATOS DE AUTONOMOS

         for (cont = 0; cont < form1.autonomo.length; cont++) {
             //window.alert(form1.autonomo.item(cont).checked)
             if (form1.autonomo.item(cont).checked) {
                 ckd_autonomo = true;

                 // pregunto si es 1004_1 o 1004_2 
                 if (form1.autonomo.item(cont).value == "11_1") {
                     // valido caja
                     if (trim(caja) == "") {
                         window.alert("Debe Ingresar datos en el campo Caja.");
                         form1.caja.focus();
                         return false;
                     }
                     // valido nromatric
                     if (trim(nromatric) == "") {
                         window.alert("Debe Ingresar datos en el campo Número de matrícula.");
                         form1.matric.focus();
                         return false;
                     }
                     if (trim(feciniaport) == "") {
                         window.alert("Debe Ingresar datos en el campo Fecha de Inicio de Aportes.");
                         form1.fecini.focus();
                         return false;
                     }
                     if (stringToDate(feciniaport) > new Date()) {
                         window.alert("La Fecha es mayor al dia de hoy.");
                         form1.fecini.focus();
                         return false;
                     }
                 }
                 if (form1.autonomo.item(cont).value == "11_2") {
                     if (trim(fecemp) == "") {
                         window.alert("Debe Ingresar datos en el campo Fecha de inicio como empleado.");
                         form1.fecemp.focus();
                         return false;
                     }
                     if (stringToDate(fecemp) > new Date()) {
                         window.alert("La Fecha es mayor al dia de hoy.");
                         form1.fecemp.focus();
                         return false;
                     }
                 }
                 if (form1.autonomo.item(cont).value == "14") {
                     
                     if ( trim(tramiteObject.esRegimen) == ""  || (trim(tramiteObject.esRegimen) != "" && trim(tramiteObject.esRegimen) != "S" && trim(tramiteObject.esRegimen) != "A")) {
                         window.alert("Si su categoria de autonomo es Trabajador Independiente Activo (Rubro 7) deberá ser consistente con el tipo de Persona física ingresado en el Rubro 5' ");
                         form1.fecemp.focus();
                         return false;
                     }
                     
                 }
             }
         }

         if (!ckd_autonomo) {
             window.alert("Debe seleccionar el Tipo de Autónomo.");
             return false;
         }
         /// FIN Control solo para PERSONAS FISICAS QUE INGRESAN DATOS DE AUTONOMOS
     }
     //t_act       ="";
     //t_act1      = form1.tipo_act1.value;
     //t_act2      = form1.tipo_act2.value;
     //t_act3      = form1.tipo_act3.value;
     var cantIntegrantes = tramiteObject.ObraSocial.integrantes.length;

     var cantidadConyuges = 0;

     var conjuntoIntegrantes = new Array();
     var integranesEsUnConjunto = true;
     var cuitRepetida = 0;
     var cantIntegrantesEnConjunto=0;
     for (cont = 0; cont < cantIntegrantes; cont++) {
         var integrante = tramiteObject.ObraSocial.integrantes[cont];
         if (array_contains_item(conjuntoIntegrantes, integrante.nroIdentificacion)) {
             integranesEsUnConjunto = false;
             cuitRepetida = integrante.nroIdentificacion;
             break;
         } else {
         conjuntoIntegrantes[cantIntegrantesEnConjunto] = integrante.nroIdentificacion;
         cantIntegrantesEnConjunto = cantIntegrantesEnConjunto + 1; 
         };
     };
     if (!integranesEsUnConjunto) {
         errorObj.error = "90050";
         errorObj.cuitRepetida = cuitRepetida;  
         return false;
     };
     if (array_contains_item(conjuntoIntegrantes, tramiteObject.cuitContribuyente)) {
         errorObj.error = "90052"
         return;
     };        
     
     for (cont = 0; cont < cantIntegrantes; cont++) {
         var integrante = tramiteObject.ObraSocial.integrantes[cont];
    
         if (integrante.parentesco == 1) { cantidadConyuges = cantidadConyuges + 1 };
     };

     
     if (cantidadConyuges > 1) {
             errorObj.error = "90001";
             return false;
     };
     if (tramiteObject.ObraSocial.unificaAportes) {
             if (cantidadConyuges == 0) {
                 errorObj.error = "90000";
                 return false;
             };
         };
         if (tramiteObject.ObraSocial.tieneGrupoFamiliarPrimario) {
             if (cantIntegrantes < 1) {
                 errorObj.error = "90060";
                 return false;
             };
      };
     return true;

 }


function valida_datos()
//*********************
{
    
  var ing_bruto, sup_afec, energ_elec, precio_unit, cantidad, cont, ckd_autonomo;
  var caja, feciniaport, nromatric, cuitemp, fecemp, t_act;
  
  ing_bruto   = form1.ing_bruto.value;
  sup_afec    = form1.sup_afec.value;
  energ_elec  = form1.energ_elec.value;
  precio_unit = form1.precio_unit.value;
  cantidad    = form1.cantact.value;
  t_act       = form1.tact1.value;
  
  if (isNaN(form1.cantact.value))
  {
	window.alert("La cantidad ingresada debe ser un número");
     form1.cantact.focus();
     return;
   }
  
  if (parseInt(form1.cantact.value) > 3)
   {
     window.alert("La cantidad de actividades no puede ser mayor a 3");
     form1.cantact.focus();
     return;
   }
 if ((parseInt(form1.cantact.value) < 1) && (form1.cantact.value == '') && !(form1.inte_sociedad.checked)) 
   {
	 window.alert("La cantidad de actividades debe ser de 1 a 3.");
     form1.cantact.focus(); 
     return;
   }
 
// if (form1.cantact.value == 1 && (!(form1.tipo_act1LP.checked) && !(form1.tipo_act1RA.checked)))
// {
//	window.alert("Debe indicar un tipo de actividad para la actividad principal");
//     form1.cantact.focus(); 
//     return;
// }
// if (form1.cantact.value == 2 && 
//	((!(form1.tipo_act1LP.checked) && !(form1.tipo_act1RA.checked)) ||
//	 (!(form1.tipo_act2LP.checked) && !(form1.tipo_act2RA.checked))))
// {
//	window.alert("Debe indicar un tipo de actividad ");
//     form1.cantact.focus();  
//     return;
// }
// if (form1.cantact.value == 3 && 
//	((!(form1.tipo_act1LP.checked) && !(form1.tipo_act1RA.checked)) ||
//	( !(form1.tipo_act2LP.checked) && !(form1.tipo_act2RA.checked)) ||
//	( !(form1.tipo_act3LP.checked) && !(form1.tipo_act3RA.checked))))
// {
//	window.alert("Debe indicar un tipo de actividad");
//     form1.cantact.focus();  
//     return;
// }
	if(form1.autonomo!=null)
	{
		caja        = form1.caja.value;
		feciniaport = form1.fecini.value;
		nromatric   = form1.matric.value;
		cuitemp     = form1.cuitemp.value;
		fecemp      = form1.fecemp.value;
	}
  //t_act       ="";
  //t_act1      = form1.tipo_act1.value;
  //t_act2      = form1.tipo_act2.value;
  //t_act3      = form1.tipo_act3.value;
  eventual    = form1.eventual.checked;
  even_agrop  = form1.eventual_agropecuario.checked;
    
  if (form1.act1.value == "")
   {
	  window.alert(" Debe Ingresar datos en el campo Codigo de Actividad.");
	  form1.act1.focus();
	  return;
   }
  if (form1.act2.value == "" && cantidad > 1)
   {
  	  window.alert("Debe ingresar datos en el campo Codigo de Actividad.");
  	   //window.alert(cantidad);
  	   // window.alert(cont);
  	  form1.act2.focus();
  	  return;
   }
   if (form1.act3.value == "" && cantidad > 2)
   {
	  window.alert("Debe Ingresar Datos  en el campo Codigo de Actividad.");
	  form1.act3.focus();
	  return;
   }
	 
	if (ing_bruto == "" && !(form1.inte_sociedad.checked))
	  {
		window.alert("Debe Ingresar datos en el campo Ingresos Brutos.");
		form1.ing_bruto.focus();
		return;
	  } 
	   
	if (form1.ing_bruto.Enabled)
    {
	    if (!IsNumeric(ing_bruto))
	    //&& !(form1.inte_sociedad.checked))
	      {
		    window.alert('Debe ingresar números al campo Ingresos Brutos');
		    form1.ing_bruto.focus();
		    return;
	      }
    	
	    if (parseInt(ing_bruto) < 0 && !(form1.inte_sociedad.checked))
	      {
		    window.alert("Debe Ingresar un monto mayor a cero en el campo Ingresos Brutos.");
		    form1.ing_bruto.focus();
		    return;
	      }
    }
    	  
	if ((sup_afec == "") && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) && 
	    !(form1.inte_sociedad.checked) && !(form1.cooperativa.checked)))
	  {
		window.alert("Debe Ingresar datos en el campo Superficie Afectada.");
		form1.sup_afec.focus();
		return;
	  }  
	if (! IsNumeric(sup_afec) && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
	      !(form1.inte_sociedad.checked)&& !(form1.cooperativa.checked)))
	  {
		window.alert('Debe ingresar números');
		form1.sup_afec.focus();
		return;
	  }
	if (parseInt(sup_afec) < 0 && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
	   !(form1.inte_sociedad.checked)))
	  {
		window.alert("Debe Ingresar un monto mayor a cero.");
		form1.sup_afec.focus();
		return;
	  }
	if ((energ_elec == "") && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
	    !(form1.inte_sociedad.checked)&& !(form1.cooperativa.checked)))
	  {
		window.alert("Debe Ingresar datos en el campo Energia Electrica.");
		form1.energ_elec.focus();
		return;
	  }  
	if (! IsNumeric(energ_elec) && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
	   !(form1.inte_sociedad.checked)&& !(form1.cooperativa.checked)))
	  {
		window.alert('Debe ingresar números');
		form1.energ_elec.focus();
		return;
	  }
	
	if (parseInt(energ_elec) < 0 && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
	    !(form1.inte_sociedad.checked)))
	  {
		window.alert("Debe Ingresar un monto mayor a cero.");
		form1.energ_elec.focus();
		return;
	  }
	  
	/// Validaciones sobre el precio Unitario ///
	if ((precio_unit == "") && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
		!(form1.inte_sociedad.checked)&& !(form1.cooperativa.checked)))
	  {
		window.alert("Debe Ingresar datos en el campo Precio Unitario.");
		form1.precio_unit.focus();
		return;
	  }  
	if (! IsNumeric(precio_unit)&& (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
		!(form1.inte_sociedad.checked)&& !(form1.cooperativa.checked)))
	  {
		window.alert('Debe ingresar números');
		form1.precio_unit.focus();
		return;
	  }
	if (parseInt(precio_unit) < 0 && (!(form1.eventual.checked) && !(form1.eventual_agropecuario.checked) &&
		!(form1.inte_sociedad.checked)))
	  {
		window.alert("Debe Ingresar un monto mayor a cero.");
		form1.precio_unit.focus();
		return;
	  }
	/// Si selecciona por lo menos 1 actividad como RESTO DE ACTIVIDADES (RA), entonces el precio unitario
	/// no puede ser mayor a 2500.
	if (
			parseInt(precio_unit) > 2500  
//			&&(
//				(form1.tipo_act1RA.checked && form1.act1.value!="0") || 
//				(form1.tipo_act2RA.checked && form1.act2.value!="0") || 
//				(form1.tipo_act3RA.checked && form1.act3.value!="0"))
		)
	  {
		window.alert("El precio unitario debe ser menor o igual a $ 2500.");
		form1.precio_unit.focus();
		return;
	  }
	  if (parseInt(precio_unit) < 1  && (t_act == "Venta"))
	  {
		window.alert("El precio unitario debe ser mayor a $ 0.");
		form1.precio_unit.focus();
		return;
	  }
	    if (parseInt(precio_unit) < 0  && (t_act == "Servicios"))
	  {
		window.alert("El precio unitario debe ser igual o mayor a $ 0.");
		form1.precio_unit.focus();
		return;
	  }
	  
	/// FIN Validaciones sobre el precio Unitario ///

	ckd_autonomo=false;

	if(form1.autonomo!=null) {   
		/// Control solo para PERSONAS FISICAS QUE INGRESAN DATOS DE AUTONOMOS

		for (cont = 0; cont < form1.autonomo.length; cont++)
		{
		  //window.alert(form1.autonomo.item(cont).checked)
		  if (form1.autonomo.item(cont).checked)
		  {	
			ckd_autonomo = true;

			// pregunto si es 1004_1 o 1004_2 
			if ( form1.autonomo.item(cont).value == "11_1")
			{
				// valido caja
				if (caja == "")
				{
					window.alert("Debe Ingresar datos en el campo Caja.");
					form1.caja.focus();
					return;
				}
				// valido nromatric
				if (nromatric == "")
				{
					window.alert("Debe Ingresar datos en el campo Número de matrícula.");
					form1.matric.focus();
					return;
				}
				if (feciniaport == "")
				{
					window.alert("Debe Ingresar datos en el campo Fecha de Inicio de Aportes.");
					form1.fecini.focus();
					return;
				}
				if (stringToDate(feciniaport) > new Date())
				{
					window.alert("La Fecha es mayor al dia de hoy.");
					form1.fecini.focus();
					return;
				}
			}
				if (form1.autonomo.item(cont).value == "11_2")
				{
				    
				if (trim(fecemp)== "")
					{
					window.alert("Debe Ingresar datos en el campo Fecha de inicio como empleado.");
					form1.fecemp.focus();
					return;
					}
				if (stringToDate(fecemp) > new Date())
					{
					window.alert("La Fecha es mayor al dia de hoy.");
					form1.fecemp.focus();
					return;
					}	
				}
			}
		}
	
		if (! ckd_autonomo)
		{
			window.alert("Debe seleccionar el Tipo de Autónomo.");
			return;
		}
		/// FIN Control solo para PERSONAS FISICAS QUE INGRESAN DATOS DE AUTONOMOS
	}
    //t_act       ="";
  //t_act1      = form1.tipo_act1.value;
  //t_act2      = form1.tipo_act2.value;
  //t_act3      = form1.tipo_act3.value;
	form1.submit();
	
}
 
function abre_actividad()
{
 if (parseInt(form1.cantact.value) > 3)
   {
     window.alert("La cantidad ingresada debe ser un número");
     form1.cantact.focus();
     return;
   }
 if ((parseInt(form1.cantact.value) < 1) || (form1.cantact.value == ''))
   {
     window.alert("Error la cantidad de actividades no corresponde.");
     form1.cantact.focus(); 
     tract1.style.display    ='none';
     tract2.style.display    ='none';
     tract3.style.display    ='none';  
     return;
   }
 if (form1.cantact.value == "1")
   {
      //window.alert("LLEGO ABREACTIVIDADES");
     //form1.act1.value='';
     tract1.style.display    ='';
     tract2.style.display    ='none';
     tract3.style.display    ='none';
   } 
 if (form1.cantact.value == "2")
   { 
     //form1.act1.value='';
     //form1.act2.value='';
     tract1.style.display    ='';
     tract2.style.display    ='';  
     tract3.style.display    ='none';
   }
 if (form1.cantact.value == "3")
   {
     //form1.act1.value='';
     //form1.act2.value='';
     //form1.act3.value='';
     tract1.style.display    ='';
     tract2.style.display    ='';
     tract3.style.display    ='';      
   }
 }
function valida_cantidad()
{
 if (parseInt(form1.cantact.value) > 3)
   {
     window.alert("La cantidad ingresada debe ser un número");
     form1.cantact.focus();
     return;
   }
 if ((parseInt(form1.cantact.value) < 1) || (form1.cantact.value == ''))
   {
     window.alert("Error la cantidad de actividades no corresponde.");
     form1.cantact.focus(); 
     tract1.style.display    ='none';
     tract2.style.display    ='none';
     tract3.style.display    ='none';  
     return;
   }
 if (form1.cantact.value == "1")
   {
     form1.act1.value='';
     tract1.style.display    ='';
     tract2.style.display    ='none';
     tract3.style.display    ='none';
   } 
 if (form1.cantact.value == "2")
   { 
     form1.act1.value='';
     form1.act2.value='';
     tract1.style.display    ='';
     tract2.style.display    ='';  
     tract3.style.display    ='none';
   }
 if (form1.cantact.value == "3")
   {
     form1.act1.value='';
     form1.act2.value='';
     form1.act3.value='';
     tract1.style.display    ='';
     tract2.style.display    ='';
     tract3.style.display    ='';      
   }
}
function valida_ayuda()
 {
  if (form1.cantact.value == "")
  {
    window.alert("La cantidad de actividades no puede ser nula.");
    form1.cantact.focus();
    return false;   
  }
 }
 function muestra_datos(valor)
{
 if (valor  == "11_1" )
   { 
     trcaja.style.display      ='';
     trfecini.style.display    ='';  
     trmatric.style.display    ='';
     trcuit.style.display      ='none';
     trfecemp.style.display = 'none';
     form1.cuitemp.value = "";
     form1.fecemp.value = "";
     
     return;
   }
 if (valor  == "11_2" )
   {
     trcaja.style.display      ='none';
     trfecini.style.display    ='none';  
     trmatric.style.display    ='none';
     trcuit.style.display      ='';
     trfecemp.style.display = '';
     form1.caja.value = "";
     form1.fecini.value = "";
     form1.matric.value = "";
     return;      
   }
     trcaja.style.display      ='none';
     trfecini.style.display    ='none';  
     trmatric.style.display    ='none';
     trcuit.style.display      ='none';
     trfecemp.style.display = 'none';
    
     
     form1.caja.value="";
     form1.fecini.value= "";
     form1.matric.value = "";
     form1.cuitemp.value = "";
     form1.fecemp.value = "";

     return;

     
     
     
 }

 abre_actividad();