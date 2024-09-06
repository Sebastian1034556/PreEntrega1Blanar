import { Link } from "react-router-dom"

export function BrandComponent({linkUrl,imageUrl}){
    return (
        <Link to={linkUrl}>
            <img src={imageUrl} alt="Logo de Techspace" className="h-24 mr-5" />
        </Link>
    )
}