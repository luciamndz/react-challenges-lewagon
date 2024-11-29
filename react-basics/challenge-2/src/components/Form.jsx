import { useState } from 'react';
import propTypes from 'prop-types';

export default function Form({ handleAdd }) {
  const [formData, setFormData] = useState({
    quote: '',
    author: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.quote || !formData.author) {
      alert("Algunos campos están vacíos");
    } else {
      handleAdd(formData); // Pass formData directly
      setFormData({ quote: '', author: '' }); // Clear the form after submission
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <span>Crear una nueva quote</span>

        <div className="form-group">
          <label htmlFor="quote">Escribe una quote</label><br />
          <input
            type="text"
            id="quote"
            name="quote"
            value={formData.quote}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Autor</label><br />
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Agregar quote</button>
      </form>
    </>
  );
}

Form.propTypes = {
  handleAdd: propTypes.func.isRequired
};
