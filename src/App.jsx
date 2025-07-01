import { Route,BrowserRouter as Router,Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionPage from "./pages/AdmissionPage";
import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import ContactUs from "./pages/ContactUs";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
// import ContactUs from "./pages/ContactUs";
const App = () =>{
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Apoorva Guruprasad Kumbhar"
          studentPhotoUrl="/image/apoorva.jpg"// Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/admission" element={<AdmissionPage/>}/> 
        {/* {/* <Route path="/" element={<NotFoundPage/>}/> */}
      </Routes>
          <ChatbotComponent/>

    </Router>
    </>
  )
}

export default App;