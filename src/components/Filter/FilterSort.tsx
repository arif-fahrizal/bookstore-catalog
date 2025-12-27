interface FilterSortProps {
  onChange?: (value: string) => void;
}

export default function FilterSort({ onChange }: FilterSortProps) {
  return (
    <div>
      <select
        id="sortOrder"
        className="w-full px-4 py-2.5 text-white rounded-lg border-none outline-none bg-gray-900"
        onChange={e => onChange?.(e.target.value)}
      >
        <option value="asc">A-Z (Ascending)</option>
        <option value="desc">Z-A (Descending)</option>
      </select>
    </div>
  );
}
