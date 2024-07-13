import logo from './logo.svg';
import './App.css';
import AppSub from './component/AppSub';
import DltSub from './component/DltSub';
import SearchSub from'./component/SearchSub';
import ViewSub from'./component/ViewSub';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppSub/>}/>
        <Route path='/viewsub' element={<ViewSub/>}/>
        <Route path='/searchsub' element={<SearchSub/>}/>
        <Route path='/deletesub' element={<DltSub/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
