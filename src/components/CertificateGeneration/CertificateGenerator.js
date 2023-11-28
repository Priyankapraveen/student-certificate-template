// src/components/CertificateGeneration/CertificateGenerator.js
import React from 'react';
import CertificateService from '../../services/CertificateService';


const CertificateGenerator = () => {
  const generateCertificate = () => {
    CertificateService.generateCertificate();
  };

  return (
    <div>
      <h2 className="bg-blue-500 text-white p-4">Certificate Generation</h2>
      <button onClick={generateCertificate}>Generate Certificate</button>
    </div>
  );
};

export default CertificateGenerator;
