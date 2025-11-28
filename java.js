gsap.to(`.car`, {
    x: 2000,
    ease: "power2.in"
})
console.log(`a`)


function validaForm() {
    let erros = [];

    const nome = document.getElementById("nome").value.trim();
    if (nome.length < 3) {
        erros.push("O nome deve ter pelo menos 3 caracteres.");
    }

    const email = document.getElementById("email").value.trim();
    if (!email.includes("@") || email.split("@")[0].length < 7) {
        erros.push("Email inválido! A parte antes do @ precisa ter pelo menos 7 caracteres.");
    }

    const mensagem = document.getElementById("mensagem").value.trim();
    if (mensagem === "") {
        erros.push("O campo mensagem não pode estar vazio.");
    }

    if (erros.length > 0) {
        alert("Por favor, corrija os erros:\n\n" + erros.join("\n"));
    } else {
        alert("Recebemos sua mensagem! Obrigado.");
    }
}

document.addEventListener("submit", function (e) {
    e.preventDefault();
    validaForm();
});
