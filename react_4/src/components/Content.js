import React, { Component } from 'react';
import Count from './Count';
import MyEvents from './MyEvents';

class Content extends Component {
  render() {
    const contentData = { title: "Заголовок Content", describe: "Це опис контенту." };
    return (
      <div className="content-component">
        <h1>{contentData.title}</h1>
        <p>{contentData.describe}</p>
        <Count />
        <MyEvents />
      </div>
    );
  }
}

export default Content;