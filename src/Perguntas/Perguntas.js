const perguntas = [
  {
    pergunta: "Para que a internet foi criada no começo?",
    opcoes: [
      "Para cientistas e militares conversarem.",
      "Para vender produtos em lojas online.",
      "Para as pessoas assistirem a vídeos e filmes.",
      "Para criar redes sociais como o Facebook."
    ],
    respostaCorreta: 0,
  },
  {
    pergunta: "O que é a 'Internet das Coisas'?",
    opcoes: [
      "Um tipo de internet muito mais rápida.",
      "Quando objetos, como uma TV ou relógio, se conectam à internet.",
      "Um aplicativo de celular para fazer compras.",
      "Um cabo que conecta o computador na tomada."
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "O que uma Inteligência Artificial (IA) tenta fazer?",
    opcoes: [
      "Consertar computadores e celulares quebrados.",
      "Controlar todos os aparelhos de uma casa.",
      "Entender o que pedimos e responder como uma pessoa.",
      "Apenas traduzir textos de outras línguas."
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "Qual o nome mais conhecido para 'dinheiro digital'?",
    opcoes: [
      "Dólar da Internet.",
      "Ponto Eletrônico.",
      "Bitcoin.",
      "Cartão de Crédito."
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "O que geralmente acontece com os computadores e celulares com o tempo?",
    opcoes: [
      "Ficam mais rápidos e menores.",
      "Ficam mais lentos e maiores.",
      "Nunca mudam.",
      "A bateria deles passa a durar para sempre."
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "Para que serve um endereço como www.google.com.br?",
    opcoes: [
      "Para deixar a internet mais veloz.",
      "Para ser um nome fácil de achar um site.",
      "Para proteger o computador de vírus.",
      "Para criar uma conta de e-mail."
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "Assistentes de voz como a Alexa e a Siri são um tipo de quê?",
    opcoes: [
      "Inteligência Artificial que ajuda em tarefas.",
      "Um novo tipo de celular.",
      "Um programa que só serve para ouvir música.",
      "Uma pessoa de verdade falando do outro lado da linha."
    ],
    respostaCorreta: 0,
  },
  {
    pergunta: "O que é um e-mail de 'phishing'?",
    opcoes: [
      "Uma mensagem com um vírus que quebra o computador.",
      "Um convite para um evento online.",
      "Um e-mail falso que tenta roubar sua senha.",
      "Uma propaganda sobre pescaria."
    ],
    respostaCorreta: 2,
  },
];

// Embaralhar:
const perguntasAleatorias = perguntas.sort(() => Math.random() - 0.5);
export {perguntasAleatorias}