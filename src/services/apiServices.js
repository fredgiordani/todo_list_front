// apiService.js
export const fetchTodos = async () => {
    const response = await fetch('/api/todos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Erreur lors du chargement des tâches');
    }
    return response.json();
  };
  
  export const addTodo = async (task) => {
    const response = await fetch('/api/todos/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task }),
    });
    if (!response.ok) {
      throw new Error('Erreur lors de l\'ajout de la tâche');
    }
    return response.json();
  };
  
  export const deleteTodo = async (id) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Erreur lors de la suppression de la tâche');
    }
  };
  