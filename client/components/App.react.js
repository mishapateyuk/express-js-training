import React from 'react';

class App extends React.Component {

  submitHandler(e) {
    e.preventDefault();
    const xhr = new  XMLHttpRequest();
    xhr.open('POST', '/api/text', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send('{"sadfsadfasdf": 123}');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      //DO SMT;
    };
  };

  render() {
    return (
      <div>
        <input type="text" ref={(input) => this.textInput = input}/>
        <input type="submit" onClick={this.submitHandler.bind(this)}/>
        <input type="submit" onClick={this.submitHandler2.bind(this)}/>
        <input type="submit" onClick={this.submitHandler3.bind(this)}/>
      </div>
    );
  };
};

export default App;
