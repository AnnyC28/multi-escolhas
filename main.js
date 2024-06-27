const caixaPrincipal = document.querySelector('.caixaPrincipal');
const caixaPerguntas = document.querySelector('.caixaPerguntas');
const caixaAlternativas = document.querySelector('.caixaAlternativas');
const caixaResultado = document.querySelector('.caixaResultado');
const textoResultados = document.querySelector('.textoResultados');
const perguntas = [
    {
        enunciado: "Você é um professor de um colégio publico e recebeu uma proposta para trabalhar em uma turma onde possui três alunos atípios: uma autista, uma aluna surda e um aluno com TDAH:",
        alternativas: [
            "Aceitar o emprego, pois posso buscar entender o compostamento de cada um e posso trazer uma educação de qualidade para cada aluno com sua necessidade especial, independente de precisar me dedicar mais ao encaixar todos no plano de estudo.",
            "Não vou aceitar, pois não posso deixar de entregar uma aula simples e gastar meu tempo com alunos diferentes para agradar o Sistema Educacional e/ou mães que querem deixar seus filhos no colégio público ao invés de bancar um estudo particular para cada um de seus filhos atípicos."

        ]

    },
    {
        enunciado: "Depois de 2 anos você descobre que seu filho mais novo possui Transtorno do Espectro Autista de grau 2, onde precisa de um suporte moderado para poder estudar e até estar em ambientes desconhecidos, o que faz perante essa situação:",
        alternativas: [
            "Buscar apoio para meu filho para quando ele precisar ir para a escola e posteriormente para o colégio estadual, tenha uma supervisão e um cuidado especial com ele, para quando ele quiser entrar no mercado de trabalho e exercer uma profissão, possa estar acostumado com o comportamento de pessoas de fora.",
            "Alternativa 2"

        ]

    },
    {
        enunciado: "Pegunta 3",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"

        ]

    },
    {
        enunciado: "Pegunta 4",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"

        ]

    },
    {
        enunciado: "Pegunta 5",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"

        ]

    },
]
let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}