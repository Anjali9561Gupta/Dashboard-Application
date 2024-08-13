import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addWidget, removeWidget } from './actions';
import "./Dashboard.css";
import "./index.css"

const Dashboard = () => {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const handleAddWidget = (categoryId) => {
    const widgetName = prompt('Enter widget name:');
    const widgetText = prompt('Enter widget text:');
    if (widgetName && widgetText) {
      const widget = {
        id: `w${Date.now()}`,
        name: widgetName,
        text: widgetText
      };
      dispatch(addWidget(categoryId, widget));
    }
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget(categoryId, widgetId));
  };

  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <button onClick={() => handleAddWidget(category.id)}>+ Add Widget</button>
          <div>
            {category.widgets.map(widget => (
              <div key={widget.id}>
                <h3>{widget.name}</h3>
                <p>{widget.text}</p>
                <button onClick={() => handleRemoveWidget(category.id, widget.id)}>Remove</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;