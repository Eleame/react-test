import React, { useState } from "react";

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ task: "", priority: "", dueDate: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [order, setOrder] = useState("end");

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const addItem = () => {
    if (editIndex !== null) {
      const updatedItems = items.map((item, index) =>
        index === editIndex ? newItem : item
      );
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems(order === "start" ? [newItem, ...items] : [...items, newItem]);
    }
    setNewItem({ task: "", priority: "", dueDate: "" });
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    setNewItem(items[index]);
    setEditIndex(index);
  };

  const moveItemUp = (index) => {
    if (index > 0) {
      const updatedItems = [...items];
      [updatedItems[index - 1], updatedItems[index]] = [updatedItems[index], updatedItems[index - 1]];
      setItems(updatedItems);
    }
  };

  const moveItemDown = (index) => {
    if (index < items.length - 1) {
      const updatedItems = [...items];
      [updatedItems[index + 1], updatedItems[index]] = [updatedItems[index], updatedItems[index + 1]];
      setItems(updatedItems);
    }
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          name="task"
          placeholder="Task"
          value={newItem.task}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="priority"
          placeholder="Priority"
          value={newItem.priority}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="dueDate"
          value={newItem.dueDate}
          onChange={handleInputChange}
        />
        <select onChange={(e) => setOrder(e.target.value)} value={order}>
          <option value="start">Add to Start</option>
          <option value="end">Add to End</option>
        </select>
        <button onClick={addItem}>{editIndex !== null ? "Edit Item" : "Add Item"}</button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.task} - {item.priority} - {item.dueDate}
            <div>
              <button onClick={() => deleteItem(index)}>Delete</button>
              <button onClick={() => editItem(index)}>Edit</button>
              <button onClick={() => moveItemUp(index)}>Up</button>
              <button onClick={() => moveItemDown(index)}>Down</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
