import { Route, Routes } from 'react-router-dom';
import { Home, About, SinglePost, Projects, Posts} from './components';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/post/:id' element={<SinglePost/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </>
  )
}

export default App;
