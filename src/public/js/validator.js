window.onload = function () {

  let formularioCont = document.querySelector('#registerContenedor');
  const formulario = document.querySelector(".formR");

  const nameInput = document.querySelector('.nameRegister');

  const pError1 = document.querySelector('.error-input-firstName');
  const pError2 = document.querySelector('.error-input-lastName');
  const pError3 = document.querySelector('.error-input-email');
  const pError31 = document.querySelector('.error-input-email2');
  const pError4 = document.querySelector('.error-input-password');
  const pError5 = document.querySelector('.error-input-imageUser');


  formulario.addEventListener('submit', (e) => {

    if ((formulario.firstName.value.length) < 2) {
      pError1.innerHTML = 'Debe tener al menos 2 caracteres'
    } else {
      e.preventDefault();
    }
  }),

    formulario.addEventListener('submit', (e) => {

      if ((formulario.lastName.value.length) < 2) {
        pError2.innerHTML = 'El apellido debe tener al menos 2 caracteres'
      } else {
        e.preventDefault();
      }
    }),


    formulario.addEventListener('submit', (e) => {

      if (formulario.email.value === '') {
        pError3.innerHTML = 'No puede ser vacio'
      }


      const emailR = /^[^\s@]+@[^\s@]+\.[$$@]+$/;

      const emailV= formulario.email.value;
      console.log(emailV);
  
      if (emailR.test(emailV)){
        pError31.innerHTML = 'Por favor, introduce un correo electrónio válido'
      } else {
        e.preventDefault();
      }
    }),

    formulario.addEventListener('submit', (e) => {

      if ((formulario.password).value === '') {
        alert(pError4.innerHTML = 'Debes colocar una contraseña')
      } else {
        e.preventDefault();
      }
    }),

    formulario.addEventListener('submit', (e) => {

      if (formulario.imageUser.value && !/\.(jpg|jpeg|png|gif)$/i.test(formulario.imageUser.value)) {
        pError5.innerHTML = 'Formato de imagen no válido. Puedes utilizar JPG, JPEG, PNG o GIF'
      } else {
        e.preventDefault();
      }
    })}

