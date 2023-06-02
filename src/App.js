import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NoPage } from './pages/NoPage';
import ThirdCompEle from './Components/ThirdCompEle';
import { FourCompEle } from './Components/FourCompEle';

function App() {
  return (
    <>

      {/* using react router dom to create routes  */}
      <BrowserRouter>
          <Routes>
              <Route index element={<ThirdCompEle/>}/>
              <Route path='/home' element={<ThirdCompEle/>}/>
              <Route path='/ele' element={<Home/>}/>
              <Route path='/buy' element={<FourCompEle/>}/>
              <Route path='*' element={<NoPage/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
