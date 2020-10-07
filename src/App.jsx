import React from 'react';
import Button from './components/Button/Button.jsx';
import MainContainer from './containers/MainContainer/MainContainer.jsx';

function App(props) {
  function alertTeste() {
    alert('teste');
  }

  return (
    <MainContainer />
  );
}

export default App;
