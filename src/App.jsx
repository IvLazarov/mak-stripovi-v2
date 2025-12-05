import { Routes, Route, BrowserRouter } from 'react-router';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Members from './Components/Members/Members';
import School from './Components/School/School';
import StripTrip from './Components/StripTrip/StripTrip';
import SingleMember from './Components/SingleMember/SingleMember';
import Events from './Components/Events/Events';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import News from './Components/News/News';
import DummyArticle from './Components/DummyArticle/DummyArticle';
import './App.css'

function App() {
  

  return (
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/членови' element={<Members />} />
        <Route path='/членови/:id' element={<SingleMember />} />
        <Route path='/како-збиднавме' element={<About/>} />
        <Route path='/Стрип-Трип' element={<StripTrip />} />
        <Route path='/стрип-школа' element={<School />} />
        <Route path='/настани' element={<Events />} />
        <Route path='/вести' element={<News/>} />
        <Route path='/вести/вест-1' element={<DummyArticle />} />
      </Routes>
      </BrowserRouter>
      
     
      
      
        
      
  )
}

export default App

//Белешки:

// resursite od ona shto go imash na desktop vo folderot Makstripovi_website
//vidi dali sliki so PSD (Photoshop) kje gi otvora na sajtot - NE
// za dizajn kombiniraj od Dargaud i od inspiracija za dizajn za sajtot
// info za zdruzhenieto, priberi se doma za kopche, nikulec namesto za nas
// semka shto raste vo steblo, takva animacija nekakva na onie sajtovine za ikonki
// riznica za neobjaveni dela, toj moment nekako sklopi go
// chlenovite na zdruzhenieto so nacrtani slikici, pa
// ko kje kliknesh realna slika od niv i ninvite dela
//loading Се вчитува ili neshto drugo
// slika kako dzudzinja se chudat za kopcheto za riznica,
// i nekoj tekst: Фрли поглед во ризница, ако имаш муда
