function enviar(){
    const nome = document.querySelector("#nome").value;
    const telefone = document.querySelector("#telefone").value;
    const email = document.querySelector("#email").value;

    if (nome === "" || telefone === "" || email === "") {
        alert("Por favor, preencha todos seus dados.")
    } else{
        return alert("Dados enviados!\n" + "Em breve entraremos em contato\n" + "Até logo")        
    }
}