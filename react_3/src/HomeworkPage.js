import React from 'react';
import './HomeworkPage.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function HomeworkPage() {
  // Створюємо 3 об'єкти з довільною інформацією
  const headerData = { title: "Заголовок Header", description: "Це компонент Header" };
  const footerData = { title: "Заголовок Footer", description: "Це компонент Footer" };
  const sidebarData = { title: "Заголовок Sidebar", description: "Це компонент Sidebar" };

  return (
    <div className="homework-page">
      <div className="header">
        <Header data={headerData} />
      </div>
      <div className="sidebar">
        <Sidebar data={sidebarData} />
      </div>
      <div className="content">
        <Content />
      </div>
      <div className="footer">
        <Footer data={footerData} />
      </div>
    </div>
  );
}

export default HomeworkPage;
