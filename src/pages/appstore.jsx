import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function AppStore() {
  const [test, setTest] = useState('AAA');
  return (
    <Layout title="Hello" description="Hello React Page">
      {
       Array.from({length: 10}, () => Math.floor(Math.random() * 100)).map(item => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50vh',
              fontSize: '20px',
            }}>
            <p>
              App Store is here. {item} {test}
            </p>
          </div>
        ))
      }

    </Layout>
  );
}