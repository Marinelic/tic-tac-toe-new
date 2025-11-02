

export default function Board ({ squares, onPlay }) {
    return (
        <div className="grid grid-cols-3 gap-2 select-none">
            {squares.map((value, i) =>
                <button
                    key={i}
                    onClick={() => onPlay(i)}
                    className="aspect-square rounded-xl bg-white shadow text-3xl font-bold grid place-items-center hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                        aria-label={`Cell ${i + 1}${value ? ` (${value})` : ""}`}
                >
                    <span
                    className={
                        value === "X"
                        ? "text-indigo-600"
                            : value === "O"
                                ? "text-pink-600"
                                    : "text-transparent"
                        }
                    >
                        {value ?? "•"}
                    </span>
                </button>
            )}
        </div>
    );
}