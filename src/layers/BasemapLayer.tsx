import { useMap } from "react-leaflet";
import { vectorBasemapLayer } from "esri-leaflet-vector";

interface BasemapLayerProps {
  apiKey: string;
  name: string;
}

const BasemapLayerComponent = ({ apiKey, name }: BasemapLayerProps) => {
  const map = useMap();

  vectorBasemapLayer(name, { apiKey }).addTo(map);

  return null;
};

export default BasemapLayerComponent;
