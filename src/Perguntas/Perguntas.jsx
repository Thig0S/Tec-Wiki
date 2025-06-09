import React, { useState } from 'react';

import"./ComponentesPerguntas.css"
import Button from '../MainPage/Button';

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

    alert(`Você acertou ${acertos} de ${dados.length} perguntas!`);
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
              <li key={i} className="flex items-center space-x-2">
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
