// src/components/TemplateEditor/TemplateEditor.js
import React, { useState } from 'react';
import TemplateService from '../../services/TemplateService';

const TemplateEditor = () => {
  const [templateContent, setTemplateContent] = useState('');

  const handleSaveTemplate = () => {
    TemplateService.saveTemplate(templateContent);
    setTemplateContent('');
  };

  return (
    <div>
      <h2>Template Editor</h2>
      <textarea
        placeholder="Enter template content..."
        value={templateContent}
        onChange={(e) => setTemplateContent(e.target.value)}
      />
      <button onClick={handleSaveTemplate}>Save Template</button>
    </div>
  );
};

export default TemplateEditor;
