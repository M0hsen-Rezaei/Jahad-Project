import { createContext, useState, useEffect } from "react";

export const BuyCources = createContext({
    items: [],
    addToBuyList: (id) => {},
    deleteFromBuyList: (id) => {}
});

export function CartProvider({ children }) {
    const [cource, setCource] = useState([]);

    // بارگذاری سبد خرید از localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCource(JSON.parse(savedCart));
        }
    }, []);

    // ذخیره‌سازی سبد خرید در localStorage
    useEffect(() => {
        if (cource.length > 0){
            localStorage.setItem('cart', JSON.stringify(cource));
        }
    }, [cource]);

    function addToBuyList(id, name, img, price) {
        const isRepete = cource.some(item => item.id === id);
        if (!isRepete) {
            setCource([...cource, { id, name, img, price }]);
        }
    }

    function deleteFromBuyList(id) {
        setCource(cource => cource.filter(item => item.id !== id));
    }

    const ContextValue = {
        items: cource,
        addToBuyList,
        deleteFromBuyList,
        setCource,
    };

    return (
        <BuyCources.Provider value={ContextValue}>
            {children}
        </BuyCources.Provider>
    );
}