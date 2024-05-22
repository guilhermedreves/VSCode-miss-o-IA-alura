const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é IA?",
        alternativas: [
            {
                texto: "Inteligência Artificial",
                afirmacao: "Conhece sobre IA,"
            },
            {
                texto: "Inteligência Ambiental",
                afirmacao: "Precisa conhecer que IA é INTELIGÊNCIA ARTIFICIAL,"
            }
        ]
    },
    {
        enunciado: "IA (inteligência artificial) é um campo de aplicação e pesquisa da computação, que trata de meios (sistemas e programas) capazes de realizar tarefas antes só possíveis por humanos. De acordo com o enunciado, qual é a alternativa você considera correta?",
        alternativas: [
            {
                texto: "A AI trouxe maior eficácia na tomada de decisões e na execução de tarefas",
                afirmacao: "todavia, a AI trouxe maior eficácia na tomada de decisões e na execução de tarefas,"
            },
            {
                texto: "A IA desenvoveu menos precisão e maior indice de erros humanos",
                afirmacao: "todavia, presencia que a IA pode prejudicar o indice de desenvolvimento humano,"
            }
        ]
    },
    {
        enunciado: "Como que você acha que será o futuro da IA?",
        alternativas: [
            {
                texto: "A IA irá dominar os seres humanos, onde os humanos ficaram sedentários e dependentes das máquinas, isso inclue também baixo nível de inteligência dos humanos",
                afirmacao: "contudo, imagina um futuro assustador, onde os humanos ficam sedentários e a IA dominante em tudo."
            },
            {
                texto: "A IA será um avanço grandioso, onde doenças sem curas serão possíveis curadas, aumento na saúde, avanços tecnologicos, os humanos serão uma raça bem avançada e evoluida",
                afirmacao: "contudo, vê um futuro que dá orgulho, onde temos grandes avanços tecnológicos e medicinais."
            }
        ]
    },
    {
        enunciado: "Qual é um exemplo de uso de IA no cotidiano?",
        alternativas: [
            {
                texto: "Assistentes virtuais como Siri e Alexa",
                afirmacao: "Em definição, os assistentes virtuais são os mais presenntes na vida de hoje."
            },
            {
                texto: "Automação de carros",
                afirmacao: "Em definição, os carros possuem cada vez mais tecnologia inteligênte, podendo até estacionar sozinho?"
            }
        ]
    },
    {
        enunciado: "Sobre as Redes Neurais Artificiais?",
        alternativas: [
            {
                texto: "inspiradas na estrutura e função do cérebro humano",
            afirmacao: "Contendo, os avanços na medicina são incríveis, Elon Musk acabou de implementar um chipe em um humano, o que poderá vir? Telepatia? Controle total?"
            },
            {
                texto: "inspiradas no desenvolvimenmto dos sistemas sanguíneos do corpo ao cérebro",
                afirmacao: "Não foi a resposta correta, mas, os avanços na medicina são incríveis, Elon Musk acabou de implementar um chipe em um humano, o que poderá vir? Telepatia? Controle total?"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
