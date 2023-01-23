/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
//    function myFunction() {
//    document.getElementById("myDropdown").classList.toggle("show");
//  }

// Закройте выпадающее меню, если пользователь щелкает за его пределами
//   window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }


const hiddenElement = (domElement) => {
	if (domElement.style.display === 'none'){
		domElement.style.display = 'block';

	} else {
		domElement.style.display = 'none';
	}
}
const pressElement = document.getElementById("hamburger");
const secretElement = document.getElementById("myDropdown");

pressElement.addEventListener('click',() =>
	hiddenElement(secretElement));

/*let clickInput = document.querySelectorAll("input");
for(i = 0; i < clickInput.length; i++) {
  clickInput[i].addEventListener('click' , function(){
    this.style.border = "3px solid green";
  });


}*/



/*let mail = document.getElementById("email");
let name = document.getElementById("name");


mail.onblur = function() {
     if(!mail.value.includes('@')){
      mail.classList.add('invalid');
      error.innerHTML = 'Пожалуйста, введите правильно';
     }
   }
mail.onfocus = function(){
  if(this.classList.contains('invalid') || this.classList.contains('valid')){
    this.classList.remove('invalid' , 'valid');
    error.innerHTML = '';
  }
}
name.onblur = function(){
     if(!name.value.includes('a')){
      name.classList.add('invalid');
      error.innerHTML = 'Пожалуйста, введите правильно';
     }else{
      name.classList.add('valid');
     }
    
}
name.onfocus = function(){
  if(this.classList.contains('invalid') || this.classList.contains('valid')){
    this.classList.remove('invalid' , 'valid');
    error.innerHTML = '';
  }
}

document.addEventListener('click' , function(event) {
  let target = event.target;
  if(target.tagName != 'input'){
    inputOff(target);
  }

});

function inputOff(target){
  if(mail && name){
    mail.classList.remove('invalid' , 'valid');
    name.classList.remove('invalid' , 'valid');
    error.innerHTML = '';
  }
};
*/
