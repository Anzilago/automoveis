
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


function consultaMarca(){

    let url = `https://parallelum.com.br/fipe/api/v1/carros/marcas`;
    fetch(url).then(function (response){
        console.log(response);
        response.json().then(function (data){
            let divs = document.querySelector(".containerMarcas");
            for (let i = 0; i < (data.length/2)-2; i++) {
                divs.innerHTML += `<div>${data[i].nome}</div>`;
            }
        })
    })
}









