import { BrowserRouter , Routes, Route } from 'react-router-dom';
import MovieContextProvider from './MovieContext';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';


function App() {
  return (
    <BrowserRouter>
     <MovieContextProvider>
      <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/movie/:id" element={<MovieDetail />}/>
        </Routes>
     </MovieContextProvider>
    </BrowserRouter>
    
  );
}

export default App;
