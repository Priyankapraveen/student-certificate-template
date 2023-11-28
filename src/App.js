// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TemplateList from './components/Dashboard/TemplateList';
import CreateTemplate from './components/Dashboard/CreateTemplate';
import TemplateEditor from './components/TemplateEditor/TemplateEditor';
import CertificateGenerator from './components/CertificateGeneration/CertificateGenerator';

function App() {
  
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="bg-gray-600 text-white p-4 flex justify-between items-center">
          <div>
            <ul className="flex">
              <li className="mr-6">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="mr-6">
                <Link to="/dashboard/create">Create Template</Link>
              </li>
              <li className="mr-6">
                <Link to="/template-editor">Template Editor</Link>
              </li>
              <li>
                <Link to="/certificate-generation">Certificate Generation</Link>
              </li>
            </ul>
          </div>
          
          {/* Add Template button */}
          <div>
            <Link to="/dashboard/create" className="bg-blue-500 text-white px-3 py-2 rounded text-lg">
              Add Template
            </Link>
          </div>
        </nav>

        {/* Route Content */}
        <Routes>
          <Route path="/dashboard" exact element={<TemplateList />} />
          <Route path="/dashboard/create" element={<CreateTemplate />} />
          <Route path="/template-editor" element={<TemplateEditor />} />
          <Route path="/certificate-generation" element={<CertificateGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
