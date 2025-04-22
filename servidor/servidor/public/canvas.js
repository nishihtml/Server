//funções1

function desenhar_quadrado_1(x1, y1, x2, y2, color_fill){
    ctx1.beginPath();
    ctx1.lineWidth = 0;
    ctx1.fillStyle = color_fill;
    ctx1.fillRect(x1,y1,x2,y2);
    ctx1.fill();
    ctx1.closePath();
};

function desenhar_linha_1(x1, y1, x2, y2, color_stroke){
    ctx1.beginPath();
    ctx1.lineWidth = 1;
    ctx1.strokeStyle = color_stroke;
    ctx1.moveTo(x1,y1);
    ctx1.lineTo(x2,y2);
    ctx1.stroke();
    ctx1.closePath();
}

function desenhar_arco(x, y, raio, inicio, fim, color_stroke){
    ctx1.beginPath();
    ctx1.lineWidth = 1;
    ctx1.strokeStyle = color_stroke;
    ctx1.arc(x, y, raio, inicio, fim);
    ctx1.stroke();
    ctx1.closePath();
}

function desenhar_circulo_1(x, y, raio, inicio, fim, color_stroke, color_fill){
    ctx1.beginPath();
    ctx1.lineWidth = 2;
    ctx1.strokeStyle = color_stroke;
    ctx1.fillStyle = color_fill;
    ctx1.arc(x, y, raio, inicio, fim);
    ctx1.stroke();
    ctx1.fill();
    ctx1.closePath();
}

function escrever(x, y, fonte, cor, texto){
    ctx1.beginPath();
    ctx1,lineWidth=1
    ctx1.textAlign="center";
    ctx1.font = fonte;
    ctx1.fillStyle = cor;
    ctx1.fillText(texto, x, y);
    ctx1.closePath();
}

//funções2

function desenhar_quadrado_2(x1, y1, x2, y2, color_fill){
    ctx2.beginPath();
    ctx2.lineWidth = 0;
    ctx2.fillStyle = color_fill;
    ctx2.fillRect(x1,y1,x2,y2);
    ctx2.fill();
    ctx2.closePath();
};

function desenhar_linha_2(x1, y1, x2, y2, color_stroke){
    ctx2.beginPath();
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = color_stroke;
    ctx2.moveTo(x1,y1);
    ctx2.lineTo(x2,y2);
    ctx2.stroke();
    ctx2.closePath();
}

function desenhar_circulo_2(x, y, raio, inicio, fim, color){
    ctx2.beginPath();
    ctx2.lineWidth = 0;
    ctx2.fillStyle = color;
    ctx2.arc(x, y, raio, inicio, fim);
    ctx2.fill();
    ctx2.closePath();
}

function desenhar_triangulo(x1, y1, x2, y2, x3, y3, color_fill){
    ctx2.beginPath();
    ctx2.lineWidth = 0;
    ctx2.fillStyle = color_fill;
    ctx2.moveTo(x1, y1);
    ctx2.lineTo(x2, y2);
    ctx2.lineTo(x3, y3);
    ctx2.fill();
    ctx2.closePath();
};
//canvas1

let canvas = document.getElementById("canvas1");
let ctx1 = canvas.getContext("2d");

desenhar_quadrado_1(0, 0, 50, 50, 'blue');
desenhar_quadrado_1(250, 0, 50, 50, 'red');
desenhar_quadrado_1(110, 150, 40, 40, 'red');
desenhar_quadrado_1(0, 150, 30, 30, 'cyan');
desenhar_quadrado_1(0, 120, 30, 30, 'cyan');
desenhar_quadrado_1(270, 135, 30, 30, 'cyan');
desenhar_quadrado_1(0, 270, 60, 30, 'yellow');
desenhar_quadrado_1(0, 240, 30, 30, 'yellow');
desenhar_quadrado_1(240, 270, 60, 30, 'black');
desenhar_quadrado_1(270, 240, 30, 30, 'black');
desenhar_linha_1(0, 0, 150, 150, 'blue')
desenhar_linha_1(300, 0, 150, 150, 'red')
desenhar_linha_1(0, 150, 300, 150, 'green')
desenhar_linha_1(150, 150, 150, 260, 'black')
desenhar_circulo_1(150, 300, 40, 1*Math.PI, 0*Math.PI, 'green', 'cyan');
desenhar_arco(150, 300, 80, 1*Math.PI, 1.5*Math.PI, 'green');
desenhar_arco(150, 300, 60, 1.5*Math.PI, 0*Math.PI, 'green');
desenhar_circulo_1(75, 225, 15, 0*Math.PI, 2*Math.PI, 'green', 'yellow');
desenhar_circulo_1(225, 225, 15, 0*Math.PI, 2*Math.PI, 'green', 'yellow');
desenhar_circulo_1(150, 115, 15, 0*Math.PI, 2*Math.PI, 'blue', 'cyan');
escrever(150, 65, '20px arial', 'black', 'Canvas');
desenhar_arco(150, 150, 80, 1*Math.PI, 1.25*Math.PI, 'green');
desenhar_arco(150, 150, 80, 1.75*Math.PI, 2*Math.PI, 'green');
desenhar_arco(150, 150, 60, 1*Math.PI, 2*Math.PI, 'green');

//canvas2

let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");

desenhar_quadrado_2(0, 225, 300, 75, 'gray')
desenhar_quadrado_2(100, 150, 100, 75, 'brown')
desenhar_triangulo(100, 150, 200, 150, 150, 110, 'salmon')
desenhar_quadrado_2(115, 165, 25, 25, 'deepskyblue')
desenhar_quadrado_2(160, 165, 25, 25, 'deepskyblue')
desenhar_quadrado_2(140, 190, 20, 35, 'maroon')
desenhar_quadrado_2(0, 225, 45, 75, 'cornflowerblue')
desenhar_quadrado_2(0, 260, 100, 40, 'cornflowerblue')
desenhar_circulo_2(0, 225, 45, 1*Math.PI, 2*Math.PI, 'cornflakeblue')
desenhar_circulo_2(100, 300, 40, 1.5*Math.PI, 0.5*Math.PI, 'cornflakeblue')
desenhar_quadrado_2(45, 165, 20, 60, 'brown')
desenhar_quadrado_2(45, 165, 20, 60, 'brown')