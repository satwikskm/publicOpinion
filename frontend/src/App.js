import Dashboard from './components/dashboard/dashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';

import './App.css';

function App() {
  return (
    <div className="App">
     <h1 className="header">Public Opinion</h1>
     <BrowserRouter>
        <Routes>
            <Route path='dashboard' element={<Dashboard />}/>
            <Route path='/' element={<Home />}/>
        </Routes>
     </BrowserRouter>
     
   
    </div>
  );
}

export default App;
