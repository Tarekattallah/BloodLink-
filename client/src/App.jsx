import { Route, Routes } from "react-router-dom";
import CreateNewDonorAccount from "./CreateNewDonorAccount";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Donor from "./pages/Donor";
import Contact from "./pages/Contact";



function App () {

  return (
    <>
      <Routes>
        <Route path="/" element={ <CreateNewDonorAccount /> } />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={ <Terms/> } />
        <Route path="/donor" element={ <Donor /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </>
  );
}

export default App;
