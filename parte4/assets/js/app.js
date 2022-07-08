// funcion usando addEventListener

let box1 = document.getElementById("box-1");
let box2 = document.getElementById("box-2");
let box3 = document.getElementById("box-3");
let box4 = document.getElementById("box-4");

function boxFuncion1(){

    document.addEventListener('keydown', function (event) {
           
        if (event.key === 'a') 
        {
            box1.style.backgroundColor = "lightblue";
            box2.style.backgroundColor = "#e9cd3f";
            box3.style.backgroundColor = "#e9cd3f";
            box4.style.backgroundColor = "#e9cd3f";

            box1.innerHTML = "A"
            box2.innerHTML = "";
            box3.innerHTML = "";
            box4. innerHTML = "";
        } 
        if (event.key === 's')
        {
            box1.style.backgroundColor = "pink";
            box2.style.backgroundColor = "#e9cd3f";
            box3.style.backgroundColor = "#e9cd3f";
            box4.style.backgroundColor = "#e9cd3f";

            box1.innerHTML = "S"
            box2.innerHTML = "";
            box3.innerHTML = "";
            box4. innerHTML = "";
        }
        if (event.key === 'd') 
         {
            box1.style.backgroundColor = "lightgreen";
            box2.style.backgroundColor = "#e9cd3f";
            box3.style.backgroundColor = "#e9cd3f";
            box4.style.backgroundColor = "#e9cd3f";

            box1.innerHTML = "D"
            box2.innerHTML = "";
            box3.innerHTML = "";
            box4. innerHTML = "";
         }

        });
}
box1.addEventListener("click",boxFuncion1);

function boxFuncion2() {

    document.addEventListener('keydown', function (event) {
        if (event.key === 'a') 
        {
            box1.style.backgroundColor = "#e9cd3f";
            box2.style.backgroundColor = "lightblue";
            box3.style.backgroundColor = "#e9cd3f";
            box4.style.backgroundColor = "#e9cd3f";

            box1.innerHTML = "";
            box2.innerHTML = "A";
            box3.innerHTML = "";
            box4. innerHTML = "";
        } 
        if (event.key === 's')
        {
            box1.style.backgroundColor = "#e9cd3f";
            box2.style.backgroundColor = "pink";
            box3.style.backgroundColor = "#e9cd3f";
            box4.style.backgroundColor = "#e9cd3f";

            box1.innerHTML = "";
            box2.innerHTML = "S";
            box3.innerHTML = "";
            box4. innerHTML = "";

        }
        if (event.key === 'd') 
         {
            box1.style.backgroundColor = "#e9cd3f";            
            box2.style.backgroundColor = "lightgreen";
            box3.style.backgroundColor = "#e9cd3f";
            box4.style.backgroundColor = "#e9cd3f";

            box1.innerHTML = "";
            box2.innerHTML = "D";
            box3.innerHTML = "";
            box4. innerHTML = "";
         }

        });
}
box2.addEventListener("click",boxFuncion2);

function boxFuncion3() {

    document.addEventListener('keydown', function (event) {
        if (event.key === 'a') 
        {
            box1.style.backgroundColor = "#e9cd3f";
            box2.style.backgroundColor = "#e9cd3f";
            box3.style.backgroundColor = "lightblue";
            box4.style.backgroundColor = "#e9cd3f";

            box1.innerHTML = "";
            box2.innerHTML = "";
            box3.innerHTML = "A";
            box4. innerHTML = "";

        } 
        if (event.key === 's')
        {
            box1.style.backgroundColor = "#e9cd3f";
            box2.style.backgroundColor = "#e9cd3f";
            box3.style.backgroundColor = "pink";
            box4.style.backgroundColor = "#e9cd3f";

            box1.innerHTML = "";
            box2.innerHTML = "";
            box3.innerHTML = "S";
            box4. innerHTML = "";
        }
        if (event.key === 'd') 
         {
            box1.style.backgroundColor = "#e9cd3f";
            box2.style.backgroundColor = "#e9cd3f";
            box3.style.backgroundColor = "lightgreen";
            box4.style.backgroundColor = "#e9cd3f";

            box1.innerHTML = "";
            box2.innerHTML = "";
            box3.innerHTML = "D";
            box4. innerHTML = "";
         }

        });
}
box3.addEventListener("click", boxFuncion3);

function boxFuncion4() {

    document.addEventListener('keydown', function (event) {
        if (event.key === 'a') 
        {
            box1.style.backgroundColor = "#e9cd3f";
            box2.style.backgroundColor = "#e9cd3f";
            box3.style.backgroundColor = "#e9cd3f";
            box4.style.backgroundColor = "lightblue";

            box1.innerHTML = "";
            box2.innerHTML = "";
            box3.innerHTML = "";
            box4.innerHTML = "A";
        } 
        if (event.key === 's')
        {
            box1.style.backgroundColor = "#e9cd3f";
            box2.style.backgroundColor = "#e9cd3f";
            box3.style.backgroundColor = "#e9cd3f";
            box4.style.backgroundColor = "pink";

            box1.innerHTML = "";
            box2.innerHTML = "";
            box3.innerHTML = "";
            box4. innerHTML = "S";
        }
        if (event.key === 'd') 
         {
            box1.style.backgroundColor = "#e9cd3f";
            box2.style.backgroundColor = "#e9cd3f";
            box3.style.backgroundColor = "#e9cd3f";
            box4.style.backgroundColor = "lightgreen";

            box1.innerHTML = "";
            box2.innerHTML = "";
            box3.innerHTML = "";
            box4. innerHTML = "D";
         }

        
        });
}
box4.addEventListener("click", boxFuncion4);
    