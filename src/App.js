import logo from './logo.svg';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPageContainer from './Body/MainPageContainer/MainPageContainer';
import DetailsPost from './DetailsPost/DetailsPost';
import './App.css';

function App() {
  return (<>
    <Routes>
      <Route 
        path={`/post/:id`} 
        element={<DetailsPost />} 
      />
      <Route 
        path='/main' 
        element={<MainPageContainer />} 
      />
      <Route 
        path='/' 
        element={<Navigate replace to="/main" />} 
      />
    </Routes>
    </>);
}

export default App;
