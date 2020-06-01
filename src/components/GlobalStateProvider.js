import React, {createContext, useState, useMemo, Children} from 'react';

/* Global State */
const initialShowModal = { showModal: false, setShowModal: undefined };
const StateShowModal = createContext(initialShowModal);

const GlobalStateProvider = ({children}) => {
    const [showModal, setShowModal] = useState(initialShowModal);
    
    const contextShowModal = useMemo(() => ({showModal, setShowModal}), [showModal]);

    return (
        <StateShowModal.Provider value={contextShowModal}>
            {children}
        </StateShowModal.Provider>
    );
}

export default GlobalStateProvider;