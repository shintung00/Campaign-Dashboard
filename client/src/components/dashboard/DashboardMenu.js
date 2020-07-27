import React, { useState, useEffect, Fragment } from 'react';
import CampaignsTable from './CampaignsTable';
import sampleCampaign from '../../sampleCampaign';
import sampleSegment from '../../sampleSegment';
import CampaignPreview from '../campaign/CampaignPreview';
import CampaignEdit from '../campaign/CampaignEdit';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

function DashboardMenu() {
  //Instantiate sample segments
  const [segments] = useState(sampleSegment);
  //Instantiate sample campaigns
  const [campaigns, setCampaigns] = useState([]);
  //Campaign currently focused on
  const [currentCampaign, setCurrentCampaign] = useState(null);


  useEffect(() => setCampaigns(sampleCampaign), []);

  const deleteCampaign = (id) => {
    const newCampaigns = campaigns.reduce((acc, cv) => {
      if (cv.id !== id) {
        acc.push(cv);
      }
      return acc;
    }, []);
    setCampaigns(newCampaigns);
  };

  const openPreview = (id) => {
    campaigns.forEach(campaign => {
      if (campaign.id === id) {
        setCurrentCampaign(campaign);
      }
    })
  }; 

  const updateCampaign = (updatedCampaign) => {
    let updatedCampaigns = [];
    campaigns.forEach((campaign) => {
      if (campaign.id !== updatedCampaign.id) {
        updatedCampaigns.push(campaign);
      } else {
        updatedCampaigns.push(updatedCampaign);
      }
    })
    setCampaigns(updatedCampaigns);
  }

  const createCampaign = () => {
    let newIndex = 0;
    campaigns.forEach((campaign) => {
      if (campaign.id > newIndex) {
        newIndex = campaign + 1;
      }
    })
    let newCampaign = {
      "id": newIndex,
      "name": "",
      "text": "Hey {first_name}! This is a sample message from {shop_name}",
      "status": "Preview",
      "segment_id": 0,
      "media": "",
      "stats": null
    }
    campaigns.unshift(newCampaign);
    setCampaigns(campaigns);
    setCurrentCampaign(newCampaign);
  } 
  
  return (
    <Router>
      <Fragment>
        <div className="dashboard-container">
          <ListGroup>
            <ListGroup.Item className="campaign-dashboard-header">
              {currentCampaign ? <div><Link to='/' onClick={()=>setCurrentCampaign(null)}>Campaigns</Link><span> {'> Preview ' + currentCampaign.name}</span></div> : <Fragment><span>Campaigns</span>
              <Link to='/newcampaign' className='btn btn-info' onClick={createCampaign}>Create Campaign</Link></Fragment>}
            </ListGroup.Item>
              <Switch>
                <Route exact path='/' render={() => (
                  <Fragment>
                    <ListGroup.Item>
                      <CampaignsTable 
                        openPreview={openPreview} 
                        deleteCampaign={deleteCampaign} 
                        campaigns={campaigns}
                        option='preview'/> 
                    </ListGroup.Item>
                    <ListGroupItem>
                    <CampaignsTable 
                        openPreview={openPreview} 
                        deleteCampaign={deleteCampaign} 
                        campaigns={campaigns}
                        option='sent'/> 
                    </ListGroupItem>
                  </Fragment>
                )} /> 
                <Route exact path='/campaign' render={() => (
                  <CampaignPreview campaign={currentCampaign} segments={segments}/>
                )} />
                <Route exact path='/editcampaign' render={() => (
                  <CampaignEdit campaign={currentCampaign} updateCampaign={updateCampaign} segments={segments} />
                )} />
                <Route exact path='/newcampaign' render={() => (
                  <CampaignEdit campaign={campaigns[0]} updateCampaign={updateCampaign} segments={segments} />
                )} />
              </Switch>
            
          </ListGroup>    
        </div>
      </Fragment>
    </Router>
  )
}

export default DashboardMenu;