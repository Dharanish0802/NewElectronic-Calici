function turnOff(){
    var inputfield = document.getElementById("inputfield")
    inputfield.style.visibility = "hidden"
}
function turnOn(){
    var inputfield = document.getElementById("inputfield")
    inputfield.style.visibility = "visible"
}
function getValues(num){
    var inputvalue = document.getElementById("inputvalue")
    inputvalue.value = inputvalue.value+num
}
function clearOutChar(){
    inputvalue.value = inputvalue.value.slice(0,-1)
}
function clearAll(){
    inputvalue.value=" "
}
function Calculate(){
    inputvalue.value = eval(inputvalue.value)
}