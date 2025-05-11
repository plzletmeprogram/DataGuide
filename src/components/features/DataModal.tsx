import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

interface DataModalProps {
  title: string;
  description: string;
  source: string;
  themes: string[];
  endpoint: string;
  sourceUrl: string;
}

const DataModal: React.FC<DataModalProps> = ({ title, description, source, themes, endpoint, sourceUrl }) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        View Details
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel */}
          <DialogPanel className="max-w-lg bg-white p-6 rounded-lg shadow-md space-y-4">
            <DialogTitle className="font-bold text-lg">{title}</DialogTitle>
            <Description className="text-gray-700">{description}</Description>

            {/* Sources Section */}
            <div className="border-t pt-2">
              <h3 className="text-sm font-semibold text-darkceladon">Source</h3>
              <p className="text-gray-600 text-xs">{source}</p>
            </div>

            {/* Themes Section */}
            <div className="border-t pt-2">
              <h3 className="text-sm font-semibold text-darkceladon">Themes</h3>
              <p className="text-gray-600 text-xs">{themes.join(", ")}</p>
            </div>

            {/* URLs Section */}
            <div className="border-t pt-2 flex flex-col space-y-2">
              <button
                className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition"
                onClick={() => navigator.clipboard.writeText(endpoint)}
              >
                Copy Endpoint
              </button>
              <button
                className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition"
                onClick={() => navigator.clipboard.writeText(sourceUrl)}
              >
                Copy Source URL
              </button>
            </div>

            {/* Close Button */}
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default DataModal;