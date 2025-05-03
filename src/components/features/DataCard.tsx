import React from 'react';
import DataModal from './DataModal';

interface DataCardProps {
  title: string;
  description: string;
  source: string;
  isSpatial: boolean;

}

const DataCard: React.FC<DataCardProps> = ({ title, description, source, isSpatial }) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-darkceladon bg-brandwheat p-4 m-4">
      <div className="px-6 py-4">
        <h2 className="font-family-sans font-medium text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
      </div>
      <DataModal/>
    </div>
  );
};

export default DataCard;
