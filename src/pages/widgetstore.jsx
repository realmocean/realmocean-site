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




            <div className="grid-container">
                {
                    widgets?.map(item =>
                    (
                        <div className="grid-item">
                            <span>{item.widget_display_name}</span>
                            <img src={item.widget_icon}></img>
                           {/*  <span>{item.widget_short_description}</span> */}
                            <div className="spacer"></div>
                            <a href={item.widget_url}>Go to widget</a>

                        </div>
                    )

                    )
                }
            </div>

        </Layout>
    );
}