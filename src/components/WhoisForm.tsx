'use client'


import React, { useState } from 'react';
import axios from 'axios';

const WhoisForm: React.FC = () => {
  const [domainName, setDomainName] = useState('');
  const [result, setResult] = useState('');

  const handleLookup = async () => {
    try {
      const response = await axios.get(`https://whois.freeaiapi.xyz/?name=${domainName}&suffix=com`);
      setResult(JSON.stringify(response.data, null, 2));
    } catch (error: any) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={domainName}
        onChange={(e) => setDomainName(e.target.value)}
        placeholder="Enter domain name"
      />
      <button onClick={handleLookup}>Lookup</button>
      <pre>{result}</pre>
    </div>
  );
};

export default WhoisForm;
