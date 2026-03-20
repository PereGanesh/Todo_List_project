import React, { useState, useEffect } from "react";
import axios from "axios";
// Import the icons
import { Pencil, Trash2 } from 'lucide-react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  const API = "http://localhost:5000/api/todos";

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get(API);
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!title) return;
    await axios.post(API, { title });
    setTitle("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTodos();
  };

  const startEdit = (todo) => {
    setTitle(todo.title);
    setEditId(todo._id);
  };

  const updateTodo = async () => {
    await axios.put(`${API}/${editId}`, { title });
    setTitle("");
    setEditId(null);
    fetchTodos();
  };

  // --- Simple Styles ---
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: "600px",
      margin: "40px auto",
      padding: "20px",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    },
    input: {
      padding: "10px",
      width: "60%",
      border: "1px solid #ddd",
      borderRadius: "4px",
      marginRight: "10px",
    },
    button: {
      padding: "10px 20px",
      cursor: "pointer",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      transition: "background 0.3s",
    },
    updateBtn: {
      backgroundColor: "#28a745",
    },
    table: {
      width: "100%",
      marginTop: "30px",
      borderCollapse: "collapse",
      backgroundColor: "white",
    },
    th: {
      backgroundColor: "#f2f2f2",
      padding: "12px",
      borderBottom: "2px solid #ddd",
    },
    td: {
      padding: "10px",
      borderBottom: "1px solid #eee",
    },
    actionBtn: {
      padding: "8px 12px", // Increased padding slightly for icons
      margin: "0 5px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      display: "flex", // Uses flexbox to center the icon and text
      alignItems: "center",
      gap: "6px", // Space between icon and text
      fontSize: "0.9rem",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: "#333" }}>Student Enrollment</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={title}
          placeholder="Enter Name"
          style={styles.input}
          onChange={(e) => setTitle(e.target.value)}
        />

        {editId ? (
          <button
            style={{ ...styles.button, ...styles.updateBtn }}
            onClick={updateTodo}
          >
            Update
          </button>
        ) : (
          <button style={styles.button} onClick={addTodo}>
            Add
          </button>
        )}
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Student Name</th>
            <th style={styles.th}>Edit</th>
            <th style={styles.th}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo._id}>
              <td style={styles.td}>{todo.title}</td>
              <td style={styles.td}>
                <button
                  style={{ ...styles.actionBtn, backgroundColor: "#ffc107" }}
                  onClick={() => startEdit(todo)}
                >
                  {/* Inserted Pencil Icon */}
                  <Pencil size={16} /> 
                  Edit
                </button>
              </td>
              <td style={styles.td}>
                <button
                  style={{
                    ...styles.actionBtn,
                    backgroundColor: "#dc3545",
                    color: "white",
                  }}
                  onClick={() => deleteTodo(todo._id)}
                >
                  {/* Inserted Dustbin Icon */}
                  <Trash2 size={16} />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todo;