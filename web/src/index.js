import React from 'react'; // necessário a importação sempre que o arquivo utilizar js + html
import ReactDOM from 'react-dom'; //possibilita a comunicação do react com o html (no caso de projeto web)
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));