import React, { useState } from 'react';
import Layout from '@theme/Layout';

const realms = [
  {
    name: 'peda360',
    image_url: 'https://peda360.com/img/peda360-logo.png',
    realm_link: 'http://apps.peda360.com'
  },
  {
    name: 'Next Normal',
    realm_link: 'https://next-normal.realmocean.app'
  },
  {
    name: 'BPM Genesis',
    realm_link: 'http://apps.bpmgenesis.com'
  }
]
export default function AppStore() {
  const [test, setTest] = useState('AAA');
  return (
    <Layout title="Hello" description="Hello React Page">
      <div className="grid-container">
        {
          realms.map(item =>
          (
            <div className="grid-item">
              <span>{item.name}</span>
              <img src={item.image_url}></img>
              <div className="spacer"></div>
              <a target={'_blank'} href={item.realm_link}>Go to realm</a>

            </div>
          )

          )
        }
      </div>


    </Layout>
  );
}