import{ BrowserRouter,Routes,Route} from'react-router-dom'

import Footer from "./src/componens/Footer"
import NavBar from "./src/components/NavBar";
import Header from "./src/components/Header";
import Index from "./src/pages/index";




function Master(){
    return(
        <BrowserRouter>
        <NavBar/>
        <Header/>
        
        
        
        
        </BrowserRouter>
    )

}

export default Master;