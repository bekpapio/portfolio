import { useEffect, useRef, useState } from "react";

const ServiceCard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [displayButton, setDisplayButton] = useState<boolean>(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setDisplayButton(
        contentRef.current.scrollHeight !== contentRef.current.clientHeight
      );
    }
  }, []);

  return (
    <div>
      <div className="p-4 w-[250px] bg-secondary rounded-md shadow-md">
        <h1 className="text-center text-primary font-bold text-xl mb-2">Title</h1>
        <p
          ref={contentRef}
          className={`${
            isExpanded ? "overflow-auto max-h-full" : "line-clamp-5"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam
          eligendi pariatur reiciendis similique provident, ipsa voluptatem
          rerum, facere ab nam accusantium. Totam molestias impedit repellat
          consequatur, veritatis aliquid, debitis aperiam ipsam accusantium
          fugit iste iure pariatur corrupti nobis et cumque ratione iusto
          praesentium voluptatibus temporibus hic! Quis fugit consequuntur
          deleniti nostrum beatae. Deserunt quaerat non suscipit exercitationem
          officiis?
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`font-semibold capitalize text-left text-primary hover:text-blue-700 ${
            displayButton ? "visible" : "invisible"
          }`}
        >
          {isExpanded ? "see less" : "see more"}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
