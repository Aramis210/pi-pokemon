import React from "react";

export default function Paginado({ charactersPerPage, pokemons, paginado }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(pokemons / charactersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="paginado">
                {pageNumbers &&
                    pageNumbers.map(number => (                        
                            <button key={number} onClick={() => paginado(number)}>{number}</button>                        
                    ))}
            </ul>
        </nav>
    )
}