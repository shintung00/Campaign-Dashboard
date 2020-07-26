import React from 'react'
import TableEntry from './TableEntry';


function OpenCampaignsTable(props) {
  const { deleteCampaign, campaigns, openPreview } = props;
  
  return (
    <div className="d-flex flex-column sent-campaign-container">
      <h4 className="align-self-start">Open Campaigns</h4>
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
            {campaigns.map(campaign => <TableEntry key={campaign.id} campaign={campaign} deleteCampaign={deleteCampaign} openPreview={openPreview} />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OpenCampaignsTable
