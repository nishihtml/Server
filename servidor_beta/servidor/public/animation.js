let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let imagem = {
    x: 150,
    y: 150,
    size: 25,
    img: new Image(),
    desenha: function(){
        this.img.src = 'soul.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
        ctx.closePath();
    }
}

document.addEventListener('mousemove', function(evento){
    let rect = canvas.getBoundingClientRect()
    let x_mouse = evento.clientX - rect.left - 12.5;
    let y_mouse = evento.clientY - rect.top - 12.5;
    console.log(x_mouse, y_mouse);

    imagem.x = x_mouse;
    imagem.y = y_mouse;
    if(x_mouse < 0){imagem.x = 0}
    if(x_mouse > 275){imagem.x = 275}
    if(y_mouse< 0){imagem.y = 0}
    if(y_mouse> 275){imagem.y = 275}
})

function animacao(){
    
    ctx.clearRect(0,0,300,300);    
    imagem.desenha(ctx);
    requestAnimationFrame(animacao);
}

animacao()