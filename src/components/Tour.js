import React, { useState } from 'react';

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h3>{name}</h3>
        <p className="tour-price">${price}</p>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'See less' : 'Read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
}

export default Tour;
