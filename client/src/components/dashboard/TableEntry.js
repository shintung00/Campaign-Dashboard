import React from 'react'
import { Button } from 'react-bootstrap';

function TableEntry(props) {
  const { deleteCampaign } = props;
  const { name, id }  = props.campaign;

  return (
      <tr>
        <td>{name}</td>
        <td><h5><span className="badge badge-info">Preview</span></h5></td>
        <td>
          <div className="action-button-container">
            <Button variant="outline-dark">Edit</Button>
            <Button variant="outline-danger" onClick={()=>{
              window.confirm("Are you sure you want to delete this Campaign?");
              if (confirm) {
                deleteCampaign(id);
              }}}>Delete</Button>
          </div>
        </td>
      </tr>
  )
}

export default TableEntry
