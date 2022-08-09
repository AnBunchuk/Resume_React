import React from 'react';
import ReactDOM from 'react-dom/client';

export function InfoBlock() {
  return (
    <section>
      <div className="foto"></div>
      <h1>Ф.И.О.<span>Бунчук Андрей Викторович</span></h1>
      <h3>Возраст:  <span>{посчитать}</span></h3>
      <h3>Телефон: <span>+380501928871</span></h3>
      <h3>Образование: <span>Киевский Институт Управления и Связи</span></h3>
      <h3>Место проживания: <span>г. Запорожье</span></h3>
      <h3>Навыки: <span>{список}</span></h3>

    </section>
  );
}