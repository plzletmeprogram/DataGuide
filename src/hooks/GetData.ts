import { useState, useEffect } from "react";

export interface DataItem {
  attributes: {
    ID_Code: string;
    Title_: string;
    Source: string;
    Endpoint_: string;
    Source_URL_: string;
    Format: string;
    Summary: string;
    Thumbnail?: string | undefined;
    Theme?: string[];
  };
}

const useGetData = () => {
  const [data, setData] = useState<DataItem[]>([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://services2.arcgis.com/PpbvckyUgaYqseNQ/ArcGIS/rest/services/UrbanDesign_CommunityPlanning_DataSources_FINAL/FeatureServer/0/query?where=1%3D1&outFields=*&f=pjson"
        );
        const jsonData = await response.json();
        setData(jsonData.features || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default  useGetData;

