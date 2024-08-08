const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando ocorre a tecnologia no campo?",
        alternativas: [
            {
                texto: "A tecnologia no campo ocorre quando produtores rurais utilizam softwares, computadores ou sistemas para fazer o monitoramento da lavoura. ",
                afirmacao: "Você concorda com esta afirmativa para melhores desempenho"
            },
            {
                texto: "automatizar os processios, conectar máquinas agricolas, além de reduzir custos e aumentar a produtividade da cultura por meie de diferentes soluções tecnológicas.",
                afirmacao: "Você concorda em automatizar as máquinas com as novas tecnologias "
            }
        ]
    },
    {
        enunciado: "Oque a tecnologia no campo proporciona?",
        alternativas: [
            {
                texto: "Para o monitoramento de doenças e pragas, por exemplo, não precisa mais visitar talhão por talhão indistintamente.",
                afirmacao: "Você acredita que este método vai funcionar 100% "
            },
            {
                texto: "Bom para o agricultor, que passa a contar com o apoio da agricultura digital através de tecnologias agricolas para tomar decisões com maior agilidade, assertividade e sobre a lavoura",
                afirmacao: "Você acredita que os agricultores vão saber utilizar esta nova tecnologia"
            }
        ]
    },
    {
        enunciado: "O que você espera da agricultura 4.0 para próxima década?",
        alternativas: [
            {
                texto: "Acredito que nos próximos anos, essas integrações vão acontecer cada vez mais rapidamente.",
                afirmacao: "Você acredita que nós próximos anos isso pode evoluir"
            },
            {
                texto: "No futuro, ele também vislumbra uma agricultura digital que passa a ser vista como uma plataforma sempre apta a resolver problemas do agricultor, cujas ferramentas estarão integradas dentro de um ecossistema único.",
                afirmacao: "Você acredita que a tecnologia vai ser usada daqui alguns anos"
            }
        ]
    },
    {
        enunciado: "Enunciado 4",
        alternativas: [
            {
                texto: "texto botão 1",
                afirmacao: "Afirmação do texto botão 1"
            },
            {
                texto: "texto botão 2",
                afirmacao: "Afirmação do texto botão 2"
            }
        ]
    },
    {
        enunciado: "Enunciado 5",
        alternativas: [
            {
                texto: "texto botão 1",
                afirmacao: "Afirmação do texto botão 1"
            },
            {
                texto: "texto botão 2",
                afirmacao: "Afirmação do texto botão 2"
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
