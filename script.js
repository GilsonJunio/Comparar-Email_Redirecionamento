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
function verificar_Usuarios(existe_Email_Igual){
	let dados = buscar_Dados()
	let usuarios = dados.then((usuarios) => {			
			let procurar_Email_Igual = usuarios.find(usuarios => {
				let existe_Email_Igual = usuarios.email === email_Repassado;
				return existe_Email_Igual
		}) 	
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
		}
	})
	return usuarios
}

botao_entrar.addEventListener('click', a => {
	let existe_Email_Igual = verificar_Usuarios()
	let redirecionar = existe_Email_Igual.then( (email_Igual) => {
		if(email_Igual != true){
			window.location.href = 'https://google.com'
		} 
	})
})