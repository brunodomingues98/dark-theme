import React, { useState, useEffect } from 'react';
import './Board.css';

export default function Board() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <>
      <input id="btn" type="button" onClick={toggleTheme} />
      <label htmlFor="btn" className="mudar-tema"></label>

      <section className="container">
        <h1>Escolha o tema de sua preferência:</h1>
        <div className="tema"></div>
        <p>
          Os lobos são animais extremamente sociais e vivem em grupos chamados alcateias. Eles se comunicam por uivos, 
          expressões faciais e linguagem corporal. Podem percorrer até 20 km por dia em busca de alimento. Têm um olfato muito apurado, 
          cerca de 100 vezes melhor que o dos humanos. Apesar da fama de ferozes, são cautelosos e evitam contato com pessoas.
        </p>   
      </section>
    </>
  );
}
