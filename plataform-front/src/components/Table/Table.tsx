import React from "react";
import TableHead from "./TableHead";

interface Brand {
  id: number;
  name: string;
}
interface IProps {
  brands: Brand[];
}

const Table = ({ brands }: IProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-sky-400 dark:text-sky-300 ">
        <TableHead title="Brands"/>
        <tbody>
          {brands.map((item) => (
            <tr key={item.id} className="bg-white border-b dark:bg-sky-800 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-sky-900 whitespace-nowrap dark:text-white w-40"
              >
                {item.name}
              </th>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;