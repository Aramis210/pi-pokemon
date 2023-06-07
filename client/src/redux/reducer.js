import { GET_POKEMONS, FILTER_BY_TYPES, FILTER_CREATED, ORDER_BY_NAME, GET_POKEMON_NAME} from "./actions";

const initialState = {
    pokemons: [],
    allPokemons: []
};

// { id: 1, name: "bulbasaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg", hp: 20, attack: 40, defense: 30 },
//     { id: 2, name: "charmander", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg", hp: 30, attack: 50, defense: 25 },
//    {id: 3, name: "squirtle", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg", hp: 35, attack: 45, defense: 55 }

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {...state, pokemons: action.payload, allPokemons: action.payload}
        case GET_POKEMON_NAME:
            return {...state, pokemons: action.payload}
        case FILTER_BY_TYPES:
            const allPokemons = state.allPokemons
            const typesFiltered = action.payload === "allTypes" ? allPokemons : allPokemons.filter(poke => poke.type[0] === action.payload || (poke.type[1] && poke.type[1] === action.payload) )            
            return {...state, pokemons: typesFiltered}
        case FILTER_CREATED:                     
            const createdFilter = action.payload === 'created' ? state.allPokemons.filter (poke => poke.createdInDb === "true") : state.allPokemons.filter (poke => poke.createdInDb === "false") 
            return {...state, pokemons: action.payload === "all" ? state.allPokemons : createdFilter}
        case ORDER_BY_NAME:
            let sortedArray = action.payload === "asc" 
            ? state.pokemons.sort(function (a, b){
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1;
                }
                return 0;
            })
            : state.pokemons.sort(function (a, b){
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1;
                }
                return 0
            })
            return {...state, pokemons: sortedArray}
        default:
            return {...state};
    }
};

export default rootReducer;