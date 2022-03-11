import './App.css';
import { Routes , Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Post } from './components/Post'
import { Posts } from './components/Posts'

import Navbar from './components/common/Navbar';

function App() {
  return (
    <><div className="App">
      <header>
        <div className='container mx-auto'>
          <Navbar></Navbar>
        </div>
      </header>


      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='post' element={<Post />}></Route>
      <Route path='post/:id' element={<Posts />}></Route>
      </Routes>

    </div>
    </>
  );
}


export default App;
