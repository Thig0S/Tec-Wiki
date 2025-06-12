import "./Header.css"
import { useNavigate } from "react-router-dom";

const Header = () =>{
    const navegate = useNavigate();
    const irParaHome = () =>{
        navegate("/")
    }  
    return(
        <>
            <header>
                <h2>TecQuiz💻</h2>
                <nav>
                    <a onClick={irParaHome} style={{ cursor: "pointer" }}>Home</a>
                    <a href="">Sobre Nós</a>
                    <a href="">Contato</a>
                </nav>
            </header>
        </>
    )
}
export default Header;