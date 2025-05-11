import DataCard from "./DataCard";
import data from "../../data/data.json";

interface Filters {
  source: string[];
  theme: string[];
}

interface DataBoardProps {
  filters: Filters;
}

const DataBoard: React.FC<DataBoardProps> = ({ filters }) => {
  const { source, theme } = filters;
  console.log(filters)
  const filteredData = data.filter(
    (item) =>
      (source.length === 0 || source.includes(item.source)) &&
      (theme.length === 0 || item.theme.some((t: string) => theme.includes(t)))
  );

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {filteredData.map((item, index) => (
          <DataCard endpoint= {item.endpoint} sourceUrl= {item.sourceUrl} key={index} isSpatial={item.isSpatial} title={item.title} description={item.description} source={item.source} themes={item.theme} imgSource={item.image} />
        ))}
      </div>
    </div>
  );
};

export default DataBoard;