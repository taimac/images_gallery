import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const App = () => {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => { // This is utilized for sending API requests.
    e.preventDefault();
    console.log(word);
  };

  return (
    <div>
      <Header title='Images Gallery'></Header>
      <Search
        word={word}
        setWord={setWord}
        handleSubmit={handleSearchSubmit}
      ></Search>
    </div>
  );
};

export default App;
