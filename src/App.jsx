import "./index.css"
import Header from "./Header/Header"
import MainPage from "./MainPage/MainPage.jsx";
import Add from "./Adds/Add.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {

  return (
    <>
      <Header></Header>
      <div className="containerPrincipal">
          <MainPage/>
          <Add/>
      </div>
      <Footer/>
    </> 
  )
}

export default App
