var nameError = document.getElementById('name-error');
var telError = document.getElementById('tel-error');
var messError = document.getElementById('mess-error');
var submError = document.getElementById('submit-error');

function validateName(){
  var name = document.getElementById('contact-name').value;
    if (name.length == 0){
      nameError.innerHTML = "Requerido";
      return false;
    }
    nameError.innerHTML = "correcto";
    return true;
}

function validateTel(){
  var tel = document.getElementById('contact-tel').value;
    if (tel.length == 0){
      telError.innerHTML = "Requerido";
      return false;
    }
    telError.innerHTML = "correcto";
    return true;
}

function validateMessage(){
  var mess = document.getElementById('contact-message').value;
    if (mess.length == 0){
      messError.innerHTML = "Requerido";
      return false;
    }
   messError.innerHTML = "correcto";
    return true;
}

function validateForm(){
  if(!validateName()||!validateTel()||!validateMessage()){
    submError.style.display = 'block';
    submError.innerHTML = 'Por favor complete los datos faltantes';
    setTimeout(function(){submError.style.display = 'none';},3000);
    return false;
  }
  
}
// document.getElementById("encabezado-general").innerHTML = `
// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
//   <nav class="navbar navbar-expand-sm navbar-light bg-light">
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#opciones">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <!-- logo -->
//   <a class="navbar-brand" href="#">
//     <img src="IconoAPT.jpg" width="55" height="55" alt="">
//   </a>
//   <!-- enlaces -->
//   <div class="collapse navbar-collapse" id="opciones">   
//     <h1>Asociación Pediátrica de Trasplantes</h1>	
//     <ul class="navbar-nav">
//       <li class="nav-item">
//         <a class="nav-link" href="actividades.html">Actividades</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="quienessomos.html">Quienes somos</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="contacto.html">Contactanos</a>
//       </li>           
//     </ul>
//   </div>
//   <ul class="navbar-redes">
// <a  href="https://www.facebook.com/asocpediatricatx/"><img src="image/facebook.png" style="width: 35px; height: 35px"></a>
// <a  href="https://www.instagram.com/asocpediatricatx/?hl=es"><img src="image/instagram.png" style="width: 35px; height: 35px"></a>
// <a  href="https://ar.linkedin.com/in/asociaci%C3%B3n-pedi%C3%A1trica-de-trasplantes-6b5b51185"><img src="image/linkedin.png" style="width: 35px; height: 35px"></a>
//   </ul>
// </nav>
// `
