import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

export default function AppStore() {
  const [apps, setApps] = useState();

  useEffect(() => {
    let mounted = true;
    var url = "https://app.appconda.com/api/GetMainStoreInfos";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        setApps(JSON.parse(xhr.responseText));
      }
    };

    var data = '{}';
    xhr.send(data);
    return () => mounted = false;
  }, [])




  return (
    <Layout title="Apps" description="Appconda AppStore">


      <div className='app-store-apps-page-content'>
        <div className="apps-store-category-list">
          {

            apps?.map(item => (
              <div className="apps-store-app-card-component">
                <div className="apps-store-app-card-content-wrapper">
                  <div className="apps-store-regular-card-component">
                    <div className='apps-store-regular-card-photo'>
                      <img className='apps-store-regular-card-image' src={item.app_icon}></img>
                    </div>
                    <div class="apps-store-regular-card-name">
                      <div class="monday-apps-text-ellipsis">{item.app_display_name}</div>
                      <div class="apps-store-app-card-component__app-badges">
                      </div>
                    </div>
                    <div class="apps-store-regular-card-developer-name">by {item.app_vendor}</div>
                    <div class="apps-store-regular-card-description">{item.app_short_description}</div>


                    <div className="spacer"></div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  );
}