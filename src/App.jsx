import "./index.css"
import Header from "./Header/Header"
import MainPage from "./MainPage/MainPage.jsx";
import Add from "./Adds/Add.jsx";
import Footer from "./Footer/Footer.jsx";
import PerguntasPage from "./MainPage/PerguntasPage.jsx";

function App() {

  return (
    <>
      <Header></Header>
      <div className="containerPrincipal">
          <MainPage/>
          <Add/>  
      </div>
          <PerguntasPage></PerguntasPage>
      <Footer/>
    </> 
  )
}

export default App
