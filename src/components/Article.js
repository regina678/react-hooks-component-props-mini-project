import React from 'react';

function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>  {/* Use <small> for the date */}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
