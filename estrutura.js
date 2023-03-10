var body= document.getElementById("body")
var ulcursos= document.createElement("ul")
body.appendChild(ulcursos)


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
    var licursos = document.createElement("ul")
    licursos.innerHTML= `<h2>${curso.nome}</h2><p>${curso.descricao}</p><li>${curso.topicos}</li>`
    ulcursos.appendChild(licursos)
   
})