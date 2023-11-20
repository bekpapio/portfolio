import { useState } from "react";
import SideBar from "./SideaBar";
import Pagination from "./Pagination";
import { sideBarData } from "../utils/sideBarData";

export default function Projects() {
  const [filteredOption, setFilteredOption] = useState<string>("all");
  const [itemsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(filteredOption);
  const handlefilterChange = (option:string) => {
    setFilteredOption(option);
    setCurrentPage(1);
  };

  const filteredItems = sideBarData.filter((item) => {
    const matchesFiltered =
      filteredOption === "all" ||  filteredOption === "All" ||
      item.name.toLocaleLowerCase() === filteredOption.toLocaleLowerCase();
    return matchesFiltered;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className="mb-3 space-y-2">
        <h1 className="text-white text-center text-2xl font-bold">Projects</h1>
        <div className="w-[60px] h-[2px] bg-primary mx-auto"></div>
      </div>
      <div className="grid sm:grid-cols-5 gap-3">
        <div className="col-span-1">
          <SideBar
            data={sideBarData}
            activeTab={filteredOption}
            onClick={handlefilterChange}
          />
        </div>
        <div className="col-soan-4 min-h-[30vh] flex flex-col justify-between">
          <div className="">{filteredOption}</div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredItems.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}
