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
      zoom: 12
    });

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
            'circle-radius': {
                'base': 1.75,
                'stops': [
                [12, 2],
                [22, 180]
                ]
            },
            'circle-color': '#fbb03b',
            "circle-stroke-color": "#5d765f",
            "circle-stroke-width": 2
        },
      });
    });

    // const map = new mapboxgl.Map({
    //     container: mapContainer.current,
    //     style: `mapbox://styles/shelby-green/ckpe45kll0we417n7cgs8cxne`,
    //     center: [-1.14, -0.98],
    //     minZoom: 2,
    //     interactive: false
    // })

    // mapRef.current = map
  }, []);

  return (
    <div>
      <div ref={mapNode} style={{ height: "45vh" }} />
    </div>
  );
};

export default Map;