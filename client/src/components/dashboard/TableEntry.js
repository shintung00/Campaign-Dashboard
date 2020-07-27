import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TableEntry(props) {
  const { deleteCampaign, openPreview } = props;
  const { name, id, status }  = props.campaign;

  return (
      <tr>
        <td><Link to='/campaign' onClick={()=>{openPreview(id)}}>{name}</Link></td>
        <td>
          <h5>
            {status === 'Preview' ? <span className="badge badge-info">Preview</span> : 
            <span className="badge badge-primary">Sent</span>}
            
          </h5>
        </td>
        <td>
          <div className="action-button-container d-flex flex-row">
            <div>
              <Link to='/campaign' className="btn btn-outline-dark" onClick={()=>{openPreview(id)}}>Edit</Link>
            </div>
            <div>
              <Button variant="outline-danger" onClick={()=>{
              window.confirm("Are you sure you want to delete this Campaign?");
              if (confirm) {
                deleteCampaign(id);
              }}}>Delete</Button>
            </div>
            
          </div>
        </td>
      </tr>
  )
}

export default TableEntry
