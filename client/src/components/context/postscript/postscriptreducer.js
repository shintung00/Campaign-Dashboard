import {
  OPEN_CAMPAIGN,
  CLOSE_CAMPAIGN,
  REFRESH_CAMPAIGNS,
} from '../types';


export default (state, action) => {
  switch (action.type) {
    case CLOSE_CAMPAIGN:
      return {
        ...state,
        currentCampaign: null
      };
    case OPEN_CAMPAIGN:
      return {
        ...state,
        currentCampaign: action.payload
      }
    case REFRESH_CAMPAIGNS: {
      return {
        ...state,
        campaigns: action.payload,
      };
    }
    
    default:
      return state;
  }
};
