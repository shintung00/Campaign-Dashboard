import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import CampaignsTable from '../client/src/components/dashboard/CampaignsTable';
import PostscriptContext from '../client/src/components/context/postscript/postscriptContext';

// describe('Campaigns Table should appropriately filter Sent and Preview campaigns', () => {

  // const sampleFunction = () => console.log('testies');
  // const sampleCampaigns = [{
  //   "id": 7,
  //   "name": "Back to School",
  //   "text": "Hey {first_name}, it's {shop_name}! We have a HUGE sale on Labor Day, get up to 30% off with LABOR30. {shop_link}",
  //   "status": "Sent",
  //   "segment_id": 1,
  //   "media": "https://media.giphy.com/media/K0ZZjkjYKiD7y/giphy.gif",
  //   "stats": {
  //     "sent": 7228,
  //     "clicked": 6883
  //   }
  // },
  // {
  //   "id": 8,
  //   "name": "Start of Pumpkin Spice Latte Season",
  //   "text": "Hi {first_name}! Here at {shop_name} we just got our NEW Cotton Candy Palette! {shop_link}",
  //   "status": "Sent",
  //   "segment_id": 2,
  //   "media": "https://images.unsplash.com/photo-1544220828-1becb7f7b284",
  //   "stats": {
  //     "sent": 7246,
  //     "clicked": 7080
  //   }
  // },
  // {
  //   "id": 9,
  //   "name": "Super Bowl (and Commercials!)",
  //   "text": "Hey {first_name}! Back at {shop_name} we've gotten a WILD amount of home updates you NEED this Fall. 👀 {shop_link}",
  //   "status": "Preview",
  //   "segment_id": 0,
  //   "media": "https://images.unsplash.com/photo-1568485248685-019a98426c14",
  //   "stats": null
  // },
  // {
  //   "id": 10,
  //   "name": "No Shave Novembeard",
  //   "text": "It's the Great Halloween Sale, {first_name}! Things are getting pretty spooky here at {shop_name}. Take up to 20% off with SCARE20",
  //   "status": "Preview",
  //   "segment_id": 1,
  //   "media": "https://images.unsplash.com/photo-1537800534001-f3e01aa1c34c",
  //   "stats": null
  // }];


  // Approach 1
  // https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/setContext.html
  // it('should filter the Preview campaigns', () => {
  //     const PostscriptContext = { 
  //       campaigns: sampleCampaigns, 
  //       deleteCampaign: sampleFunction, 
  //       openPreview: sampleFunction 
  //     };
  //     const wrapper = shallow(<CampaignsTable option="Preview"/>, { PostscriptContext });
  //     expect(wrapper.find('.campaign-table-entry')).toHaveLength(2);
  // });

  // Approach 2
  // https://itnext.io/jest-tests-with-react-context-api-90f3d2e06c8f
  // it('should filter the Preview campaigns', () => {
  //   const wrapper = mount(
  //     <PostscriptContext.Provider>
  //       <CampaignsTable option="Preview"/>
  //     </PostscriptContext.Provider>);
  //   expect(wrapper.find('.campaign-table-entry')).toHaveLength(5);
  // });
// })

