const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Um tipo de café", 
            "Uma linguagem de programação",
            "Um animal de estimação",
        ],
        correta: 1
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar variáveis em JavaScript?",
        respostas: [
            "variable", 
            "declare",
            "var",
        ],
        correta: 2
    },
    {
        pergunta: "O que é um alert em JavaScript?",
        respostas: [
            "Um aviso de tempestade", 
            "Uma caixa de diálogo que exibe uma mensagem ao usuário",
            "Um comando para parar a execução do código",
        ],
        correta: 1
    },
    {
        pergunta: "O que significa HTML em JavaScript?",
        respostas: [
            "Hypertext Markup Language", 
            "Hyper Training Machine Learning",
            "High Tech Magic Language",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '+' em JavaScript?",
        respostas: [
            "Concatenar strings", 
            "Adição de números",
            "Subtração de números",
        ],
        correta: 1
    },
    {
        pergunta: "O que é um comentário em JavaScript?",
        respostas: [
            "Um elogio ao código", 
            "Um trecho de código que é ignorado durante a execução",
            "Uma mensagem para o usuário",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
        respostas: [
            "for (i <= 5; i++)", 
            "for (i = 0; i < 5; i++)",
            "loop for (i = 0; i < 5)",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um bloco de código para criar confusão", 
            "Um conjunto de instruções que realiza uma tarefa específica",
            "Uma declaração de variável",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a forma correta de comentar uma única linha em JavaScript?",
        respostas: [
            "// Este é um comentário", 
            "<!-- Este é um comentário -->",
            "/* Este é um comentário */",
        ],
        correta: 0
    },
    {
        pergunta: "O que é um array em JavaScript?",
        respostas: [
            "Um tipo de pão", 
            "Um objeto que armazena uma coleção de elementos",
            "Uma função especial",
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}


