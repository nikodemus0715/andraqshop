document.addEventListener('DOMContentLoaded',function(){
  //the dom has been loaded
  //get a reference to our form
  var loginForm = document.querySelector('.q-form');
  //a collection of input ids
  var inputs = ['#username','#password'];

  validateData(inputs,loginForm);

})
