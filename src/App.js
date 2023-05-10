import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './pages/Landing';
import Summary from './pages/Summary';
import Book from './pages/Book';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path="/summary/:id" element={<Summary/>} />
        <Route path="/book/:id" element={<Book/>} />

      </Routes>
    </Router>
  );
}

export default App;
