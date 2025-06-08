import "./MainPage.css"
import Tec from "../assets/tecnologia.png"
const MainPage = () =>{
    return(
        <>
            <div className="containerHome">
                <h2>TecQuiz - Tecnologias Atuais</h2>
                <div className="linha" style={{ width: '300px', height: '3px', backgroundColor: 'blue', marginBottom:'10px' }}></div>
                
                <img id="img" src={Tec} alt="" />
                <p>Voce sabe o quanto a tecnologia avancou nos últimos anos?</p>
                <button>Iniciar o Quiz</button>
            </div>
        </>
    );
}
export default MainPage