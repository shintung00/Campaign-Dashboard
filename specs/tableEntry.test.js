import React from 'react'
import { shallow } from 'enzyme'
import TableEntry from '../client/src/components/dashboard/TableEntry';


describe('Table Entry lists appropriate campaign status', () => {
  it('renders Sent ', () => {
    const deleteCampaign = () => console.log('delete campaign');
    const openPreview = () => console.log('open preview');
    const scampaign = { name: 'testing shallow render', id: '12', status: 'Sent' };
    const wrapper = shallow(<TableEntry 
      deleteCampaign={deleteCampaign} 
      openPreview={openPreview} 
      campaign={scampaign} 
      />);
    expect(wrapper.contains(<span className="badge badge-primary">Sent</span>)).toBeTruthy();
  });

  it('renders Preview ', () => {
    const deleteCampaign = () => console.log('delete campaign');
    const openPreview = () => console.log('open preview');
    const pcampaign = { name: 'testing shallow render', id: '1', status: 'Preview' };
    const wrapper = shallow(<TableEntry 
      deleteCampaign={deleteCampaign} 
      openPreview={openPreview} 
      campaign={pcampaign} 
      />);
    expect(wrapper.contains(<span className="badge badge-info">Preview</span>)).toBeTruthy();
  });
})
