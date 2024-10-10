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
    //ctx.beginPath();
    //ctx.moveTo(75, 50);
    //ctx.lineTo(100, 75);
    //ctx.lineTo(100, 25);
    //ctx.fill();

// 3.- Ejemplo de trazo de pluma
    //ctx.beginPath();
    //ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
    //ctx.moveTo(110, 75);
    //ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (en el sentido de las agujas del reloj)
    //ctx.moveTo(65, 65);
    //ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
    //ctx.moveTo(95, 65);
    //ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
    //ctx.stroke();

// 4.- Ejemplo de trazo de lineas
 
  // Triángulo relleno
  //ctx.beginPath();
  //ctx.moveTo(25, 25);
  //ctx.lineTo(105, 25);
  //ctx.lineTo(25, 105);
  //ctx.fill();

  // Triángulo contorneado
  //ctx.beginPath();
  //ctx.moveTo(125, 125);
  //ctx.lineTo(125, 45);
  //ctx.lineTo(45, 125);
  //ctx.closePath();
  //ctx.stroke();

  // 5.- Ejemplo de trazo de Arcos
    
  for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        const x = 25 + j * 50; // Coordenada x
        const y = 25 + i * 50; // Coordenada y
        const radius = 20; // Radio del Arco
        const startAngle = 0; // Punto inicial del Círculo
        const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
        const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario

        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }




