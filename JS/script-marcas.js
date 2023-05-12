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
