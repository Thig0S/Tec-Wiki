import Perguntas from './Perguntas.jsx';
import { perguntasAleatorias } from './Perguntas.js';
import Add from '../Adds/Add.jsx'
function App() {
  return (
    <div className='divPerguntas'>
      <div className="containerAsPerguntas">
      <h1 className="TituloQuiz">Quiz de Tecnologia</h1>
      <Perguntas dados={perguntasAleatorias} />
      </div>
      <Add></Add>
    </div>
  );
}

export default App;
