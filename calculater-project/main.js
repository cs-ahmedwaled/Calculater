let display = document.getElementById('screen');

function displayInput(value){
  display.value += value
}

function clearInput(){
  display.value = '';
}

function deleteOne(){
  display.value = display.value.slice(0 , -1);
}

function equal(){
  display.value = eval(display.value);
}