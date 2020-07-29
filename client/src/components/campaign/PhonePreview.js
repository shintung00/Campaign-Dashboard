import React from 'react';
import PropTypes from 'prop-types';

function PhonePreview(props) {
  const { text, media } = props.campaign;
  
  const firstName = /{first_name}/gi;
  const shopName = /{shop_name}/gi;
  const shopLink = /{shop_link}/gi;

  let cleanedText = text.replace(firstName, 'Tester');
  cleanedText = cleanedText.replace(shopName, 'SamplePostScript')
  cleanedText = cleanedText.replace(shopLink, 'https://likethebodyp.art');

  return (
    <div>
      <div className="phone-container">
        <div className="phone-content">
          <span style={{
            'alignSelf': 'center', 
            'fontSize': '10px',
            'color': '#adb5bd'
            }}>Text Message</span>
          {media && <img src={media} className="phone-media" />}
          <div className="phone-msg">
            {cleanedText}
          </div>
        </div>
      </div>
    </div>
  )
}

PhonePreview.propTypes = {
  campaign: PropTypes.object.isRequired
};


export default PhonePreview
