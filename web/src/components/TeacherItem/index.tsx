import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem (){
  return(
      <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/60985185?s=460&u=389f6878e2b972d3f66348a698c7ecfbbb245582&v=4" alt="William"/>
        <div>
          <strong>William Ribeiro</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /><br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type ="button">
          <img src={whatsappIcon} alt="Whasapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem