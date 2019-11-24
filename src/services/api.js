export const Cadastro = async () => {
	return()=>{
	this.nome = document.getElementById("nomeid").value;
    this.cpf = document.getElementById("CPFid").value;
    this.endereco = document.getElementById("enderecoid").value;
    this.telefone = document.getElementById("telefoneid").value;
    this.dataNasc = document.getElementById("dataNascid").value;
    this.price = document.getElementById("priceid").value;
    this.email = document.getElementById("emailid").value;
    this.model = document.getElementById("modelid").value;
    this.manufacturer = document.getElementById("manufacturerid").value;
    this.feature = document.getElementById("featureid").value;
    }	
};

export const Enviar = async () => {
	return ()=>{
	var cadastro = new Cadastro();
	var json = JSON.stringify(cadastro);
	
    var nome = document.getElementById("nomeid").value;
    var cpf = document.getElementById("CPFid").value;
    var endereco = document.getElementById("enderecoid").value;
    var telefone = document.getElementById("telefoneid").value;
    var dataNasc = document.getElementById("dataNascid").value;
    var price = document.getElementById("priceid").value;
    var email = document.getElementById("emailid").value;
    var model = document.getElementById("modelid").value;
    var manufacturer = document.getElementById("manufacturerid").value;
    var feature = document.getElementById("featureid").value;
    var string_envio_certa = '{"nome": "HunterXHunter ","cpf": "42121963871","endereco": "Rua Teste -  São Paulo - SP","telefone": "(11) 984221950","email": "email@teste.com","dataNascimento": "23/10/2019","price": "9000","model": "BMW Alguma coisa","manufacturer": "BMW","feature": "Tem tudoo"}'
    var string_envio = '{"nome": "'+ nome + '","cpf": "'+ cpf + '","endereco": "'+ endereco + '","telefone": "'+ telefone + '","email": "'+ email + '","dataNascimento": "'+ dataNasc + '","price": "'+ price + '","model": "'+ model + '","manufacturer": "'+ manufacturer + '","feature": "'+ feature + '"}'

  //  alert (string_envio_certa + '|' + string_envio)  
    fetch('https://9bzcb7twu0.execute-api.sa-east-1.amazonaws.com/v1/cadastro', {
        method: 'POST',
        data: json,        
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({
		success: function(data) { 
			alert(data); 
		},
		error: function(xhr){
			alert(xhr);
        }
    })
	});
}
}
