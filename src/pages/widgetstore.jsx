import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

export default function WidgetStore() {
  const [widgets, setWidgets] = useState();

  useEffect(() => {
    let mounted = true;
    var url = "https://app.realmocean.com/api/widget:mainstore-settings";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        setWidgets(JSON.parse(xhr.responseText));
      }
    };

    var data = '{}';
    xhr.send(data);
    return () => mounted = false;
  }, [])




  return (
    <Layout title="Widgets" description="Realmocean Widget Store">


      <div className='app-store-apps-page-content'>
        <div className="apps-store-category-list">
          {

            widgets?.map(item => (
              <div className="apps-store-app-card-component" onClick={()=> window.location.href = item.widget_url}>
                <div className="apps-store-app-card-content-wrapper">
                  <div className="apps-store-regular-card-component">
                    <div className='apps-store-regular-card-photo'>
                      <img className='apps-store-regular-card-image' src={item.widget_icon}></img>
                    </div>
                    <div class="apps-store-regular-card-name">
                      <div class="monday-apps-text-ellipsis">{item.widget_display_name}</div>
                      <div class="apps-store-app-card-component__app-badges">
                      </div>
                    </div>
                    <div class="apps-store-regular-card-developer-name">by {item.widget_vendor}</div>
                    <div class="apps-store-regular-card-description">{item.widget_short_description}</div>


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