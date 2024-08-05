/*TODO:
ATIVAR A FUNÇÃO verificacao_Usuarios() QUANDO APERTAR O BOTÃO; Funcionando




*/
/*BUGS
Não consigo retornar booleano na função verificar_Usuario(). Preciso de booleano para redirecionar à outra página.
04/08/2024 Consegui retornar booleano na função verificar_Usuario(), porém ao atribuir ela numa variavel retorna uma promise com valor booleano

04/08/2024 
Resolvi o problema de retornar booleano, eu apenas condicionei um redirecionamento 
mediante .then() atribuir true no parametro da função callback 

*/

/*
A função buscar_Dados() requisita um arquivo json no meu repositório;
Após os devidos tratamentos, os dados JSON são atribuídos à variável usuarios;
A função buscar_Dados() retorna a variável usuarios.

Quando atribuir buscar_Dados() à uma variável "teste", ela retornará uma promise com dois protótipos: "<status>" e "<value>";
O protótipo value conterá um objeto com um array de múltiplos objetos contendo dados de  usuários em formato JSON.

Para acessar o array retornado pelo protótipo, é necessário aplicar o método then() na variável "teste"; 
Este método acessará os dados quando o status do retorno for fulfilled, nesse caso, o protótipo "<status>" está fulfilled;
Assim, uma nova varíavel que receba 'teste.then()' será capaz de acessar o array.

O método ".then" tem sintaxe: ".then(parametro => {})", assim o array de teste se tornará disponível através de "parametro";
aplique ".then(parametro => {console.log(parametro)})" para averiguar o array no console.

*/


let email_Repassado = document.getElementsByClassName('email')[0].value
let botao_entrar = document.getElementsByClassName('botao')[0]

async function buscar_Dados(){
	//busque seus usuarios abaixo
	const requisicao = await fetch('https://raw.githubusercontent.com/GilsonJunio/Usuarios-JSON/main/usuarios.json')
		//console.log(requisicao)
	const tratar = await requisicao.json()
		//console.log(tratar)

	let usuarios = tratar.usuarios
		//console.log(usuarios)

	return usuarios
}
/*
function verificar_Usuarios(usuarios){
	//criar usuários
	let dados = buscar_Dados()
	usuarios = dados.then((usuarios) => {			
			console.log(usuarios)
			
			let procurar_Email_Igual = usuarios.find(usuarios => {
//				console.log(usuarios.email === email_Repassado);
				console.log(usuarios)

				let existe_Email_Igual = usuarios.email === email_Repassado;
					console.log("Verificando se existe email igual em: " + JSON.stringify(usuarios))
					console.log(existe_Email_Igual)

				if(existe_Email_Igual === true){
					alert('O Email já existe!')
					return true
				}
				alert('O Email não existe!')
				return false
		}) 	
		console.log(procurar_Email_Igual)
	})
}
*/

/*
ideia: fazer a funcao captar se algum email igual foi detectado e assim, retornar existe_Email_Igual com valor booelano
Consegui resolver parcialmente, agora a variavel procurar_Email_Igual retorna o array com email igual

*/
function verificar_Usuarios(existe_Email_Igual){
	//criar usuários
	let dados = buscar_Dados()
	let usuarios = dados.then((usuarios) => {			
			console.log(usuarios)
			
			let procurar_Email_Igual = usuarios.find(usuarios => {
//				console.log(usuarios.email === email_Repassado);
				console.log(usuarios)

				let existe_Email_Igual = usuarios.email === email_Repassado;

					console.log(`Verificando se existe email igual à ${email_Repassado} em: ` + JSON.stringify(usuarios))
					console.log(existe_Email_Igual)

					return existe_Email_Igual
		}) 	

		console.log(procurar_Email_Igual)

		if(procurar_Email_Igual){
			alert('Este email já foi cadastrado!')
			procurar_Email_Igual = true
			return procurar_Email_Igual
		}
		else if(procurar_Email_Igual === undefined){
			return false
		}
		else{
			alert('Email cadastrado com sucesso!')
//			window.location.replace('https://google.com')
		}


	})
	console.log(usuarios)
	return usuarios
}

botao_entrar.addEventListener('click', a => {
	let existe_Email_Igual = verificar_Usuarios()
	let redirecionar = existe_Email_Igual.then( (email_Igual) => {
		console.log(email_Igual);
		if(email_Igual != true){
			//window.location.href = 'https://google.com'
		} 
	})
})
/*
Chame a função comparar_Email('email') no console
Coloque o email para comparar com o banco de dados	
*/