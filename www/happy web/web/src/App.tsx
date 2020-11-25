import React from 'react';
import './styles/global.css';
import './styles/pages/landing.css';
import  logoImg from './images/Logo.svg';

//"jsx": "preserve"
// JSX - JavaScript XML  Incluir html dentro de um javascript 

function App() {
  return (
    <div id="page-landing">
       <div className="content-wrapper">
          <img src = {logoImg} alt="Happy"/>
       </div>
          <main> 
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>
    </div>
  );
}

export default App;
