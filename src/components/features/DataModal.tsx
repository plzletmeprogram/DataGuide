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
        className="mt-2 px-4 py-2 bg-[#444] text-white rounded-none border-2 border-[#444] font-bold shadow-[2px_2px_0_0_#aaa] transition hover:bg-[#ff6700]"
      >
        View Details
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-[#444]/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg bg-white p-6 rounded-none shadow-[4px_4px_0_0_#aaa] border-4 border-[#444] space-y-4 font-bold text-[#444]">
            <DialogTitle className="font-bold text-lg text-[#444]" style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 700 }}>{title}</DialogTitle>
            <Description className="text-[#444]">{description}</Description>
            <div className="border-t-2 border-[#444] pt-2">
              <h3 className="text-sm font-bold text-[#444]" style={{ fontFamily: "'Public Sans', sans-serif', fontWeight: 700" }}>Source</h3>
              <p className="text-[#444] text-xs">{source}</p>
            </div>
            <div className="border-t-2 border-[#444] pt-2">
              <h3 className="text-sm font-bold text-[#444]" style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 700 }}>Themes</h3>
              <p className="text-[#444] text-xs">{themes.join(", ")}</p>
            </div>
            <div className="border-t-2 border-[#444] pt-2 flex flex-col space-y-2">
              <button
                className="px-3 py-1 bg-[#444] text-white text-sm font-bold border-2 border-[#444] shadow-[2px_2px_0_0_#aaa] rounded-none transition hover:bg-[#ff6700]"
                onClick={() => navigator.clipboard.writeText(endpoint)}
              >
                Copy Endpoint
              </button>
              <button
                className="px-3 py-1 bg-[#444] text-white text-sm font-bold border-2 border-[#444] shadow-[2px_2px_0_0_#aaa] rounded-none transition hover:bg-[#ff6700]"
                onClick={() => navigator.clipboard.writeText(sourceUrl)}
              >
                Copy Source URL
              </button>
            </div>
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-[#444] text-white rounded-none border-2 border-[#444] font-bold shadow-[2px_2px_0_0_#aaa] transition hover:bg-[#ff6700]">
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