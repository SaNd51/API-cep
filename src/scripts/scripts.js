document.querySelector('.search').addEventListener('submit', async (event) => {
    event.preventDefault();

    const cep = document.querySelector('#cep').value;

    if (!cep) {
        document.querySelector("#info").classList.remove('show');
        showAlert('Você precisa digitar uma cep...');
        return;
    }
    const apiUrl = `https://cep.awesomeapi.com.br/json/${encodeURI(cep)}`;
    const results = await fetch(apiUrl);
    const json = await results.json();

    console.log(json)
    
    showInfo({
        endereco: json['address'],
        estado: json['state'],
        cidade: json['city']   
    })});   
    
function showInfo(json){
    document.querySelector('#endereço').innerHTML = `${json.endereco}`;
    document.querySelector('#estado').innerHTML = `Estado: ${json.estado}`;
    document.querySelector('#cidade').innerHTML = `Cidade: ${json.cidade}`;
}
