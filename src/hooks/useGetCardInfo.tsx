import { useQuery } from '@tanstack/react-query';

// Define the DataItem interface (reuse from GetData.ts if possible)
export interface DataItem {
  attributes: {
    ID_Code: string;
    Title_: string;
    Source: string;
    Endpoint_: string;
    Source_URL_: string;
    Format: string;
    Summary: string;
    Thumbnail?: string;
    Theme?: string[];
  };
}

// Plain async function for React Query
export async function fetchCardInfo(): Promise<DataItem[]> {
  const response = await fetch(
    "https://services2.arcgis.com/PpbvckyUgaYqseNQ/ArcGIS/rest/services/UrbanDesign_CommunityPlanning_DataSources_FINAL/FeatureServer/0/query?where=1%3D1&outFields=*&f=pjson"
  );
  const jsonData = await response.json();
  return jsonData.features as DataItem[] || [];
}

// Custom hook to fetch card info data
export function useGetCardInfo() {
  return useQuery<DataItem[]>({
    queryKey: ['cardInfo'],
    queryFn: fetchCardInfo,
  });
}
