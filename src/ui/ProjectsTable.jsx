import React from "react";

import { TableRow } from "./TableRow";
import { projects } from "../service/data";
export const ProjectsTable = () => {
  return (
    <div className="relative">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="bg-white border-b text-[13px] text-gray-500 font-normal dark:border-gray-700 uppercase tracking-[2px]">
          <tr>
            <th scope="col" className="px-6 py-3">
              <span className="block">Name</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="block">Leader</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="block">Team</span>
            </th>
            <th scope="col" className="px-10 py-3">
              <span className="block">Status</span>
            </th>
            <th scope="col" className="px-4 py-3">
              <span className="block">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <TableRow key={index} project={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
};