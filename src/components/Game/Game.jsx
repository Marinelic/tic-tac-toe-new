import { useState } from "react";
// import Board from "./Board.jsx";

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

    const status = xIsNext ? "X to move" : "O to move";


    return (
        <main className="bg-green-500 min-h-screen grid place-items-center p-6">
            <div className="">
                <h1 className="">
                    TIC-TAC-TOE
                </h1>

                <p className="">
                    {status}
                </p>

                {/* <Board /> */}

                <div className="">
                    <button
                        onClick={() => {
                            setSquares(Array(0).fill(null));
                            setXIsNext(true);
                        }}
                        className=""
                    >
                        Reset
                    </button>
                </div>
            </div>
        </main>
    )
}