import ServiceCard from "./ServiceCard";

export default function Service() {
  return (
    <div>
      <div className="mb-3 space-y-2">
        <h1 className="text-white text-center text-2xl font-bold">Services</h1>
        <div className="w-[60px] h-[2px] bg-primary mx-auto"></div>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
}
