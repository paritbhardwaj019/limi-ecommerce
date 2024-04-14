import { Heading, PrimaryCard, SecondaryCard } from "@/components";
import { TEMP_ORDERS_CARDS, TEMP_PRIMARY_CARDS } from "@/data";

export default function () {
  return (
    <div className="w-full">
      <Heading title="Dashboard Overview" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full h-22 mt-4">
        {TEMP_PRIMARY_CARDS.map((el, index) => (
          <PrimaryCard key={index} {...el} />
        ))}
      </div>
      <div className="mt-4">
        <Heading title="Orders Overview" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-22 mt-4">
          {TEMP_ORDERS_CARDS.map((el, index) => (
            <SecondaryCard key={index} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
}
