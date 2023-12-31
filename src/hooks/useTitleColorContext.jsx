import { useContext, createContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {
    const context = createContext(TitleColorContext);

    if (!context) {
        console.log("Contexto não encontrado!");
    }

    return context;
};
