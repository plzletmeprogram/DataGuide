import DataCard from "./DataCard";
import useGetData, { DataItem } from "../../hooks/GetData";


interface Filters {
  source: string[];
  theme: string[];
}

interface DataBoardProps {
  filters: Filters;
}

const DataBoard: React.FC<DataBoardProps> = ({ filters }) => {
  const { source, theme } = filters;
  const data: DataItem[] = useGetData();


  console.log(filters);

  const filteredData = data.filter(
    (item) =>
      (source.length === 0 || source.includes(item.attributes.Source)) &&
      (theme.length === 0 || item.attributes.Theme?.some((t: string) => theme.includes(t)))
  );

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {filteredData.map((item, index) => (
          <DataCard
            endpoint={item.attributes.Endpoint_}
            sourceUrl={item.attributes.Source_URL_}
            key={index}
            isSpatial={item.attributes.Format === "Vector"}
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