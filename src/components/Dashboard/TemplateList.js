// src/components/Dashboard/TemplateList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TemplateList = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTemplateName, setNewTemplateName] = useState("");
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    // Sample data with placeholder image URLs
    const sampleData = [
      { id: 1, name: "Template 1", imageUrl: "https://www.edrawsoft.com/templates/images/student-certificate.png"  },
      { id: 2, name: "Template 2", imageUrl: "https://www.edrawsoft.com/templates/images/certificate.png" },
      { id: 3, name: "Template 3", imageUrl: "https://www.edrawsoft.com/templates/images/orange-frame-certificate.png" },
      { id: 4, name: "Template 4", imageUrl: "https://www.edrawsoft.com/templates/images/award-certificate.png" },
    ];

    setTemplates(sampleData);
  }, []);

  const handleAddTemplate = () => {
    // Add your logic to save the new template
    // Then, update the templates state with the new template
    // setTemplates([...templates, { id: newId, name: newTemplateName, ...otherProperties }]);
    // Reset form state
    setNewTemplateName("");
    // Hide the form
    setShowAddForm(false);
  };

  return (
    
    <div className="max-w-screen-lg mx-auto mt-8"> {/* Adjusted margin-top */}
     <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-8">Welcome to Template world</h1>
      {/* New heading */}
      <h2 className="text-6xl font-cursive mt-10">
        What will you design today? <br />
        <span className="text-lg">Makes it easy to create professional designs and to share or print them.</span>
      </h2>
      <br></br>
      <Link to="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Register Today
      </Link>
      <div></div>
    </div>
    <br></br>
      {/* <h2 className="text-2xl font-bold mb-4 text-blue-500 shadow-lg">Available Image Templates</h2> */}
      <div className="flex overflow-x-auto space-x-10">
        {Array.isArray(templates) &&
          templates.map((template) => (
            <div key={template.id} className="flex-shrink-0">
              <img
                src={template.imageUrl}
                alt={template.name}
                className="w-50 h-50 object-cover rounded" 
              />
              <p className="text-center">{template.name}</p>
            </div>
          ))}
      </div>

      {/* Button to toggle the form */}
      <button onClick={() => setShowAddForm(true)} className="mt-4 bg-blue-500 text-white px-2 py-1 rounded">
        Add Template
      </button>

      {/* Form to add a new template */}
      {showAddForm && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Add New Template</h3>
          <label>
            Template Name:
            <input
              type="text"
              value={newTemplateName}
              onChange={(e) => setNewTemplateName(e.target.value)}
              className="border border-gray-300 p-2 mb-2"
            />
          </label>
          Add other form fields for template properties
          {/* For example: <label>Other Property: <input type="text" value={otherProperty} onChange={(e) => setOtherProperty(e.target.value)} /></label> */}
          <button onClick={handleAddTemplate} className="bg-green-500 text-white px-2 py-1 rounded mr-2">
            Add
          </button>
          <button onClick={() => setShowAddForm(false)} className="bg-gray-500 text-white px-2 py-1 rounded">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default TemplateList;
