let input =""; //resultado de las funciones
let resultado = null;
let memoria = "0";

// esta función incrementa la cadena string a ser evaluada

 function addInput(value) {
  input+=value;
  updateDisplay(input);
}
// esta función es llamada al presionar la tecla =
// y calcula el string introducido
function calculate() {
    let resultado = eval(document.getElementById("display").value);
    document.getElementById("display").value = resultado;
    memoria = resultado;
    input ="";
    //se agreaga para poder continuar operaciones sobre el resultado 
    addInput(memoria);

//esta función inicializa nuestro resultado y limpia pantalla
}
 function clearDisplay(){
    input = "";
    resultado = null;
    updateDisplay("");

 }
// esta función muestra el valor introducido en pantalla
 function updateDisplay(value){
document.getElementById('display').value = value;
 }
 // almaceno valor en memoria para ser llamada luego por la tecla "MR"
 function agregarMemoria(){
    input += memoria;
    document.getElementById('display').value = memoria;
 }

/* A mi calculadora se le ha añadico:
1. la funcionalidad de 
delimitar operaciones entre paréntesis
2. Almacena en memoria automáticamente el resultado,
lo que hace posible utilizarla en una operación posterior
3. Mi calculadora no da error, simplementye no ejecuta
 la operacion y para ser operativa se presiobna la tecla "C"
 Expresiones como: 5+5-4/5 o -4-4 si las evalua
 4. Luego de presionar la tecla "=" me es posible
  seguir operando sobre el resultado
 */





 
