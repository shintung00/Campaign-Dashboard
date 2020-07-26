import React from 'react'
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';

function CampaignPreview(props) {
  const { name, text, segment_id, media, status, stats, id } = props.campaign;
  return (
    <div className="campaign-preview-container d-flex flex-row">

      <div className="campaign-preview-content d-flex flex-column">
        <div className="campaign-preview-content-row">
          <span><strong>Campaign Name:</strong></span>
          <span>{name}</span>
          <a>edit</a>
        </div>
        <div className="campaign-preview-content-row">
          <span><strong>Segment:</strong></span>
          <span>{segment_id} </span>
          <OverlayTrigger
            key="top"
            placement="top"
            overlay={
              <Tooltip id={`tooltip-top`}>
                This is the number of customers and subscribers in the segment (that have not opted out).
              </Tooltip>
            }
          >
            <i class="fa fa-info-circle" aria-hidden="true"></i>
          </OverlayTrigger>
          <a>edit</a>
        </div>
        <div className="campaign-preview-content-row">
          <span><strong>Safe Send:</strong></span>
          <i class="fa fa-check-square" aria-hidden="true"></i>
          <a>edit</a>
        </div>
        <div className="campaign-preview-content-row">
          <span><strong>Timing:</strong></span>
          <span>Send Now</span>
          <a>edit</a>
        </div>
        <div className="campaign-preview-content-row">
          <span><strong>Message:</strong></span>
          <span>{text}</span>
          <a>edit</a>
        </div>
        <div className="campaign-preview-content-row">
          <span><strong>Media:</strong></span>
          <span>{media}</span>
          <a>edit</a>
        </div>
        <div className="campaign-preview-content-row">
          <span><strong>Message Strength:</strong></span>
          <span></span>
        </div>
        <div className="campaign-preview-content-row">
          <span><strong>Message Count:</strong></span>
          <span>1 (MMS)</span>
        </div>
        <div className="campaign-preview-content-row">
          <span><strong>Credit:</strong></span>
          <span>0</span>
          <OverlayTrigger
            key="top"
            placement="top"
            overlay={
              <Tooltip id={`tooltip-top`}>
                This is the estimate amount of credits that will be used for this campaign.
              </Tooltip>
            }
          >
            <i class="fa fa-info-circle" aria-hidden="true"></i>
          </OverlayTrigger>
          <a>edit</a>          
        </div>
      </div>

      <div className="campaign-preview-phone">

      </div>
    </div>
  )
}

export default CampaignPreview
