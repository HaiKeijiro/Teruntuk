import React from "react";
import { Search } from "../../assets/Icons";
import DataListWebsite from "../../../api/list-website.json";

function ListWebsite() {
  const data = DataListWebsite;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="mt-28 mb-10 p-10 w-11/12 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h5 className="uppercase text-sm-h5 md:text-md-h5 lg:text-h5 font-bold tracking-widest">
            list website
          </h5>
          {/* Search */}
          <div class="flex items-center w-full md:w-1/4 border border-[#505050] rounded-md p-3 gap-x-2 bg-transparent">
            <span class="text-gray-500 text-sm mr-2">
              <Search />
            </span>
            <input
              type="text"
              placeholder="SEARCH"
              class="bg-transparent outline-none text-gray-500 text-sm placeholder-gray-500"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-0">
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
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full text-left text-gray-600">
            <thead>
              <tr className="uppercase">
                <th className="p-4">domain ⬍</th>
                <th className="p-4">nama pemilik ⬍</th>
                <th className="p-4">no hp ⬍</th>
                <th className="p-4">status ⬍</th>
                <th className="p-4 text-center">konfirmasi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-t border-gray-300">
                  <td className="p-4">{item.domain}</td>
                  <td className="p-4">{item.nama_pemilik.toUpperCase()}</td>
                  <td className="p-4">{item.no_hp}</td>
                  <td className="p-4">{item.status}</td>
                  <td className="p-4 flex justify-center items-center gap-x-2">
                    {item.isConfirmed === true ? <div>holla world</div> : (
                      <>
                        <button className="py-1.5 px-4 bg-red-500 rounded-md text-white">
                          Reject
                        </button>
                        <button className="py-1.5 px-4 bg-green-500 rounded-md text-white">
                          Accept
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListWebsite;