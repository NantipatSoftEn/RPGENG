import React from 'react';
import TextBox from '../components/TextBox';
const Dashboard = () => {
    return(
      <div>
        <form>
        <h1>INSERT</h1>
          <TextBox />
        </form>
        <form>
        <h1>SEARCH</h1>
          <TextBox/>
        </form>
      </div>
    )
};

export default Dashboard;
