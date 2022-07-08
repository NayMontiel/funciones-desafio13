// funcion arrow
function clickBtnTotal() {
    let box1 = document.getElementById("box1");
    let a = parseInt(box1.value);
 
    let box2 = document.getElementById("box2");
    let b = parseInt(box2.value);

    suma = (a, b) => a + b;

    result.innerHTML = " llevas " + suma(a,b) + " Frutas";
    
}