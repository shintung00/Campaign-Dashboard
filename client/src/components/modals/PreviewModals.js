import React, { Fragment, useState, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostscriptContext from '../context/postscript/postscriptContext';


function PreviewModals() {
  const postscriptContext = useContext(PostscriptContext);
  const { closeCampaign } = postscriptContext;

  //Bootstrap modal methods and state
  const [showSchedule, setShowSchedule] = useState(false);
  const [showTest, setShowTest] = useState(false);

  const handleCloseTest = () => setShowTest(false);
  const handleShowTest = () => setShowTest(true);
  const handleCloseSchedule = () => setShowSchedule(false);
  const handleShowSchedule = () => setShowSchedule(true);

  return (
      <Fragment>
        <div>
          <Link to='/' onClick={closeCampaign} className="btn btn-primary">Back to Campaigns (Save Draft)</Link>         
        </div>
        <div className="button-group-preview-3">
          <Button variant="outline-success" onClick={handleShowTest}>
            Send Me A Test
          </Button> 
          <Button variant="outline-info" onClick={handleShowSchedule}>
            Schedule Campaign
          </Button> 
          <Button variant="info">
            Send Campaign Now
          </Button> 
        </div>   
        <Modal show={showTest} onHide={handleCloseTest}>
          <Modal.Header closeButton>
            <Modal.Title>Send Test</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>Input the values to use for the tags in your message:</span>
            <br />
            <span>{'{first_name}'} <input type="text" /></span>
            <br />
            <span>{'{last_name}'} <input type="text" /></span>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseTest}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showSchedule} onHide={handleCloseSchedule}>
          <Modal.Header closeButton>
            <Modal.Title>Schedule Campaign</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseSchedule}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseSchedule}>
              Save Schedule
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>  
  )
};

export default PreviewModals;
