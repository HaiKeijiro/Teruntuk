import React, { useState } from "react";
import {
  Export,
  Import,
  PlusSquare,
  Search,
  Share,
  FullTrash,
} from "../../assets/Icons";

import ImportModal from "../Modal/InvList/ImportModal";
import AddModal from "../Modal/InvList/AddModal";

const data = [
  {
    name: "Yoga Aja",
    email: "yoga@gmail.com",
    whatsapp: "+62 81 12345831",
    status: "SENT WA",
    action: true,
  },
  {
    name: "Yoga Aja",
    email: "yoga@gmail.com",
    whatsapp: "+62 81 12345831",
    status: "SENT WA",
    action: false,
  },
  {
    name: "Yoga Aja",
    email: "yoga@gmail.com",
    whatsapp: "+62 81 12345831",
    status: "SENT EMAIL",
    action: false,
  },
  {
    name: "Yoga Aja",
    email: "yoga@gmail.com",
    whatsapp: "+62 81 12345831",
    status: "NO ACTION",
    action: false,
  },
  {
    name: "Yoga Aja",
    email: "yoga@gmail.com",
    whatsapp: "+62 81 12345831",
    status: "NO ACTION",
    action: false,
  },
];

function InvitationTable() {
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // isDelete?
  const [isDelete, setIsDelete] = useState(false);
  const handleDelete = () => {
    setIsDelete(!isDelete);
  };

  return (
    <div className="bg-[#F5F1EE] relative mt-28 mb-10 p-10 w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h5 className="uppercase text-sm-h5 md:text-md-h5 lg:text-h5 font-bold tracking-widest">
          invitation list
        </h5>
        {/* Search */}
        <div className="flex items-center w-full md:w-1/4 border border-[#505050] rounded-md p-3 gap-x-2 bg-transparent">
          <span className="text-gray-500 text-sm mr-2">
            <Search />
          </span>
          <input
            type="text"
            placeholder="SEARCH"
            className="bg-gray-100 outline-none text-gray-500 text-sm placeholder-gray-500"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="hidden md:flex items-center gap-4">
          <div className="space-y-4">
            <p className="uppercase text-[#505050] tracking-widest font-bold font-mulish">
              filter
            </p>
            <select className="border border-[#505050] bg-transparent p-1 rounded-sm text-text focus:outline-none">
              <option value="templates">Semua Template</option>
              <option value="templates">Semua Template</option>
              <option value="templates">Semua Template</option>
            </select>
          </div>
          <div className="space-y-4">
            <p className="uppercase text-[#505050] tracking-widest font-bold font-mulish">
              Menampilkan
            </p>
            <select className="border border-[#505050] bg-transparent p-1 rounded-sm text-text focus:outline-none">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-x-4 mt-2 md:mt-0">
          <button onClick={() => setIsImportModalOpen(true)}>
            <Import color="#505050" />
          </button>
          <button>
            <Export color="#505050" />
          </button>
          <button onClick={() => setIsAddModalOpen(true)}>
            <PlusSquare color="#505050" />
          </button>
          <button>
            <Share color="#505050" />
          </button>
          <button onClick={handleDelete}>
            <FullTrash color="#505050" />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full text-left text-gray-600">
          <thead>
            <tr>
              <th className="p-4 cursor-pointer">NAME ⬍</th>
              <th className="p-4 cursor-pointer">EMAIL ⬍</th>
              <th className="p-4 cursor-pointer">WHATSAPP ⬍</th>
              <th className="p-4 cursor-pointer">STATUS ⬍</th>
              <th className="p-4 cursor-pointer text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="p-4">{item.name.toUpperCase()}</td>
                <td className="p-4">{item.email.toUpperCase()}</td>
                <td className="p-4">{item.whatsapp}</td>
                <td className="p-4">{item.status}</td>
                <td className="p-4 grid">
                  {isDelete ? (
                    <div className="flex items-center justify-center cursor-pointer">
                      <FullTrash color="#505050" />
                    </div>
                  ) : (
                    <input
                      type="checkbox"
                      checked={item.action}
                      className="form-checkbox h-4 w-4 text-gray-600 m-auto"
                      readOnly
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isImportModalOpen && (
        <ImportModal closeModal={() => setIsImportModalOpen(false)} />
      )}
      {isAddModalOpen && (
        <AddModal closeModal={() => setIsAddModalOpen(false)} />
      )}
    </div>
  );
}

export default InvitationTable;
