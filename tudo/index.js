gsap.to(`.car`, {
    x: 2000,
    ease: "power2.in"
})
console.log(`a`)


function validform () {
const email = document.getElementById('email');
let emailText = email.value.trim();
let valido = false;
if (emailText.includes ("@")) {
valido = true;
}
else {
valido = false;
}


let partesEmail = emailText.split ("@");
if (partesEmail[0].length >=7 && partesEmail[0].length <= 127) {
    valido = true;
}
else {
valido = false;

}


const nome = document.getElementById ("nome");
let nomeText = nome.value.trim();
if(nome.length >= 3){
console.log ("nome atende ao tamanho minino")
}{
valido = true;
}
else {
valido = false;

}


const textArea = document.getElementById("mensagem")
let textTexto = textArea.value.trim ();
if (textTexto !== ""){
    {
        valido = true;
        }
        else {
        valido = false;
        }

        function validform(){


        }

document.addEventListener ("submit", function(e){
e.preventDefault();
validform ();

})


}
