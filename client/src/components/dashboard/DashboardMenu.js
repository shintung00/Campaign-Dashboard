import React, { useState } from 'react';
import { ListGroup, Button, ListGroupItem } from 'react-bootstrap';
import OpenCampaignsTable from './OpenCampaignsTable';
import SentCampaignsTable from './SentCampaignsTable';
import sampleCampaign from '../../sampleCampaign';
import Pagination from './Pagination';

function DashboardMenu() {
  const [campaigns, setCampaigns] = useState(sampleCampaign);
  const [previewCampaign, setPreviewCampaign] = useState(null);
  const [editCampaign, setEditCampaign] = useState(null);
  //Starts CampaignsTable off at 1st page
  const [currentPage, setCurrentPage] = useState(1);
  //This determines how many Campaigns each page will display
  const [campaignsPerPage] = useState(5);

  const deleteCampaign = (key) => {
    const newCampaigns = campaigns.reduce((acc, cv) => {
      if (cv.id !== key) {
        acc.push(cv);
      }
      return acc;
    }, []);
    setCampaigns(newCampaigns);
  }

  const openCampaign = (name) => {
    setPreviewCampaign(campaigns[name]);
  }

  const closeCampaign = () => {
    setPreviewCampaign(null);
  }

  const paginate = pageNumber => setCurrentPage(pageNumber);

  //Used in figuring out which of the campaigns need to be displayed
  const indexOfLastCampaign = currentPage * campaignsPerPage;
  const indexOfFirstCampaign = indexOfLastCampaign - campaignsPerPage;
  const currentCampaigns = campaigns.slice(indexOfFirstCampaign, indexOfLastCampaign);


  return (
    <div className="dashboard-container">
      <ListGroup>
        <ListGroup.Item className="campaign-dashboard-header">
          <span>Campaigns {previewCampaign ? "> Preview" + {previewCampaign} : ''}</span>
          <Button variant="info">Create Campaign</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <OpenCampaignsTable deleteCampaign={deleteCampaign} campaigns={currentCampaigns}/>
          <Pagination
            campaignsPerPage={campaignsPerPage}
            totalCampaigns={campaigns.length}
            paginate={paginate}
          />
        </ListGroup.Item>
        <ListGroupItem>
          <SentCampaignsTable />
        </ListGroupItem>
      </ListGroup>    
    </div>
  )
}

export default DashboardMenu
