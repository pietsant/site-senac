var alunosPresentes =["Pedro", "Maria Eduarda", "Giovanni", "Vanderlei", "Luis Felipe", "João Vitor Borges", "Arthur", "Cecília", "João Vitor Fernandes", "Lucas" ];

//alunosPresentes.forEach(element => { console.log(element)});

var idades = [26, 16, 17, 17, 16, 16, 18]
//alert(alunosPresentes [7])

var programadorWeb={
    nomeDoCurso: "Programador Web",
    cargaHoraria: 240,
    idadeDosAlunos: idades,
    alunos: alunosPresentes,
    instituição: "senac",
}

var cursosEnfermagem = {
    nome:"Enfermagem",
    descricao: "Para você que gostaria de ingressar na área da saúde.",
    topicos: ["Biosegurança", " Primeiros Socorros", " Ministração de medicamentos"],
    imagem: "https://www.uemg.br/images/enfermagem.jpg",
}

var cursosProgramacao = {
    nome:"Programador Web",
    descricao: "Curso para todos que tem interesse em ingressar na área da tecnologia.",
    topicos: ["Tecnologia", " Desing UI/UX", " Desenvolvimento Web"],
    imagem: "https://idocode.com.br/wp-content/uploads/2021/07/code-1839406_1920-1.jpg",
}

var cursosAdministracao = {
    nome:"Administração",
    descricao: "Direcionado para quem queira trabalhar no setor administrativo e com finanças.",
    topicos: ["Administração", " Marketing", " Finanças e contabilidade "],
    imagem: "https://www.uemg.br/images/cursos/administracao.jpg",
}

var cursos=[cursosProgramacao, cursosEnfermagem, cursosAdministracao]

cursos.forEach(curso => {
    var licursos = document.createElement("li")
    licursos.innerText= "<h1>Nossos Cursos<h1>"
    licursos.innerHTML= `<h2>${cursos.nome}`
    licursos.appendChild(licursos)

})


/*var valorant = {
    nome: "Valorant",
    estilo: "FPS tático 5x5",
    objetivo: "Plantar e desarmar a spike",
    mapas: ["Breaze", "Pearl", "Icebox", "Lotus", "Split", "Fracture", "Haven", "Ascent"],
    agentes: ["Astra", "Cypher", "Sage", "Jett", "Harbor", "Phoenix", "Yoru", "Skye", "Omen", "Brinstone", "Breach", "Viper", "Chamber", "Killjoy", "Reyna", "Raze", "Kay/o", "Neon"],
}*/

/*console.log(valorant)*/

//var jogos=["League of Legends", "Call of Duty", "Valorant", "Minecraft"]

//var frase= (alunosPresentes [7])+ " do curso de " + (cursos [0]) + " prefere o jogo " + (jogos [2])
//console.log(frase)

//var dia=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
//var mes=["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

//var frase2= (alunosPresentes [2])+ " do curso de " + cursosProgramacao.nome + " faltou no dia " + (dia [30]) + " no mês " + (mes [0])
//console.log(frase2)

//objeto.topico= topico do objeto

/*var idade = prompt();

if(idade >= 60){
   console.log("Aprovado com: " + idade)
}
else {
   console.log("Não aprovado: " + idade)
}*/

/*var peso = prompt("Peso");
var altura = prompt("Altura");
var imc= peso/(altura*altura)

if(imc<18.5){
    console.log("Magreza: " + imc)
}
else if(imc<24.9){
    console.log("Normal: " + imc)
}
else if(imc<29.9){
    console.log("Sobrepeso: " + imc)
}
else if(imc<39.9){
    console.log("Obesidade: " + imc)
}
else if(imc>40){
    console.log("Obesidade Grave: " + imc)
}*/

/*var span =document.getElementById("span")
span.style.backgroundColor = "red"

var titulo=document.getElementById("titulo")
titulo.style.backgroundColor = "green"
titulo.style.color = "black"

var detalhe=document.getElementById("detalhe")
detalhe.style.backgroundColor = "green"

var programacao=document.getElementById("programacao")
programacao.innerHTML = "<h1>Programação</h1>"

var footer=document.getElementById("footer")
footer.innerHTML = "<h1>FOOTER</h1>"*/

/*var topicos = document.getElementById("topicos")
console.log(topicos)

var litopicos = document.createElement("li")
litopicos.innerText= "Front-end";
console.log(litopicos)

topicos.appendChild(litopicos)

var listabtn = document.getElementById("listabtn")
console.log(listabtn)

var lilistabtn = document.createElement("a")
lilistabtn.innerHTML= "<li>Sobre nós</li>";
lilistabtn.href="#"
console.log(lilistabtn)

listabtn.appendChild(lilistabtn)*/