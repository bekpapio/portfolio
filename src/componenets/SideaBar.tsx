import React from "react";

interface Tab {
  id: number;
  name: string;
}

interface SidebarProps {
  data: Tab[];
  onClick: (title: string) => void;
  activeTab?: string;
}

const SideBar: React.FC<SidebarProps> = ({
  data,
  onClick,
  activeTab = "all",
}) => {
  return (
    <aside className="w-full h-full pt-3 flex items-center justify-center bg-secondary overflow-y-auto overflow-x-auto">
      <div>
        <div className="flex flex-wrap md:flex-col border-b">
          {data.map((tab, index) => (
            <button
              key={index}
              className={`${
                tab.name.toLocaleLowerCase() === activeTab.toLocaleLowerCase()
                  ? "bg-primary text-white"
                  : ""
              } py-2 px-4 focus:outline-none capitalize`}
              onClick={() => onClick(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        {/* <div className="mt-2">{tabs[activeTab].content}</div> */}
      </div>
    </aside>
  );
};

export default SideBar;
