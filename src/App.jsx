import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header.jsx";
import { Header1 } from "./components/header/Header.jsx";
import {Prodmoskve} from "./components/Car sales in Moscow/prodmoskve.jsx"
import {Zayfka} from "./components/one-click application/zayfka.jsx"
import {Spetspred} from "./components/Special offers/Spetspred.jsx"
import {Premvo} from "./components/The advantage of contacting us/Premvo.jsx"
import {Threfoto} from "./components/Advertisement/threfoto.jsx"
import {Luchshiy} from "./components/The best car purchase deals/luchshiy.jsx"
import { Kredit } from "./components/Credit Calculator/kredit.jsx";
import {Uslov} from "./components/Loan terms and conditions/uslov.jsx";
import{Nashi} from "./components/Our partners/nashi.jsx"
import {Novosti} from "./components/News/novosti.jsx"
import {Ostalis} from "./components/Any other questions/Ostalis.jsx"
import {Avtod}  from "./components/Map/Avtod.jsx"
import{Footer} from "./components/footer/footer.jsx"
import {FooterM} from "./components/footer/footer.jsx"
import {Contact} from "./components/contact/contact.jsx"
import { AboutPage } from "./components/AboutPage/AboutPage.jsx";
import { Services } from "./components/Services/services.jsx";
import { AutoCredit } from "./components/AutoCredit/AutoCredit.jsx";
import { TaxiCredit } from "./components/TaxiCredit/TaxiCredit.jsx";
import {MileagePage} from "./components/Mileage/mileage.jsx"
import { Newcar } from "./components/NewСars/newcar.jsx";

function App() {
 



  return (
    <Router>
      <Routes>
       
        <Route
          path="/"
          element={
    <>
      <Header />
      <Header1/>
      <Prodmoskve />
      <Zayfka/>
      <Spetspred />
      <Premvo />
      <Threfoto/>
      <Luchshiy/>
      <Kredit/>
      <Uslov/>
      <Nashi/>
      <Novosti/>
      <Ostalis/>
      <Avtod/>
      <Footer/>
      <FooterM/>
    </>
      }
      />

      
      <Route path="/contact" element={<Contact />} />
      <Route path="/aboutpage" element={<AboutPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/autocredit" element={<AutoCredit />} />
      <Route path="/taxicredit" element={<TaxiCredit />} />
      <Route path="/mileagePage" element={<MileagePage />} />
      <Route path="/newcar" element={<Newcar />} />
    </Routes>
  </Router>
  );
}

export default App;
