import React, {Fragment} from 'react';
import Header from './layout/Header';
import SideNav from './layout/SideNav';
import DashboardMenu from './dashboard/DashboardMenu';

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="app-body">
        <SideNav />
        <DashboardMenu />
      </div>
    </Fragment>
  )
}

export default App;