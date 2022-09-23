var formulario = document.getElementById('form')
var random = document.getElementById('random')
var url = "https://rickandmortyapi.com/api/character/";


var imagem = document.getElementById('imagem')
var nome = document.getElementById('nome')
var id = document.getElementById('id')
var vivo = document.getElementById('status')
var gender = document.getElementById('gender')
var specie = document.getElementById('specie')
var type = document.getElementById('type')
var local = document.getElementById('local')
var origin = document.getElementById('origin')
var creation = document.getElementById('creation')

formulario.addEventListener('click', function (e) {

	e.preventDefault()
	let name = document.getElementById('nomeid').value
	let url = 'https://rickandmortyapi.com/api/character/' + name

	if(isNaN(name)){
		alert("Type an ID")
	}else{
		
		if(name<=826){
	fetch(url)
	.then(resposta => resposta.json())
	.then(function(data){
		

            nome.innerHTML = data.name
            vivo.innerHTML = data.status
            gender.innerHTML = data.gender
            specie.innerHTML = data.species
            type.innerHTML = data.type
            local.innerHTML = data.location['name']
            origin.innerHTML = data.origin['name']
            creation.innerHTML = dataform(data.created.slice(0,10))

            imagem.src = data.image	

            if (data.type == ""){
            	type.innerHTML = "-"
            }
   
  		  })
	}else{
		alert("Type an ID under 826")
	}
}
})




random.addEventListener('click', function (e) {

	e.preventDefault()

	let randomnum = Math.floor(Math.random() * 827);

	let url = 'https://rickandmortyapi.com/api/character/' + randomnum


	fetch(url)
	.then(resposta => resposta.json())
	.then(function(data){
		

            nome.innerHTML = data.name
            vivo.innerHTML = data.status
            gender.innerHTML = data.gender
            specie.innerHTML = data.species
            type.innerHTML = data.type
            local.innerHTML = data.location['name']
            origin.innerHTML = data.origin['name']
            creation.innerHTML = dataform(data.created.slice(0,10))

            document.getElementById('nomeid').value = data.id 

            imagem.src = data.image	

            if (data.type == ""){
            	type.innerHTML = "-"
            }
   
  		  })

})

	function dataform(val){
  			  return val[5] + val[6] + '/' + val[8] + val[9] + '/' + val.substr(0,4)

			}