import { ItemContainer } from "./ItemContainer"
import { ItemContext } from "../../context/ItemContext"
import { useContext } from "react"

export function ItemListContainer(){
    const [itemList] = useContext(ItemContext)
    return itemList.map(i => <ItemContainer key={i.id} item={i} />)
}