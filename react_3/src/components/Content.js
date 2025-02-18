import React from 'react';
import Count from './Count';

function Content() {
  // Об'єкт з двома полями: title та describe
  const contentData = { title: "Заголовок Content", 
    describe: "Це опис контенту, який відображається за допомогою інтерполяції." 
  };

  return (
    <div className="content-component">
      <h1>{contentData.title}</h1>
      <p>{contentData.describe}</p>
      {/* Виклик компоненти Count */}
      <Count />
    </div>
  );
}

export default Content;
