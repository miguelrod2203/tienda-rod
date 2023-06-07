import { createContext, useContext, useEffect, useState } from "react";

export const FavoritoContext = createContext();

export const useFavoritoContext = () => {
    return useContext(FavoritoContext);
}

export const FavoritoProvider = ( { children } ) => {

    const initialState = JSON.parse(localStorage.getItem("favorito")) || [];
    
    const [favorito, setFavorito] = useState(initialState);

    const addToFavorito = (product) => {
        setFavorito([...favorito, product]);
    }

    const productInFavorito = (id) => {
        return favorito.some(product => product.id === id);
    }
    
    const removeFromFavorito = (id) => {
        setFavorito(favorito.filter(product => product.id !== id));
    }

    useEffect(() => {
        localStorage.setItem("favorito", JSON.stringify(favorito));
    }, [favorito]);

    console.log(favorito)

    return(
        <FavoritoContext.Provider value={{
            favorito, 
            addToFavorito,
            productInFavorito,
            removeFromFavorito
        }}>
            {children}
        </FavoritoContext.Provider>
    )
}