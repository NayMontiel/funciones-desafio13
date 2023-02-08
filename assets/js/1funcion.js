// funcion de expresión
function clickBtnVerificar() {
   let box1 = document.getElementById("box1");
    let a = parseInt(box1.value);
 
    let box2 = document.getElementById("box2");
    let b = parseInt(box2.value);
 
    let box3 = document.getElementById("box3");
    let c = parseInt(box3.value);

     const sumatoria = function(a,b,c) {
        let suma = a + b + c;

         return suma;
    }
    
    result1.innerHTML = " llevas " + sumatoria(a,b,c) + " stickers";
}