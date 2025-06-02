import DataCard from "./DataCard";
import { useGetCardInfo, DataItem } from "../../hooks/useGetCardInfo";

interface Filters {
  source: string[];
  theme: string[];
}

interface DataBoardProps {
  filters: Filters;
}

const DataBoard: React.FC<DataBoardProps> = ({ filters }) => {
  const { source, theme } = filters;
  const { data, isLoading, error } = useGetCardInfo();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available.</div>;

  const filteredData = (data as DataItem[]).filter(
    (item) =>
      (source.length === 0 || source.includes(item.attributes.Source)) &&
      (theme.length === 0 || item.attributes.Theme?.some((t: string) => theme.includes(t)))
  );

  return (
    <div className="p-2 bg-white text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4">
        {filteredData.map((item: DataItem, index: number) => (
          <DataCard
            id={item.attributes.ID_Code}
            endpoint={item.attributes.Endpoint_}
            sourceUrl={item.attributes.Source_URL_}
            key={index}
            //isSpatial={item.attributes.Format === "Vector"}
            title={item.attributes.Title_}
            description={item.attributes.Summary}
            source={item.attributes.Source}
            themes={item.attributes.Theme || []}
            imgSource={item.attributes.Thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default DataBoard;