import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import PostscriptContext from '../context/postscript/postscriptContext';


function DashboardHeader() {
  const postscriptContext = useContext(PostscriptContext);
  const { currentCampaign, closeCampaign, createCampaign } = postscriptContext;

  return (
    <div>
      {currentCampaign ? <div><Link to='/' onClick={closeCampaign}>Campaigns</Link><span> {'> Preview ' + currentCampaign.name}</span></div> : <Fragment><span>Campaigns</span><Link to='/editcampaign' className='btn btn-info' onClick={createCampaign}>Create Campaign</Link></Fragment>}
    </div>
  )
}

export default DashboardHeader
