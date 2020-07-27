import React from 'react'
import PreviewModals from '../modals/PreviewModals';
import PhonePreview from '../campaign/PhonePreview';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

function CampaignPreview(props) {
  const { name, text, segment_id, media, status, stats, id } = props.campaign;
  return (
    <div className="d-flex flex-column">
      <div className="campaign-preview-container d-flex flex-row justify-content-around">

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
              <i className="fa fa-info-circle" aria-hidden="true"></i>
            </OverlayTrigger>
            <a>edit</a>
          </div>
          <div className="campaign-preview-content-row">
            <span><strong>Safe Send:</strong></span>
            <i className="fa fa-check-square" aria-hidden="true"></i>
            <a>edit</a>
          </div>
          <div className="campaign-preview-content-row">
            <span><strong>Timing:</strong></span>
            <span>Send Now</span>
            <a>edit</a>
          </div>
          <div className="campaign-preview-content-row">
            <span><strong>Message:</strong></span>
            <span className="campaign-preview-content-row">{text}</span>
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
              <i className="fa fa-info-circle" aria-hidden="true"></i>
            </OverlayTrigger>
            <a>edit</a>          
          </div>
        </div>
        <div></div>
        <div className="campaign-preview-phone">
          <PhonePreview campaign={props.campaign}/>
        </div>
      </div>
      <div className="button-group-preview d-flex justify-content-between">
        <PreviewModals />
      </div>
    </div>
  )
}

export default CampaignPreview
