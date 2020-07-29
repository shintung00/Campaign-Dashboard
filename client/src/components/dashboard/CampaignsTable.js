import React, { useContext } from 'react'
import TableEntry from './TableEntry';
import PostscriptContext from '../context/postscript/postscriptContext';
import PropTypes from 'prop-types';

function CampaignsTable({ option }) {
  const postscriptContext = useContext(PostscriptContext);
  const { deleteCampaign, openPreview, campaigns } = postscriptContext;

  const filteredCampaigns = campaigns.reduce((acc, cv) => {
    if (cv.status === 'Preview') {
      acc['preview'].push(cv);
    } else if (cv.status === 'Sent') {
      acc['sent'].push(cv);
    }
    return acc;
  }, {'preview': [], 'sent': []});

  const preview = filteredCampaigns.preview;
  const sent = filteredCampaigns.sent;  
  
  return (
    <div className="d-flex flex-column sent-campaign-container">
      <h4 className="align-self-start">{option === 'preview' ? 'Open Campaigns' : 'Sent Campaigns'}</h4>
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="table-first">Campaign</th>
              <th className="table-second">Status</th>
              <th className="table-third">Action</th>
            </tr>
          </thead>
          <tbody>
            {option === 'preview' ? preview.map(campaign => 
            <TableEntry
              className="campaign-table-entry"
              key={campaign.id} 
              campaign={campaign} 
              deleteCampaign={deleteCampaign} 
              openPreview={openPreview} 
            />) : sent.map(campaign => 
            <TableEntry 
              className="campaign-table-entry"
              key={campaign.id} 
              campaign={campaign} 
              deleteCampaign={deleteCampaign} 
              openPreview={openPreview} 
            />)}
          </tbody>
        </table>
      </div>
    </div>
  )
};

CampaignsTable.propTypes = {
  option: PropTypes.string.isRequired
};

CampaignsTable.contextTypes = {
  campaigns: PropTypes.array,
  deleteCampaign: PropTypes.func,
  openPreview: PropTypes.func
}

export default CampaignsTable;
