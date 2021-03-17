let btnpegar;

function aoCarregarPagina(){
    btnpegar = document.getElementById("btnpegar");
    btnpegar.addEventListener('click', requisicaoCep);
}

function requisicaoCep(){
    let cep = document.getElementById("txtcep").value;
    const endpoint = "https://viacep.com.br/ws/"+cep+"/json";

    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("lblrua").textContent = data.logradouro;
        document.getElementById("lblbairro").textContent = data.bairro;
        document.getElementById("lblcidade").textContent = data.localidade;
        
        
    })
    .catch(() => alert("Opa! deu ruim aí!"));
}