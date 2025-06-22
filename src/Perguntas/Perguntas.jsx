import React, { useState } from 'react';

import"./ComponentesPerguntas.css"
import Swal from 'sweetalert2';

function Perguntas({ dados }) {
  const [respostas, setRespostas] = useState({});

  const handleChange = (perguntaIndex, opcaoIndex) => {
    setRespostas({
      ...respostas,
      [perguntaIndex]: opcaoIndex,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Respostas enviadas:", respostas);

    // Exemplo: calcular total de acertos
    let acertos = 0;
    dados.forEach((item, index) => {
      if (respostas[index] === item.respostaCorreta) {
        acertos++;
      }
    });
if (acertos === 0) {
  Swal.fire({
    title: "Você é um homem das cavernas! 🦴",
    text: "Nenhuma resposta correta, bora estudar! 😅",
    imageUrl: "/public/pre-historia.jpg",
    imageWidth: 300,
    imageHeight: 300,
    confirmButtonText: "Tentar de novo",
    customClass: {
    confirmButton: 'botaoSweet',
  }
  });
} 
else if (acertos >= 1 && acertos < 6) {
  Swal.fire({
    title: "Você é uma pessoa normal 🧍",
    text: `Você acertou ${acertos} perguntas!`,
    imageUrl: "/public/pessoanormal.jpg",
    imageWidth: 300,
    imageHeight: 300,
    confirmButtonText: "Melhorar",
    customClass: {
    confirmButton: 'botaoSweet',
  }
  });
} 
else if (acertos >= 1 && acertos < 9) {
  Swal.fire({
    title: "Quase um gênio 🤓",
    text: `Você acertou ${acertos} perguntas!`,
    imageUrl: "/public/nerd.png",
    imageWidth: 300,
    imageHeight: 300,
    confirmButtonText: "Boa!",
    customClass: {
    confirmButton: 'botaoSweet',
  }
  });
} 
else {
  Swal.fire({
    title: "Você é o ChatGPT! 🧠💻",
    text: `Acertou ${acertos} perguntas, parabéns!`,
    imageUrl: "/public/goats.png",
    imageWidth: 200,
    imageHeight: 200,
    confirmButtonText: "Sou brabo 😎",
    customClass: {
    confirmButton: 'botaoSweet',
  }
  });
}
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      {dados.map((item, index) => (
        <div key={index} className="containerPergunta">
          <h2 className="titulo">
            {index + 1}. {item.pergunta}
          </h2>
          <ul className="listaPerguntas">
            {item.opcoes.map((opcao, i) => (
              <li key={i} className="linhaPerguntas">
                <input
                  type="radio"
                  name={`pergunta-${index}`}
                  value={i}
                  checked={respostas[index] === i}
                  onChange={() => handleChange(index, i)}
                />
                <label>
                  {String.fromCharCode(65 + i)}) {opcao}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <button>Enviar Respostas</button>
    </form>
  );
}

export default Perguntas;
