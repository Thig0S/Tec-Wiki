import "./MainPage.css"
import Tec from "../assets/tecnologia.png"
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const MainPage = () =>{

    const navegate = useNavigate();
    const irParaPerguntas = () =>{
        navegate("/perguntas")
    }    
    return(
        <>
            <div className="containerHome">
                <div className="divIsso">
                <h2>TecQuiz - Tecnologias Atuais</h2>
                <div className="linha" style={{ width: '300px', height: '3px', backgroundColor: 'blue', marginBottom:'10px' }}></div>
                
                <img id="img" src={Tec} alt="" />
                <p>Voce sabe o quanto a tecnologia avancou nos últimos anos?</p>
                <button onClick={irParaPerguntas}>Iniciar Quiz</button>
                </div>
            </div>
        </>
    );
}
export default MainPage