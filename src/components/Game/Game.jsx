import { useState } from "react";
import Board from "./Board.jsx";

export default function Game() {
    // React memory for squares and whose turn it is
    const [squares, setSquares] = useState(Array(9).fill(null));
    const[xIsNext, setXIsNext] = useState(true);

    // Runs every time you click a square
    function handleClick() {
        if (squares[index]) return;

        const next = squares.slice();
        next[index] = xIsNext ? "X" : "O";

        setSquares(next);
        setXIsNext(!xIsNext);
    }

        function handleReset() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

    const status = xIsNext ? "X to move" : "O to move";


    return (
        <main className="bg-green-200 min-h-screen grid place-items-center p-6">
            <div className="w-full max-w-sm">
                <h1 className="text-3xl font-bold text-center mb-4 text-green-900">
                    TIC-TAC-TOE
                </h1>

                <p className="text-center text-gray-700 mb-4">
                    {status}
                </p>

                {/* <Board /> */}
                    <Board squares={squares} onPlay={handleClick} />

                <div className="mt-6 flex justify-center">
                    <button
                        onClick={handleReset}
                        className="px-4 py-2 bg-yellow-400 rounded-lg text-white font-medium shadow hover:bg-yellow-500 focus:outline-none focus:ring-1 focus:ring-green-900"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </main>
    )
}