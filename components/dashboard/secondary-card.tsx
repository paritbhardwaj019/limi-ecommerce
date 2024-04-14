interface SecondaryCardProps {
  label: string;
  value: number;
  icon: any;
}

export default function SecondaryCard({
  label,
  value,
  icon: Icon,
}: SecondaryCardProps) {
  return (
    <div className="p-4 w-full border border-gray-400 rounded-lg hover:bg-gray-100/10 hover:scale-105 hover:transition-all duration-200 cursor-pointer">
      <div className="flex items-center justify-between">
        <p className="text-sm">{label}</p>
        <Icon className="size-4" />
      </div>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
}
