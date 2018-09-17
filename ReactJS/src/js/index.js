//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

import Counter from './component/home.jsx';

let sec = 0;

//render your react application
let timer = setInterval(() => {
                if(sec >= 999999) {
                    clearInterval(timer);
                }
                ReactDOM.render(<Counter seconds={sec}/>,document.querySelector('#app'));
                sec++;
            }, 1000);