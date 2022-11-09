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
      zoom: 11,
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
      map.addSource("precincts", {
        type: "geojson",
        data:
          "https://raw.githubusercontent.com/Open-Data-Tallahassee/geojson-dump/main/2022-general-dailey-results.geojson",
        generateId: true,
      });

      // add styling
      map.addLayer({
        id: "precincts-fill",
        type: "fill",
        source: "precincts",
        layout: {},
        paint: {
          'fill-color': [
            'interpolate',
            ['linear'],
            ['get', 'pct'],
            // color palette from https://colorbrewer2.org/#type=diverging&scheme=BrBG&n=11
            0,
            '#543005',
            0.10,
            '#8c510a',
            0.20,
            '#bf812d',
            0.30,
            '#dfc27d',
            0.40,
            '#f6e8c3',
            0.50,
            '#f5f5f5',
            0.60,
            '#c7eae5',
            0.70,
            '#80cdc1',
            0.80,
            '#35978f',
            0.90,
            '#01665e',
            1,
            '#003c30'
          ],
          'fill-opacity': 0.75
        },
      }, 'waterway-label');
    });

    // after the map loads
    map.on('click', function(mapElement) {
      const features = map.queryRenderedFeatures(mapElement.point, {
        layers: ['precincts-fill']
      })

      console.log(features[0])

      if (typeof window === "undefined" || node === null) return;

      // variables
      const name = features[0]?.properties?.POLLLOC // optional chaining to avoid "object is null" error
      const number = features[0]?.properties?.precinct
      const percent = features[0]?.properties?.pct.toFixed(2)

      // define what goes in the tooltip
      const html = `Precinct ${number} - ${name}: ${100*percent}% voted for John Dailey`

      // create tooltip variable for the floating card div
      const tooltip = document.getElementById('popup')
            
      // store html in the tooltip, which will be displayed in the floating card div
      tooltip!.innerHTML = html

    });

  }, []);

  return (
    <div>
      <div id="popup">Select a precinct to display turnout details.</div>
      <div ref={mapNode} style={{ height: "75vh" }} />
    </div>
  );
};

export default Map;