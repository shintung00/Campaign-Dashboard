import React, { useState, Fragment } from 'react';
import OpenCampaignsTable from './OpenCampaignsTable';
import SentCampaignsTable from './SentCampaignsTable';
import sampleCampaign from '../../sampleCampaign';
import Pagination from './Pagination';
import CampaignPreview from '../campaign/CampaignPreview';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


function DashboardMenu() {
  //Instantiate sample campaigns
  const [campaigns, setCampaigns] = useState(sampleCampaign);
  //Campaign currently focused on
  const [currentCampaign, setCurrentCampaign] = useState(null);
  //Starts CampaignsTable off at 1st page
  const [currentPage, setCurrentPage] = useState(1);
  //This determines how many Campaigns each page will display
  const [campaignsPerPage] = useState(5);

  const [editCampaign, setEditCampaign] = useState(null);


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

  const paginate = pageNumber => setCurrentPage(pageNumber);

  //Used in figuring out which of the campaigns need to be displayed
  const indexOfLastCampaign = currentPage * campaignsPerPage;
  const indexOfFirstCampaign = indexOfLastCampaign - campaignsPerPage;
  const currentCampaigns = campaigns.slice(indexOfFirstCampaign, indexOfLastCampaign);


  return (
    <Router>
      <Fragment>
        <div className="dashboard-container">
          <ListGroup>
            <ListGroup.Item className="campaign-dashboard-header">
              <span>Campaigns</span>
              {/* {previewCampaign && editCampaign ? null : <Link to='/newcampaign' className='btn btn-info'>Create Campaign</Link>} */}
            </ListGroup.Item>
              <Switch>
                <Route exact path='/' render={() => (
                  <Fragment>
                    <ListGroup.Item>
                      <OpenCampaignsTable 
                        openPreview={openPreview} 
                        deleteCampaign={deleteCampaign} 
                        campaigns={currentCampaigns}/>
                      <Pagination
                        campaignsPerPage={campaignsPerPage}
                        totalCampaigns={campaigns.length}
                        paginate={paginate}
                        currentPage={currentPage}
                      />
                    </ListGroup.Item>
                    <ListGroupItem>
                      <SentCampaignsTable />
                    </ListGroupItem>
                  </Fragment>
                )} /> 
                <Route exact path='/campaign' render={() => (
                  <CampaignPreview campaign={currentCampaign}/>
                )} />
              </Switch>
            
          </ListGroup>    
        </div>
      </Fragment>
    </Router>
  )
}

export default DashboardMenu
