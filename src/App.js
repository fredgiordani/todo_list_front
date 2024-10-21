import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { fetchTodos, addTodo, deleteTodo } from './services/apiServices';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoLIst';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Charger les tâches à partir de l'API au chargement du composant
  useEffect(() => {
    fetchTodos()
      .then(data => setTodos(data))
      .catch(error => console.error('Erreur:', error));
  }, []);

  // Ajouter une nouvelle tâche à MongoDB via l'API
  const handleAddTodo = (task) => {
    addTodo(task)
      .then((data) => setTodos([...todos, data])) // Ajouter la nouvelle tâche à la liste
      .catch((error) => console.error('Erreur:', error));
  };

  // Supprimer une tâche de MongoDB via l'API
  const handleDeleteTodo = (id) => {
    deleteTodo(id)
      .then(() => {
        const updatedTodos = todos.filter((todo) => todo._id !== id); // Mettre à jour la liste locale
        setTodos(updatedTodos);
      })
      .catch((error) => console.error('Erreur:', error));
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Todo List</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;
