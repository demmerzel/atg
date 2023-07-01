var m_menuSelected = null;


function asignarEvento(){

}


function fn_reemplazarContenido(id, html){
    document.addEventListener('DOMContentLoaded', function () {
        var a = document.getElementById(id);
        a.innerHTML = html;
    }, false);
}

function fn_setPortfolio() {
    var html = '<div class="grid gridColumns" style="">';
    for(var i in portfolio){
        var item = portfolio[i];
        html += testTemplatePortfolio
        .replace("{img}", item.img)
        .replace("{ancho}", item.ancho)
        .replace("{alto}", item.alto);
    }
    html += "<div>";

    fn_reemplazarContenido("portfolio", html);
}

function fn_setLibros() {
    var html = '<div class="cabeceraLibros"></div>';
    html += '<div id="escoba"></div>';
    html += '<div class="">';
    html += '<div class="gridLibros libros">';

    var html = 
    '<div class="cabeceraLibros"></div>'+
    '   <div id="escoba"></div>'+
    '   <div class="columnasLibros">'+
    '       <div class="librosLeft"></div>'+
    '       <div class="gridLibros libros">';
   
    for(var i in  libros){
        var item = libros[i];
        html += testTemplate
        .replace("{img}", item.img)
        .replace("{descripcion}", item.subtitulo)
        .replace("{titulo}", item.titulo)
        .replace("{resumen}", item.resumen)
        .replace("{cajaLibro}", item.cajaLibro);
    }
    
    html += "       </div>";
    html += '   <div class="librosRight"></div>';
    html += "</div>";

    fn_reemplazarContenido("libros", html);
}

function fn_setMenu() {
    document.addEventListener('DOMContentLoaded', function () {
        var a = document.getElementById("menu");
        // a.innerHTML = BODY_TEXT;
    }, false);
}

function fn_hideCapa(id){
    var capa = document.getElementById(id);
    capa.style.display = "none";
}
function fn_showCapa(id){
    var capa = document.getElementById(id);
    capa.style.display = "block";
}
function fn_setCapas(){
    fn_hideCapa("portfolio")
    fn_hideCapa("libros")
    fn_hideCapa("sobremi")
    fn_hideCapa("contacto")
    fn_hideCapa("recomendaciones")
    fn_hideCapa("links")
    fn_showCapa(m_menuSelected);
}
function fn_setSubmenuButtons() {
    document.addEventListener('DOMContentLoaded', function () {
        var a = document.getElementById("submenuButtons");
        a.innerHTML = SUBMENU_BUTTONS;


        var b1 = document.getElementById("buttonPorftolio");
        b1.addEventListener("click", function(){
            m_menuSelected = "portfolio"
            fn_setCapas();
        });
        var b2 = document.getElementById("buttonLibros");
        b2.addEventListener("click", function(){
            m_menuSelected = "libros"
            fn_setCapas();
        });
        var b3 = document.getElementById("buttonSobremi");
        b3.addEventListener("click", function(){
            m_menuSelected = "sobremi"
            fn_setCapas();
        });
        var b4 = document.getElementById("buttonContacto");
        b4.addEventListener("click", function(){
            m_menuSelected = "contacto"
            fn_setCapas();
        });
        var b5 = document.getElementById("buttonRecomendaciones");
        b5.addEventListener("click", function(){
            m_menuSelected = "recomendaciones"
            fn_setCapas();
        });
        var b6 = document.getElementById("buttonLinks");
        b6.addEventListener("click", function(){
            m_menuSelected = "links"
            fn_setCapas();
        });


        fn_hideCapa("portfolio")
        fn_hideCapa("libros")
        fn_hideCapa("sobremi")
        fn_hideCapa("contacto")
        fn_hideCapa("recomendaciones")
        fn_hideCapa("links")
        m_menuSelected = "portfolio";
        fn_showCapa(m_menuSelected);




        buttonPorftolio
        buttonLibros
        buttonSobremi
        buttonContacto
        buttonRecomendaciones

        // var sb1 = document.getElementById("submenuButton1");
        // sb1.addEventListener('mouseover', function () {
        //     // alert("hola");
        // });
        
    }, false);
}

