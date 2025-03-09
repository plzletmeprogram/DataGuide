import React from 'react';

interface DataCardProps {
  title: string;
  description: string;
  source: string;
  isSpatial: boolean;
  openModal: (content: React.ReactNode) => void;
}

const DataCard: React.FC<DataCardProps> = ({ title, description, source, isSpatial, openModal }) => {
  const modalContent = isSpatial ? (
    <iframe
      src={source}
      width="600"
      height="450"
      className="border-0"
      allowFullScreen={false}
      loading="lazy"
    ></iframe>
  ) : (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="border px-4 py-2">Header 1</th>
          <th className="border px-4 py-2">Header 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Data 1</td>
          <td className="border px-4 py-2">Data 2</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-4 m-4">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button onClick={() => openModal(modalContent)} className="text-blue-500 hover:text-blue-700 underline">
          Source
        </button>
      </div>
    </div>
  );
};

export default DataCard;
