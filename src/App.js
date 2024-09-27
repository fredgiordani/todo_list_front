import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Charger les tâches à partir de l'API au chargement du composant
  useEffect(() => {
    fetch('/api/todos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', // Seulement les en-têtes essentiels
      },
    })
    .then(response => response.json())
    .then(data => setTodos(data))
    .catch(error => console.error('Erreur:', error));
  }, []);

  // Ajouter une nouvelle tâche à MongoDB via l'API
  const addTodo = () => {
    if (input) {
      fetch('/api/todos/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: input }),
      })
        .then((response) => response.json())
        .then((data) => setTodos([...todos, data])) // Ajouter la nouvelle tâche à la liste
        .catch((error) => console.error('Erreur:', error));

      setInput(''); // Réinitialiser le champ de saisie
    }
  };

  // Supprimer une tâche de MongoDB via l'API
  const deleteTodo = (id) => {
    fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedTodos = todos.filter((todo) => todo._id !== id); // Mettre à jour la liste locale
        setTodos(updatedTodos);
      })
      .catch((error) => console.error('Erreur:', error));
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Todo List</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ajouter une tâche"
        />
        <button className="btn btn-primary mt-2" onClick={addTodo}>
          Ajouter
        </button>
      </div>
      <ul className="list-group mt-3">
        {todos.map((todo) => (
          <li key={todo._id} className="list-group-item d-flex justify-content-between">
            <span>{todo.task}</span>
            <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo._id)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
