import { useContext } from "react";
import {ItemListContainer} from "./ItemListContainer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ItemContext } from "../../context/ItemContext";

export function HomeComponent() {
    const [itemList] = useContext(ItemContext)
    const { id } = useParams();
    const filteredItemList = itemList.filter(i => i.category === id);

    if (id && filteredItemList.length === 0) {
        return (
            <div className="container mx-auto p-4 text-center">
                <h2 className="text-xl font-bold">No se encontraron productos en esta categoría</h2>
                <Link to="/" className="text-blue-500 hover:underline">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-4">
            <ItemListContainer itemList={filteredItemList.length > 0 ? filteredItemList : itemList} />
        </section>
    );
}
