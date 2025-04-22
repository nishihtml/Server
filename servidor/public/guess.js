let r = Math.random() * 100;
let i = Math.floor(r);

console.log(i);

function resp(){
    let num = parseInt(document.getElementById("num").value);
    if(num==i){
        document.getElementById("reply").innerHTML = "Você acertou, yay ₍^ >ヮ<^₎ .ᐟ.ᐟ";
        document.getElementById("reply").style.setProperty("background-color", "greenyellow");
        document.getElementById("dica").innerHTML = "Toma este link:";
        document.getElementById("link").innerHTML = "https://youtu.be/dQw4w9WgXcQ?si=D52BIDbGTAfXZ1bt";
        document.getElementById("reply").style.setProperty("color", "black")
    }
    if(num<i){;
        document.getElementById("reply").innerHTML = "Este número é menor";
        document.getElementById("dica").innerHTML = "Tenta algo maior ദ്ദി •⩊• )";
        document.getElementById("reply").style.setProperty("background-color", "red");
        document.getElementById("reply").style.setProperty("color", "white")
    }
    if(num>i){
        document.getElementById("reply").innerHTML = "Este número é maior";
        document.getElementById("dica").innerHTML = "Tenta algo menor ☆ ~ (•̀ᴗ -  )";
        document.getElementById("reply").style.setProperty("background-color", "red");
        document.getElementById("reply").style.setProperty("color", "white")
    }
}



