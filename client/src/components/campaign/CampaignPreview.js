import React, { useContext, Fragment } from 'react'
import PreviewModals from '../modals/PreviewModals';
import PhonePreview from '../campaign/PhonePreview';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostscriptContext from '../context/postscript/postscriptContext';


function CampaignPreview() {
  const postscriptContext = useContext(PostscriptContext);

  const { segments, currentCampaign } = postscriptContext;

  const { name, text, segment_id, media, status, stats } = currentCampaign;
  return (
    <div className="d-flex flex-column">
      <div className="campaign-preview-container d-flex flex-row justify-content-around">

        <div className="campaign-preview-content d-flex flex-column">
          <div className="campaign-preview-content-row">
            <span><strong>Campaign Name:</strong></span>
            <span>{name}</span> 
            {status === 'Preview' && <Link to="/editcampaign">edit</Link>}
          </div>
          <div className="campaign-preview-content-row">
            <span><strong>Segment:</strong></span>
            <span>{segments[segment_id].name}</span>
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
            {status === 'Preview' && <Link to="/editcampaign">edit</Link>}
          </div>
          <div className="campaign-preview-content-row">
            <span><strong>Safe Send:</strong></span>
            <i className="fa fa-check-square" aria-hidden="true"></i>
            {status === 'Preview' && <Link to="/editcampaign">edit</Link>}
          </div>
          <div className="campaign-preview-content-row">
            <span><strong>Timing/Status:</strong></span>
            {status === 'Preview' ? <span>Send Now</span> : <span>Sent</span>}
          </div>
          <div className="campaign-preview-content-row">
            <span><strong>Message:</strong></span>
            <span className="campaign-preview-content-row">{text}</span>
            {status === 'Preview' && <Link to="/editcampaign">edit</Link>}
          </div>
          <div className="campaign-preview-content-row">
            <span><strong>Media:</strong></span>
            <span>{media ? media : ''}</span>
            {status === 'Preview' && <Link to="/editcampaign">edit</Link>}
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
            {status === 'Preview' && <Link to="/editcampaign">edit</Link>}
          </div>
          {status !== 'Preview' && 
          (<Fragment>
            <div className="campaign-preview-content-row">
              <span><strong>Statistics:</strong></span>
            </div>
            <div className="campaign-preview-content-row">
              <span>Sent: <strong>{stats.sent}</strong></span>
            </div>
            <div className="campaign-preview-content-row">
              <span>Clicked: <strong>{stats.clicked}</strong></span>
            </div>
          </Fragment>)}
          
        </div>
        <div></div>
        <div className="campaign-preview-phone">
          <PhonePreview campaign={currentCampaign}/>
        </div>
      </div>
      <div className="button-group-preview d-flex justify-content-between">
        <PreviewModals />
      </div>
    </div>
  )
}

export default CampaignPreview
