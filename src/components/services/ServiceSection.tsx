export type ServiceProps = {
  title: string;
  items: ServiceItem[];
};

export type ServiceItem = {
  name: string;
  component: React.ReactNode;
};

const ServiceSection = ({ items, title }: ServiceProps) => {
  return (
    <div
      className="flex items-center justify-between flex-col 
    "
    >
      <h2 className="text-3xl font-medium text-gray-500 ">{title}</h2>

      <div className="grid grid-cols-4 md:grid-cols-5 mt-2 gap-2">
        {items.map((item, index) => (
          <span
            key={`${item.name}-${index}`}
            className=" flex-shrink-0 w-28 h-28 bg-white p-2 shadow-lg rounded-md flex flex-col gap-2 items-center justify-center"
          >
            {item.component}
            <p>{item.name}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