function fn_setSobremi(){

    var html = 'Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi Sobre Mi';
    // fn_reemplazarContenido("biografia", html);
}
function fn_setContacto(){
    // var html = CONTACTO;
    // fn_reemplazarContenido("contacto", html);
}
function fn_setRecomendaciones(){
    var html = 'Recomendaciones Recomendaciones Recomendaciones Recomendaciones Recomendaciones Recomendaciones Recomendaciones Recomendaciones Recomendaciones Recomendaciones Recomendaciones Recomendaciones Recomendaciones';
    fn_reemplazarContenido("recomendaciones", html);
}
function fn_setLinks(){
    var html = "";
    for(var i in  links){
        var item = links[i];
        item.linkImgStyle = "grid-row:"+(parseInt(i)+1)+";";
        item.linkImgStyle += "grid-column:1;";
        item.linkImgStyle += "background-image: url(" + item.imgUrl + ");";
        item.linkImgStyle += "background-size: contain;";
        item.linkImgStyle += "background-repeat: no-repeat;";

        item.linkImgName = "grid-row:"+(parseInt(i)+1)+";";
        item.linkImgName += "grid-column:2;";
        item.linkImgName += "color:white;";
        item.linkImgName += "font-weight:bold;";



        html += link
        .replace("{linkImgStyle}", item.linkImgStyle)
        .replace("{linkName}", item.url)
        .replace("{linkImgName}", item.linkImgName);



    }
    
    fn_reemplazarContenido("linksList", html);
}

function fn_setPartners(){
    var html = PARTNERS;
    fn_reemplazarContenido("partners", html);
}
function fn_setRedes(){
    var html = REDES;
    fn_reemplazarContenido("redes", html);
}
function fn_getTxt(id){
    var element = document.getElementById(id);
    var text = element.value;
    return text;
}
function fn_check(tipo){
    var error = 0;
    switch(tipo){
        case "nombre":
            var a = document.getElementById("nombreInput");
            if(a.value == ""){
                error = 1;
            }

            if(error){
                var b = document.getElementById("nombre");
                b.style.border = "1px solid red";
                return false;
            }
            break;

        case "apellidos":
            var a = document.getElementById("apellidosInput");
            if(a.value == ""){
                var b = document.getElementById("apellidos");
                b.style.border = "1px solid red";
            }
            return false;
            break;

        case "email":
            var a = document.getElementById("emailInput");
            if(a.value == ""){
                var b = document.getElementById("email");
                b.style.border = "1px solid red";
            }
            return false;
            break;
             
        case "mensaje":
            var a = document.getElementById("mensajeInput");
            if(a.value == ""){
                var b = document.getElementById("mensaje");
                b.style.border = "1px solid red";
            }
            return false;
            break;
    }
    return true;
}
function fn_setEnviar(){
    var a = document.getElementById("enviar");
    a.addEventListener("click", function(){
        // alert("AA")
        //Comprobar campos
        var error = 0;
        if(!fn_check("nombre")){
            error = 1;
        }
        if(!fn_check("apellidos")){
            error = 1;
        }
        if(!fn_check("email")){
            error = 1;
        }
        if(!fn_check("mensaje")){
            error = 1;
        }

        if(error){
            return;
        }
    });
}
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
fn_setMenu();
fn_setPortfolio();
fn_setLibros();
fn_setSubmenuButtons();
fn_setSobremi();
fn_setContacto();
fn_setRecomendaciones();
fn_setLinks();
// fn_setPartners();
// fn_setRedes();
document.addEventListener('DOMContentLoaded', function () {
    fn_setEnviar();

});

//navigator.geolocation.getCurrentPosition
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
function success(pos) {
    const crd = pos.coords;
    console.log('Tu ubicación actual es:');
    console.log(`Latitud : ${crd.latitude}`);
    console.log(`Longitud: ${crd.longitude}`);
    console.log(`Más o menos ${crd.accuracy} metros.`);
}
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error, options);

var idioma = navigator.language;
console.log(idioma);

var agenteDeUsuario = navigator.userAgent;
console.log(agenteDeUsuario);

navigator.platform
navigator.plugins
navigator.onLine
screen.width
screen.height
window.location
document.referrer
localStorage
sessionStorage

// Devuelve el nombre del código interno de la familia de navegadores del usuario.
var navigator_appCodeName = navigator.appCodeName;

// Devuelve el nombre del navegador del usuario.
var navigator_appName = navigator.appName;

// Devuelve la versión del navegador del usuario.
var navigator_appVersion = navigator.appVersion;

// Devuelve true si el usuario tiene habilitadas las cookies en su navegador, false en caso contrario.
var navigator_cookieEnabled = navigator.cookieEnabled;

