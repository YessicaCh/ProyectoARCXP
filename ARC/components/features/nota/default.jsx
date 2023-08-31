import React from 'react';

const Note = ({ title, author, date, content }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="mb-3">{title}</h1>
          <p className="text-muted">
            By {author} | {date}
          </p>
          <div className="mb-4">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Note;
