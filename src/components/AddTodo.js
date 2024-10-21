import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input) {
      onAdd(input);
      setInput(''); // Réinitialiser l'input après ajout
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <button className="btn btn-primary mt-2" onClick={handleSubmit}>
        Ajouter
      </button>
    </div>
  );
};

export default AddTodo;