// Devuelve 1 si el usuario ha habilitado la opción "No realizar seguimiento" en su navegador, 0 si no lo ha hecho o null si no está definido.
var navigator_doNotTrack = navigator.doNotTrack;

// Devuelve un objeto que permite acceder a la ubicación del usuario, siempre y cuando este haya otorgado permiso.
var navigator_geolocation = navigator.geolocation;

// Devuelve el número de núcleos de CPU disponibles en el dispositivo del usuario.
var navigator_hardwareConcurrency = navigator.hardwareConcurrency;

// Devuelve el idioma preferido del usuario, en función de la configuración del navegador.
var navigator_language = navigator.language;

// Devuelve el número máximo de puntos de contacto táctil que pueden detectarse en el dispositivo del usuario.
var navigator_maxTouchPoints = navigator.maxTouchPoints;

// Devuelve un objeto que permite acceder a los dispositivos multimedia conectados al dispositivo del usuario, como la cámara y el micrófono.
var navigator_mediaDevices = navigator.mediaDevices;

// Devuelve una lista de los tipos MIME admitidos por el navegador del usuario.
var navigator_mimeTypes = navigator.mimeTypes;

// Devuelve true si el usuario está conectado a Internet y false si no lo está.
var navigator_onLine = navigator.onLine;

// Devuelve el sistema operativo en el que se está ejecutando el navegador del usuario.
var navigator_oscpu = navigator.oscpu;

// Devuelve un objeto que permite acceder a los permisos otorgados por el usuario para el acceso a dispositivos y características del navegador.
var navigator_permissions = navigator.permissions;

// Devuelve el sistema operativo en el que se está ejecutando el navegador del usuario.
var navigator_platform = navigator.platform;

// Devuelve una lista de los plugins instalados en el navegador del usuario.
var navigator_plugins = navigator.plugins;

// Devuelve el nombre del producto que está utilizando el usuario.
var navigator_product = navigator.product;

// Devuelve una cadena que contiene información sobre el agente de usuario del navegador, como el nombre y la versión del navegador.
var navigator_userAgent = navigator.userAgent;

// Devuelve el nombre del proveedor del navegador del usuario.
var navigator_vendor = navigator.vendor;

// Devuelve la versión del proveedor del navegador del usuario.
var navigator_vendorSub = navigator.vendorSub;

//  Devuelven el ancho y la altura de la pantalla del usuario.
var screen_width = screen.width;
var screen_height = screen.height;

//  Devuelven el ancho y la altura de la pantalla del usuario, descontando la barra de herramientas y los bordes de la ventana del navegador.
var screen_availWidth = screen.availWidth;
var screen_availHeight = screen.availHeight;

// Devuelve información sobre la URL actual, incluyendo la dirección, el protocolo y los parámetros de la URL.
var window_location = window.location;

// Devuelve la URL de la página anterior que llevó al usuario a la página actual.
var document_referrer = document.referrer;

// Estos objetos permiten almacenar datos localmente en el navegador del usuario.
var localStorage = localStorage;
var sessionStorage = sessionStorage;

// Devuelve el ID de compilación del navegador del usuario.
var navigator_buildID = navigator.buildID;

// Devuelve información sobre la conexión de red del usuario.
var navigator_connection = navigator.connection;

// Devuelve un objeto que permite acceder a las credenciales guardadas en el navegador del usuario.
var navigator_credentials = navigator.credentials;

// Devuelve la cantidad de memoria disponible en el dispositivo del usuario.
var navigator_deviceMemory = navigator.deviceMemory;

// Devuelve un objeto que permite acceder a información sobre el teclado del usuario.
var navigator_keyboard = navigator.keyboard;

// Devuelve una lista de los idiomas preferidos del usuario.
var navigator_languages = navigator.languages;

// Devuelve información sobre las capacidades multimedia del navegador del usuario.
var navigator_mediaCapabilities = navigator.mediaCapabilities;

// Devuelve un objeto que permite controlar la sesión de reproducción multimedia del navegador del usuario.
var navigator_mediaSession = navigator.mediaSession;


// function downloadFile(url, fileName) {
//     const anchorElement = document.createElement("a");
//     anchorElement.href = url;
//     anchorElement.download = fileName;
//     anchorElement.click();
//   }
  
//   // Ejemplo de uso: descarga un archivo llamado "ejemplo.pdf" desde la URL "https://ejemplo.com/ejemplo.pdf"
//   downloadFile("https://ejemplo.com/ejemplo.pdf", "ejemplo.pdf");
   