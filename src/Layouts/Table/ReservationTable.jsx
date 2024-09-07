import React from "react";
import {
  CSV,
  Export,
  Import,
  PlusSquare,
  QrCode,
  Search,
  Share,
  Trash,
} from "../../assets/Icons";
import MainButton from "../../Components/Buttons/MainButton";

const data = [
  {
    name: "Yoga Aja",
    wishes: "yo congrats lah ",
    attend: "yes",
    guest: "2",
    // checkin: true,
  },
  {
    name: "Yoga Aja",
    wishes: "congratulation dude",
    attend: "yes",
    guest: "1",
    // checkin: true,
  },
  {
    name: "Yoga Aja",
    wishes: "i wish you happy always",
    attend: "no",
    guest: "2",
    // checkin: true,
  },
  {
    name: "Yoga Aja",
    wishes: "don’t forget the angpao",
    attend: "no",
    guest: "0",
    // checkin: true,
  },
  {
    name: "Yoga Aja",
    wishes: "happy wedding dude",
    attend: "yes",
    guest: "2",
    // checkin: true,
  },
];

function ReservationTable() {
  return (
    <div className="bg-[#F5F1EE] mt-28 mb-10 p-10 w-11/12 mx-auto">
      <div className="flex items-center justify-between">
        <h5 className="uppercase text-sm-h5 md:text-md-h5 lg:text-h5 font-bold tracking-widest">
          reservation list
        </h5>
        {/* Search */}
        <div class="flex items-center w-1/4 border border-[#505050] rounded-md p-3 gap-x-2 bg-transparent">
          <span class="text-gray-500 text-sm mr-2">
            <Search />
          </span>
          <input
            type="text"
            placeholder="SEARCH"
            class="bg-gray-100 outline-none text-gray-500 text-sm placeholder-gray-500"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
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
        <div className="flex items-center gap-x-4">
          <button>
            <QrCode />
          </button>
          <button>
            <CSV />
          </button>
          <button>
            <MainButton label="check in" />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full text-left text-gray-600">
          <thead>
            <tr>
              <th className="p-4">NAME ⬍</th>
              <th className="p-4">WISHES ⬍</th>
              <th className="p-4">ATTEND ⬍</th>
              <th className="p-4">GUEST ⬍</th>
              <th className="p-4 text-center">CHECKIN</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="p-4">{item.name.toUpperCase()}</td>
                <td className="p-4">{item.wishes}</td>
                <td className="p-4">{item.attend}</td>
                <td className="p-4">{item.guest}</td>
                <td className="p-4 grid">
                  <input
                    type="checkbox"
                    // checked={item.checkin}
                    className="form-checkbox h-4 w-4 text-gray-600 m-auto"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReservationTable;
