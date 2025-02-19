import { useMap } from "react-leaflet";
import { featureLayer } from "esri-leaflet";

interface FeatureLayerProps {
  url: string;
  minZoom?: number;
  eventHandlers?: { [key: string]: (event: any) => void};
}

const FeatureLayerComponent = ({ url, minZoom = 0, eventHandlers = {} }: FeatureLayerProps) => {
  const map = useMap();

  const layer = featureLayer({
    url,
    minZoom,
  }).addTo(map);

  // Attach event handlers
  Object.keys(eventHandlers).forEach((event) => {
    layer.on(event, eventHandlers[event]);
  });

  return null;
};

export default FeatureLayerComponent;
