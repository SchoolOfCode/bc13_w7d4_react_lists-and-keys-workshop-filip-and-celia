import React from 'react';

import './index.css';

function Post(props) {
  return <article>
  <img src={props.img} alt={props.alt}/>
  <h2>{props.title}</h2>
  <h3>{props.author}</h3>
  <p>{props.date}</p>
  <p className='text'>{props.text}</p>
  <p>{props.highlights}</p>

  </article>;
}

export default Post;
