import { useParams } from "react-router-dom";
import { CounterComponent } from "./CounterComponent";
import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";
import { CartContext } from "../context/CartContext";

export function ItemDetail() {
    const [itemList] = useContext(ItemContext)
    const { itemId } = useParams();
    const item = itemList.find(i => i.id === itemId);
    const [,,addItem] = useContext(CartContext)

    const handleClick = () => {
        addItem(item)
    }

    if (!item) {
        return <p>Item not found</p>;
    }

    return (
        <div className="flex flex-col items-center max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg max-h-full">
            <img
                src={item.image}
                alt={item.name}
                className=" w-1/2 h-auto mb-4 rounded-lg shadow-md"
            />
            <h1 className="text-2xl font-bold mb-2 text-gray-800">{item.name}</h1>
            <h3 className="text-lg font-semibold mb-4 text-gray-600">{item.detail}</h3>
            <p className="text-xl font-semibold text-gray-800">${item.price}</p>
            <CounterComponent />
            <button onClick={handleClick} className="px-4 py-2 border border-transparent bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Comprar
            </button>

        </div>
    );
}
