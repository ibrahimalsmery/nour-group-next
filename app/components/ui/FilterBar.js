export default function FilterBar({ filters, activeFilter, onFilterChange }) {
    return (
        <div className="flex flex-wrap gap-2 justify-center mb-8">
            {filters.map((filter) => (
                <button
                    key={filter.value}
                    onClick={() => onFilterChange(filter.value)}
                    className={`px-4 py-2 rounded-full font-semibold transition-colors ${activeFilter === filter.value
                            ? 'bg-gold-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    )
}