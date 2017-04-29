import React from 'react';

const Tweet = ({ tweet }) => {
  return (
    <div>
      <strong>{tweet.screen_name}</strong>: {tweet.text}
    </div>
  )
}

export default Tweet;