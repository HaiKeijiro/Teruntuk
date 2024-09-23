import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailListPengguna from "../../../api/list-pengguna.json";
import { Search } from "../../assets/Icons";

function GuessTable() {
  const { id } = useParams();
  const data = DetailListPengguna;
  const navigate = useNavigate();

  const user = data[id];

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="bg-[#F5F1EE] relative mt-28 mb-10 p-10 w-11/12 mx-auto">
      <button
        onClick={() => navigate("/admin/list-pengguna")}
        className="px-4 py-1 bg-main text-white rounded-sm"
      >
        back
      </button>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h5 className="uppercase text-sm-h5 md:text-md-h5 lg:text-h5 font-bold tracking-widest">
          Tabel Tamu
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
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full text-left text-gray-600">
          <thead>
            <tr>
              <th className="p-4 cursor-pointer">NAMA TAMU ⬍</th>
              <th className="p-4 cursor-pointer">NO HP ⬍</th>
              <th className="p-4 cursor-pointer">EMAIL ⬍</th>
              <th className="p-4 cursor-pointer text-center">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {user.tamu.map((tamu, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="p-4">{tamu.nama_tamu}</td>
                <td className="p-4">{tamu.no_hp}</td>
                <td className="p-4">{tamu.email}</td>
                <td className="p-4 flex items-center justify-center">
                  {tamu.status ? "Hadir" : "Tidak Hadir"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GuessTable;
