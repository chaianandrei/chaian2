const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "QUAL A IMPORTÂNCIA DO MEIO AMBIENTE PARA A VIDA?",
        alternativas: [
            {
                texto: "Nele a recursos naturais necessários para a nossa sobrevivência",
                afirmacao: "Preservar o meio ambiente é fundamental, afinal, é nele onde estão os recursos naturais necessários para a nossa sobrevivência, como água, alimentos e matérias-primas. Sem esses recursos, todas as formas de vida do planeta poderão acabar"
            },
            {
                texto: "",
                afirmacao: "O meio ambiente é a casa da vida. Sem um meio ambiente sadio não é possível manter a saúde do planeta. É nele que encontramos os recursos naturais necessários para a sobrevivência dos seres vivos, como água, alimentos e as matérias-primas. Sem esses recursos não temos vida."
            }
        ]
    },
    {
        enunciado: "O QUE É ECOLOGIA?",
        alternativas: [
            {
                texto: "É a ciência que estuda os seres vivos, no meio em que vivem.",
                afirmacao: "Área da Biologia que estuda as interações entre os seres vivos e destes com o ambiente. É A Ciência das relações do organismo com o meio ambiente."
            },
            {
                texto: "",
                afirmacao: "Ecologia é a parte da Biologia que se preocupa com o estudo das relações estabelecidas entre os seres vivos e destes com o meio ambiente em que vivem."
            }
        ]
    },
    {
        enunciado: "QUAIS OS NÍVEIS DE ORGANIZAÇÃO DOS SERES VIVOS?",
        alternativas: [
            {
                texto: "átomo, molécula, organela, célula, tecido, órgão, sistema, organismo, população, comunidade, ecossistema e biosfera.",
                afirmacao: "Célula – tecido – órgão – sistema – organismo – população – comunidade – ecossistema – biosfera (Ecologia)."
            },
            {
                texto: "",
                afirmacao: "Níveis de organização em biologia são: átomo, molécula, organela, célula, tecido, órgão, sistema, organismo, população, comunidade, ecossistema e biosfera."
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
