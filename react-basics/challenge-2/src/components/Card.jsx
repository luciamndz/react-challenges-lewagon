import propTypes from 'prop-types';

export default function Card({quote, author, handleDelete}) {

  return (
    <>
      <div className="card">
        <div className="card-body">
          <button onClick={handleDelete}>Eliminar</button>
          <blockquote className="blockquote mb-0">
            <p>{quote}</p>
            <footer className="blockquote-footer"><cite title="Source Title">{author}</cite></footer>
          </blockquote>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  quote: propTypes.string,
  author: propTypes.string,
  handleDelete: propTypes.func,
  id: propTypes.number
}
