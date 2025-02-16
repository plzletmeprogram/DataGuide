import { useEffect, useRef } from "react";
import { Map as LeafletMap, Icon, Marker } from "leaflet";
import { vectorBasemapLayer } from "esri-leaflet-vector";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

function Map() {
  const mapRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // debugger;
    const mapRefCurrent = mapRef.current;

    if (mapRefCurrent !== null) {
      // Create a dom node to place the map in, so that cleanup is easier.
      const domNode = document.createElement("div");
      mapRefCurrent.appendChild(domNode);

      // The default icon does not work due to webpack issues
      let DefaultIcon = new Icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconAnchor: [12, 41],
        popupAnchor: [0, -41],
      });
      Marker.prototype.options.icon = DefaultIcon;

      const map = new LeafletMap(domNode);
      map.setView([53.35014, -6.266155], 8);

      // Add a basemap
      vectorBasemapLayer("ArcGIS:Streets", {
        apiKey: "AAPTxy8BH1VEsoebNVZXo8HurKeWGROKs6AXs7Hc-k2efYWsT_0dGIBd2mtICar19gceNOQnVdEr5f7M45j7_CHOqI6o6mrJcRBPMjquGi29naeEJfE3s4t0FYm4Gxmk7nx6UKmbcjVYDvR2FSPdR8D85G1I_dJVXU3w6fZOAo4fwzNf3OWX6UbyqzlX9598f7IlJLPLE4R8bny0g7lVKILOpCiEA5ukVeWqe-hgiiyqdb4.AT1_Amh0U8XO"
      }).addTo(map);

   
    }

    return () => {
      if (mapRefCurrent) {
        mapRefCurrent.innerHTML = '';
      }
    }
  }, [mapRef]);

  return <div className="map" ref={mapRef}></div>;
}

export default Map;