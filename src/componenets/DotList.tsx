import React from "react";

interface DotListProps {
  item: string;
}

const DotList: React.FC<DotListProps> = ({ item }) => {
  return (
    <div className="flex items-center">
      <span className="mr-2 text-primary text-3xl">&#8226;</span>
      {item}
    </div>
  );
};

export default DotList;
