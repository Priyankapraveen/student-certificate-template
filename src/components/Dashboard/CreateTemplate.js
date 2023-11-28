// src/components/Dashboard/CreateTemplate.js
import React, { useState } from 'react';
import TemplateService from '../../services/TemplateService';

const CreateTemplate = ({ onTemplateCreated }) => {
  const [templateName, setTemplateName] = useState('');
  const [templateSrc, setTemplateSrc] = useState('');

  const handleCreateTemplate = () => {
    const newTemplate = TemplateService.createTemplate(templateName, templateSrc);
    setTemplateName('');
    setTemplateSrc('');
    
    // Call the parent component's callback to inform about the new template
    onTemplateCreated(newTemplate);
  };

  return (
    <div>
      <h2>Create a New Template</h2>
      <label>
        Template Name:
        <input
          type="text"
          placeholder="Template Name"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
        />
      </label>
      <label>
        Template Source URL:
        <input
          type="text"
          placeholder="Image URL"
          value={templateSrc}
          onChange={(e) => setTemplateSrc(e.target.value)}
        />
      </label>
      <button onClick={handleCreateTemplate}>Create Template</button>
    </div>
  );
};

export default CreateTemplate;
