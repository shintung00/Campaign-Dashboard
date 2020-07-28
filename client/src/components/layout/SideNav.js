import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap';

function SideNav() {
  return (
  <div className="sidenav-container">
    <ListGroup variant="flush" className="sidenav-group">
      <ListGroup.Item action variant="light" className="sidenav-item d-flex justify-content-start align-items-center">
        <i className="fa fa-tachometer d-flex" aria-hidden="true"></i>
        <span>Dashboard</span>
      </ListGroup.Item>
      <ListGroup.Item action variant="light" className="sidenav-item d-flex justify-content-start align-items-center">
        <i className="fa fa-cogs d-flex" aria-hidden="true"></i>
        <span>Automations</span>
      </ListGroup.Item>
      <ListGroup.Item action variant="light" className="sidenav-item d-flex justify-content-start align-items-center">
        <i className="fa fa-envelope d-flex" aria-hidden="true"></i>
        <span>Campaigns</span>
      </ListGroup.Item>
      <ListGroup.Item action variant="light" className="sidenav-item d-flex justify-content-start align-items-center">
        <i className="fa fa-users" aria-hidden="true"></i>
        <span>Segments</span>
      </ListGroup.Item>
      <ListGroup.Item action variant="light" className="sidenav-item d-flex justify-content-start align-items-center">
        <i className="fa fa-key" aria-hidden="true"></i>
        <span>Keywords</span>
      </ListGroup.Item>
      <ListGroup.Item action variant="light" className="sidenav-item d-flex justify-content-start align-items-center">
        <i className="fa fa-comments" aria-hidden="true"></i>
        <span>Responses</span>
      </ListGroup.Item>
    </ListGroup>
    <ListGroup variant="flush" className="sidenav-group">
      <ListGroup.Item action variant="light" className="sidenav-item d-flex justify-content-start align-items-center">
        <i className="fa fa-line-chart" aria-hidden="true"></i>
        <span>Grow List</span>
      </ListGroup.Item>
      <ListGroup.Item action variant="light" className="sidenav-item d-flex justify-content-start align-items-center">
        <i className="fa fa-window-maximize" aria-hidden="true"></i>
        <span>Popups  <Badge variant="info">NEW</Badge></span>
      </ListGroup.Item>
      <ListGroup.Item action variant="light" className="sidenav-item d-flex justify-content-start align-items-center">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        <span>Checkout</span>
      </ListGroup.Item>
      <ListGroup.Item action variant="light" className="sidenav-item d-flex justify-content-start align-items-center">
        <i className="fa fa-cloud" aria-hidden="true"></i>
        <span>Integrations</span>
      </ListGroup.Item>
      <ListGroup.Item action variant="light" className="sidenav-item d-flex justify-content-start align-items-center">
        <i className="fa fa-bar-chart" aria-hidden="true"></i>
        <span>Analytics</span>
      </ListGroup.Item>
    </ListGroup>
  </div>
  )
}

export default SideNav
