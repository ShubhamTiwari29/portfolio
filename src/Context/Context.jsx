import React, { createContext, useEffect, useState } from "react";
// import data from '../assets/Project'
import { databases } from '../Appwrite/appwriteConfig';

export const Context = createContext(null);



const ContextProvider = (props) => {
    const [documents, setDocuments] = useState([]);


    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await databases.listDocuments(
                    import.meta.env.VITE_DATABASE_ID,
                    import.meta.env.VITE_PROJECT_DETAIL_COLLECTION_ID
                );
                setDocuments(response.documents);


            } catch (error) {
                console.log(error);
            }
        };

        fetchDocuments();
    }, []);


    const contextValue = { documents }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
