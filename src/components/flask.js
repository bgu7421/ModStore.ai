import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    // Flask 백엔드의 API 엔드포인트로 GET 요청을 보냅니다.
    axios.get('http://localhost:5001/api/data')  // Flask 앱의 포트와 엔드포인트를 변경하세요.
      .then(response => {
        console.log(response.data); // 백엔드에서 받은 데이터 출력
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>React Frontend</h1>
      </div>
    );
  }
}


export default App;