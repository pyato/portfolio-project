import React, { createContext, useState } from "react";

const ExperienceContext = createContext();
const { Provider } = ExperienceContext;

const ExperienceProvider = ({ children }) => {
    const [viewMore, setViewMore] = useState(false);

    return (
        <Provider
            value={{
                viewMore,
                setViewMore
            }}
        >
            {children}
        </Provider>
    )
}

export { ExperienceContext, ExperienceProvider };