import React from "react";

interface IProps {
  title: string;
}

const TableHead = ({ title }: IProps) => {
  return (
    <thead className="text-xs text-sky-700 bg-sky-50 dark:bg-sky-700 dark:text-sky-300">
      <tr>
        <th scope="col" className="px-6 py-3 w-96">
          {title}
        </th>
        <th scope="col" className="px-6 py-3 w-32">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
