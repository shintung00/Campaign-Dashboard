import React from 'react'

function PhonePreview(props) {
  const { name, text, segment_id, media, status, stats, id } = props.campaign;
  console.log(text);
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
            {`${text}`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhonePreview
