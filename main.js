const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você é um professor de um colégio publico e recebeu uma proposta para trabalhar em uma turma onde possui três alunos atípios: uma autista, uma aluna surda e um aluno com TDAH:",
        alternativas: [
                {
            texto:"Aceitar o emprego.",
            afirmacao: "Pois posso buscar entender o compostamento de cada um e posso trazer uma educação de qualidade para cada aluno com sua necessidade especial, independente de precisar me dedicar mais ao encaixar todos no plano de estudo."},

                {
            texto: "Não vou aceitar.",
            afirmacao: "Pois não posso deixar de entregar uma aula simples e gastar meu tempo com alunos diferentes para agradar o Sistema Educacional e/ou mães que querem deixar seus filhos no colégio público ao invés de bancar um estudo particular para cada um de seus filhos atípicos."}
        ]
    },
    {
        enunciado: "Você é casado(a) e possui 3 filhos, mas após seu filho mais novo completar 2 anos, descobre que ele possui Transtorno do Espectro Autista de grau 2, onde precisa de um suporte moderado para poder estudar e até estar em ambientes desconhecidos, o que faz perante essa situação:",
        alternativas: [
            {
            texto: "Buscar apoio para meu filho.",
            afirmacao: "Para quando ele precisar ir para a escola e posteriormente para o colégio estadual, tenha uma supervisão e um cuidado especial com ele, para quando ele quiser entrar no mercado de trabalho e exercer uma profissão, possa estar acostumado com o comportamento de pessoas de fora"},
            {
            texto: "Não buscar ajuda de especialistas e tentar resolver em casa.",
            afirmacao: "Eu sei que ele pode ter o estilo de vida de crianças normais apenas ignorando as diferenças, e as pessoas também precisam entender que ele é especial e precisam buscar entender o comportamento dele."}

        ]
    },
    {
        enunciado: "Ao fazer 18 anos, seu filho está no último ano do ensino médio e quer entrar no mercado de trabalho, mas não é qualquer ambiente de trabalho que aceite ele, por conta do TEA, mas o sonho dele é ir para as Forças Armadas, o que fazer nessa situação?",
        alternativas: [

            {
            texto: "Buscar algum lugar no qual ele possa realizar o sonho dele e que ele possa fazer algo significativo.",
            afirmacao: "Pois quero fazer o possivel para meu filho se encaixar e também ser aceito em seu meio social."},
            {
            texto: "Fazer ele se convencer que não pode fazer algo desse tipo.",
            afirmacao: "Porque não é normal para um serviço tão complicado igual e alistar nas Força Armadas, então o melhor seria desistir e continuar deixando as pessoas terem um esteriótipo errado de pessoas com TEA."}
 
        ]
        enunciado: "Ao fazer 18 anos, seu filho está no último ano do ensino médio e quer entrar no mercado de trabalho, mas não é qualquer ambiente de trabalho que aceite ele, por conta do TEA, mas o sonho dele é ir para as Forças Armadas, o que fazer nessa situação?",
        alternativas: [

            {
            texto: "Buscar algum lugar no qual ele possa realizar o sonho dele e que ele possa fazer algo significativo.",
            afirmacao: "Pois quero fazer o possivel para meu filho se encaixar e também ser aceito em seu meio social."},
            {
            texto: "Fazer ele se convencer que não pode fazer algo desse tipo.",
            afirmacao: "Porque não é normal para um serviço tão complicado igual e alistar nas Força Armadas, então o melhor seria desistir e continuar deixando as pessoas terem um esteriótipo errado de pessoas com TEA."}
 

    
        ]
    
    {
        enunciado: "",
        alternativas: [
            "",
            ""
        ]
    },
]