var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//Ejemplo de trazo
/*ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);*/

// 1.-Ejemplo de trazo de Rectangulo

    //ctx.fillRect(25, 25, 100, 100);
    //ctx.clearRect(45, 45, 60, 60);
    //ctx.strokeRect(50, 50, 50, 50);

// 2.- Ejemplo de trazo de Triangulo
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();


