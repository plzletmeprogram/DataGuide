import { useQuery } from '@tanstack/react-query';


export interface DataItem {
  attributes: {
    ID_Code: string;
    Title_: string;
    Source: string;
    Endpoint_: string;
    Source_URL_: string;
    Format: string;
    Summary: string;
    Thumbnail: string;
    Theme?: string[];
  };
}

export async function fetchCardInfo(): Promise<DataItem[]> {
  const response = await fetch(
    "https://services2.arcgis.com/PpbvckyUgaYqseNQ/ArcGIS/rest/services/UrbanDesign_CommunityPlanning_DataSources_FINAL/FeatureServer/0/query?where=1%3D1&outFields=*&f=pjson"
  );
  const jsonData = await response.json();
  // Only return items with a non-empty ID_Code
  return (jsonData.features as DataItem[]).filter(
    (item) => !!item?.attributes?.ID_Code
  ) || [];
}


export function useGetCardInfo() {
  return useQuery<DataItem[]>({
    queryKey: ['cardInfo'],
    queryFn: fetchCardInfo,
  });
}
