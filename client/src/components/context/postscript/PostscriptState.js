import React, { useReducer } from 'react';
import PostscriptContext from './postscriptContext';
import PostscriptReducer from './postscriptReducer';
import sampleCampaign from '../../../sampleCampaign';
import sampleSegment from '../../../sampleSegment';
import {
  OPEN_CAMPAIGN,
  CLOSE_CAMPAIGN,
  REFRESH_CAMPAIGNS,
} from '../types';


const PostscriptState = props => {
  const initialState = {
    segments: sampleSegment,
    campaigns: sampleCampaign,
    currentCampaign: null,
  }

  const [state, dispatch] = useReducer(PostscriptReducer, initialState);
  const { segments, campaigns, currentCampaign } = state;

  const closeCampaign = () => dispatch(
    { type: CLOSE_CAMPAIGN }
  )

  const openPreview = id => {
    campaigns.forEach(campaign => {
      if (campaign.id === id) {
        dispatch({ 
          type: OPEN_CAMPAIGN,
          payload: campaign
        })
      }
    })
  }; 

  const deleteCampaign = id => {
    const newCampaigns = campaigns.reduce((acc, cv) => {
      if (cv.id !== id) {
        acc.push(cv);
      }
      return acc;
    }, []);
    closeCampaign();
    dispatch({
      type: REFRESH_CAMPAIGNS,
      payload: newCampaigns
    })
  };

  const updateCampaign = updatedCampaign => {
    let updatedCampaigns = [];
    campaigns.forEach((campaign) => {
      if (campaign.id !== updatedCampaign.id) {
        updatedCampaigns.push(campaign);
      } else {
        updatedCampaigns.push(updatedCampaign);
      }
    })
    dispatch({
      type: REFRESH_CAMPAIGNS,
      payload: updatedCampaigns
    })  
    closeCampaign();
  }

  //not tested
  const createCampaign = () => {
      let newIndex = 0;
      let campaignsCopy = [];
      campaigns.forEach((campaign) => {
        newIndex = Math.max(newIndex, campaign.id + 1);
        campaignsCopy.push(campaign);
      })
      let newCampaign = {
        "id": newIndex,
        "name": "NEW CAMPAIGN",
        "text": "Hey {first_name}! This is a sample message from {shop_name}",
        "status": "Preview",
        "segment_id": 0,
        "media": "",
        "stats": null
      }
      campaignsCopy.unshift(newCampaign);
      dispatch({
        type: REFRESH_CAMPAIGNS,
        payload: campaignsCopy
      });
      dispatch({ 
        type: OPEN_CAMPAIGN,
        payload: campaignsCopy[0]
      })
    } 

  return <PostscriptContext.Provider
    value={{
      deleteCampaign,
      openPreview,
      closeCampaign,
      updateCampaign,
      createCampaign,
      campaigns: campaigns,
      segments: segments,
      currentCampaign: currentCampaign,
    }}
  >
    {props.children}
  </PostscriptContext.Provider>
}

export default PostscriptState;