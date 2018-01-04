import React from 'react';
import { Image } from 'semantic-ui-react';
import './home.css';
const Home = () => (
  <div>
    <center>
      <Image className='ui fluid image' src='http://localhost:3000/logho.jpg' />
      <div className="ui inverted segment">
        <div className="ui yellow inverted statistic">
          <div className="label">
          ＲＯＡＤ    ＴＯ    Ｌｖ．９９    ＧａｍｅＳｔａｒｔ  ！！
          </div>
        </div>
      </div>
    </center>
  </div>
);

export default Home;
