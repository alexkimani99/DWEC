function confirmacion(){
    alert("Valores reseteados.");
}

function validadorFormulario() {
      
    if( document.formulario.Nombre.value == "" ) {
       alert( "Por favor, introduce un nombre." );
       document.formulario.Nombre.focus() ;
       return false;
    }
    if( document.formulario.Apellidos.value == "" ) {
        alert( "Por favor, introduce apellidos válidos" );
        return false;
     }
    if( document.formulario.EMail.value == "" ) {
       alert( "Por favor, introduce un email válido." );
       document.formulario.EMail.focus() ;
       return false;
    }
    if( document.formulario.Telf.value == "" || isNaN(document.formulario.Telf.value)) {
       alert( "Por favor, introduce un teléfono válido" );
       document.formulario.Telf.focus() ;
       return false;
    }
    if( document.formulario.Dni.value == "" || document.formulario.Dni.v) {
        alert( "Por favor, introduce un DNI válido" );
        return false;
     }
 
     if( document.formulario.Iban.value == "" ) {
        alert( "Por favor, introduce un IBAN válido" );
        return false;
     }
     if( document.formulario.Swift.value == "" ) {
        alert( "Por favor, introduce un Swift válido" );
        return false;
     }
     if( document.formulario.Usuario.value == "" ) {
        alert( "Por favor, introduce un Usuario válido" );
        return false;
     }
    alert("Se ha enviado el formulario con éxito.");
    return( true );
 }
 function checkPattern() {
    var elem = document.getElementById("Nombre");

    //Implemento para check de atributo pattern
    var re = "[a-zA-Z0-9 ]{2,}";

    return re.test(elem.value);
}