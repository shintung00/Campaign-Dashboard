import React, { useState, useContext } from 'react'
import PhonePreview from './PhonePreview';
import { Tooltip, OverlayTrigger, Badge, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostscriptContext from '../context/postscript/postscriptContext';


function CampaignEdit() {
  const postscriptContext = useContext(PostscriptContext);
  const { updateCampaign, segments, currentCampaign, mediaList } = postscriptContext;
  const { name, text, media, segment_id } = currentCampaign;

  const [currentSegment, setCurrentSegment] = useState(segment_id);
  const [campaignName, setCampaignName] = useState(name);  
  const [mediaLink, setMediaLink] = useState(media);
  const [newText, setNewText] = useState(text);

  const { subscribers_count: subs, name: segName } = segments[currentSegment];

  const changeName = e => setCampaignName(e.target.value);
  const changeText = e => setNewText(e.target.value);
  const changeMedia = e => setMediaLink(e.target.value);
  const changeSegment = e => {
    setCurrentSegment(e.target.id);
  }
  
  console.log(mediaList);
  return (
    <div className="d-flex flex-column">
      <div className="campaign-preview-container d-flex flex-row justify-content-around">
      <div className="campaign-preview-content d-flex flex-column">
          <div className="campaign-preview-content-row">
            <span><strong>Campaign Name</strong></span>
            <br />
            {<input type="text" value={campaignName} onChange={changeName} size="40"/>}
          </div>
          <div className="campaign-preview-content-row">
            <span><strong>Segment</strong></span>
            <br />
            <div className="d-flex flex-row segments align-items-center">
              {
                <NavDropdown title={segName} seg={segName} className="header-item segment-dropdown">
                  {segments.map((segment, index) => (
                    <NavDropdown.Item eventKey={'4.'+index} className="dropdown-item" id={index} key={index} onClick={changeSegment}>{segment.name}</NavDropdown.Item>
                  ))}
                </NavDropdown>
              }
              <Badge variant="primary">{subs} Members</Badge>
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
            </div>
          </div>
          <div className="campaign-preview-content-row">
            <span><strong>Media:</strong></span>
            <br />
            <label for="media-choice">Choose from preview or paste a new one:</label>
            <input list="media-selections" id="media-choice" name="media-choice" onChange={changeMedia}/>
            <datalist id="media-selections">
              {mediaList.length > 0 ? 
                mediaList.map((media) => (
                  <option value={media} />
                )) : null
              }
            </datalist>
          </div>
          <div className="campaign-preview-content-row">
            <span><strong>Message</strong></span>
            <br />
            {<textarea type="text" placeholder="Type your message here" rows="4" cols="100" value={newText} onChange={changeText}/>}
          </div>
        </div>
        <div></div>
        <div className="campaign-preview-phone">
          <PhonePreview campaign={{ media: (mediaLink ? mediaLink : ''), text: newText }}/>
        </div>
      </div>
      <div className="button-group-preview d-flex flex-row-reverse">
        <Link to='/' className="btn btn-secondary">
          Cancel
        </Link>
        <Link to='/' className="btn btn-primary" onClick={()=>{
          let updatedCampaign = {};
          Object.assign(updatedCampaign, currentCampaign);
          updatedCampaign.media = mediaLink;
          updatedCampaign.text = newText;
          updatedCampaign.name = campaignName;
          updatedCampaign.segment_id = currentSegment;
          updateCampaign(updatedCampaign);
        }}>Save</Link>
      </div>
    </div>
  )
}

export default CampaignEdit
