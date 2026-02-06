type MenuItemCardProps = {
  name: string;
  description?: string;
  price: string;
  image?: string;
};

export const MenuItemCard = ({
  name,
  description,
  price,
  image,
}: MenuItemCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-neutral-200">
      {image && (
        <div className="w-full h-40 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-lg font-semibold leading-snug">{name}</h3>
          <span className="text-base font-medium text-neutral-700 whitespace-nowrap">
            {price}
          </span>
        </div>

        {description && (
          <p className="text-sm text-neutral-500 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
