import React, { Component } from 'react';

class MyEvents extends Component {
  handleClick = () => alert('Click event!');
  handleMouseDown = () => console.log('Mouse Down');
  handleMouseUp = () => console.log('Mouse Up');
  handleMouseMove = () => console.log('Mouse Move');
  handleCut = () => alert('Cut event!');
  handleCopy = () => alert('Copy event!');
  handleMouseWheel = () => console.log('Mouse Wheel');

  render() {
    return (
      <div className="my-events" 
           onClick={this.handleClick}
           onMouseDown={this.handleMouseDown}
           onMouseUp={this.handleMouseUp}
           onMouseMove={this.handleMouseMove}
           onCut={this.handleCut}
           onCopy={this.handleCopy}
           onWheel={this.handleMouseWheel}>
        <p>Взаємодійте з цим текстом, щоб побачити події в консолі.</p>
      </div>
    );
  }
}

export default MyEvents;