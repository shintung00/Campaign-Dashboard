import React from 'react'
import { shallow } from 'enzyme'
import PhonePreview from '../client/src/components/campaign/PhonePreview';


describe('Phone Preview renders the same number of messages on screen', () => {
  it('displays message but no media', () => {
    const noMediaCampaign = { media: null, text: "This shouldn't render a media" };
    const wrapper = shallow(<PhonePreview 
      campaign={noMediaCampaign} 
      />);
    expect(wrapper.find('.phone-media')).toHaveLength(0);
    expect(wrapper.find('.phone-msg').text()).toEqual("This shouldn't render a media");
  });

  it('displays message but no media', () => {
    const noMediaCampaign = { media: "https://media.giphy.com/media/wW95fEq09hOI8/giphy.gif", text: "This should render a media" };
    const wrapper = shallow(<PhonePreview 
      campaign={noMediaCampaign} 
      />);
    expect(wrapper.find('.phone-media')).toHaveLength(1);
    expect(wrapper.find('.phone-msg').text()).toEqual('This should render a media');
  });

  it('displays neither a message nor media', () => {
    const noMediaCampaign = { media: null, text: "" };
    const wrapper = shallow(<PhonePreview 
      campaign={noMediaCampaign} 
      />);
    expect(wrapper.find('.phone-media')).toHaveLength(0);
    expect(wrapper.find('.phone-msg').text()).toEqual('');
  });
})
