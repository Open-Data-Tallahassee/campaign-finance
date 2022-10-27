import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React from "react";

const Map = () => {

  // access token
  const key: any = 'pk.eyJ1Ijoic2hlbGJ5LWdyZWVuIiwiYSI6ImNrMHNobWdrNTAwZW8zYnA5czQ5cWh4ankifQ.TWYVyG-n0cmhTGvKg31eow';

  // // this ref holds the map DOM node so that we can pass it into Mapbox GL
  // const mapContainer = useRef(HTMLElement)

  // // this ref holds the map object once we have instantiated it, so that it
  // // can be used in other hooks
  // const mapRef = useRef(null)

  // this is where the map instance will be stored after initialization
  const [map, setMap] = React.useState<mapboxgl.Map>();

  const mapNode = React.useRef(null);

  React.useEffect(() => {
    const node = mapNode.current;

    if (typeof window === "undefined" || node === null) return;

    mapboxgl.accessToken = key;
    // map's basic settings
    const map = new mapboxgl.Map({
      container: node,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [-84.2830590599657, 30.43936603257657],
      interactive: true,
      zoom: 16,
      minZoom: 8
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    // Add geolocate control to the map.
    map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true
      })
      );

    // load layer
    map.on("load", function () {
      // import layer
      map.addSource("points", {
        type: "geojson",
        data:
          "https://raw.githubusercontent.com/Open-Data-Tallahassee/geojson-dump/main/john-dailey.geojson",
        generateId: true,
      });

      // add styling
      map.addLayer({
        id: "points-circle",
        type: "circle",
        source: "points",
        layout: {},
        paint: {
            'circle-radius': [
              "interpolate",
              ["linear"],
              ["get", "amount"],
              1, 2,
              100, 4,
              250, 7,
              500, 10,
              1000, 15,
            ],
            // {
            //     'base': 1.75,
            //     'stops': [
            //     [12, 2],
            //     [22, 180]
            //     ]
            // },
            'circle-color': [
              'match',
              ['get', 'cont. type'],
              'I', // individual
              '#E09F7D',
              'B', // business
              '#311847',
              'S', // self
              '#A01A7D', // 51 to 75
              'F', // political committee
              '#EF5D60', // 76 to 99
              'C',
              '#EC4067', // committee
              '#ccc', // other
          ],
          "circle-stroke-color": "#fff",
          "circle-stroke-width": 1
        },
      });
    });

    // after the map loads
    map.on('click', function(mapElement) {
      const features = map.queryRenderedFeatures(mapElement.point, {
        layers: ['points-circle']
      })

      const name = features[0].properties.name
      const amount = features[0].properties.amount

      const html = `${name} donated $${amount}`

      // create tooltip variable for the floating card div
      const tooltip = document.getElementById('popup')
            
      // store html in the tooltip, which will be displayed in the floating card div
      tooltip.innerHTML = html

    });

  }, []);

  return (
    <div>
      <div id="popup">Select a dot to display donation details.</div>
      <div ref={mapNode} style={{ height: "50vh" }} />
    </div>
  );
};

export default Map;