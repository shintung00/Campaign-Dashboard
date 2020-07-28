import React, { Fragment } from 'react';
import CampaignsTable from './CampaignsTable';
import DashboardHeader from './DashboardHeader';
import CampaignPreview from '../campaign/CampaignPreview';
import CampaignEdit from '../campaign/CampaignEdit';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PostscriptState from '../context/postscript/PostscriptState';


function DashboardMenu() {
  return (
    <PostscriptState>
      <Router>
        <Fragment>
          <div className="dashboard-container">
            <ListGroup>
              <ListGroup.Item className="campaign-dashboard-header">
                <DashboardHeader />
              </ListGroup.Item>
                <Switch>
                  <Route exact path='/' render={() => (
                    <Fragment>
                      <ListGroup.Item>
                        <CampaignsTable option='preview'/> 
                      </ListGroup.Item>
                      <ListGroupItem>
                      <CampaignsTable option='sent'/> 
                      </ListGroupItem>
                    </Fragment>
                  )} /> 
                  <Route exact path='/campaign' render={() => (
                    <CampaignPreview />
                  )} />
                  <Route exact path='/editcampaign' render={() => (
                    <CampaignEdit />
                  )} />
                  {/* <Route exact path='/campaign' render={() => (
                    <CampaignEdit />
                  )} /> */}
                </Switch>
            </ListGroup>    
          </div>
        </Fragment>
      </Router>
    </PostscriptState>
  )
}

export default DashboardMenu;