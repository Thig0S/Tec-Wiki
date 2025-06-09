import Perguntas from './Perguntas.jsx';
import { perguntasAleatorias } from './Perguntas.js';

function App() {
  return (
    <div>
      <h1 className="TituloQuiz">Quiz de Tecnologia</h1>
      <Perguntas dados={perguntasAleatorias} />
    </div>
  );
}

export default App;
