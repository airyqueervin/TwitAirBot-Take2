import React from 'react';

const Tweet = ({ tweet }) => {
  return (
    <div>
      <strong>{tweet.username}</strong>: {tweet.text}
    </div>
  )
}

export default Tweet;