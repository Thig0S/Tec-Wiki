import "./MainPage.css"
import Tec from "../assets/tecnologia.png"
import Button from "./Button";

const MainPage = () =>{
    return(
        <>
            <div className="containerHome">
                <h2>TecQuiz - Tecnologias Atuais</h2>
                <div className="linha" style={{ width: '300px', height: '3px', backgroundColor: 'blue', marginBottom:'10px' }}></div>
                
                <img id="img" src={Tec} alt="" />
                <p>Voce sabe o quanto a tecnologia avancou nos últimos anos?</p>
                <Button msg="Inicar Quiz"></Button>
            </div>
        </>
    );
}
export default MainPage