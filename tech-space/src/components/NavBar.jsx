import { CartWidget } from "./CartWidget";
import { useState } from "react";
import {BurguerMenu} from "./BurguerMenu";
import { LinkComponent } from "./LinkComponent";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav className="container mx-auto flex justify-between items-center">
            <BurguerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            <ul className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-white ${isOpen ? 'block' : 'hidden'} lg:block`}>
                <LinkComponent linkUrl="/category/Smartphones" linkText="Celulares" />
                <LinkComponent linkUrl="/category/computers" linkText="Computacion" />
                <LinkComponent linkUrl="/category/accessories" linkText="Accesorios" />
            </ul>
            <CartWidget />
        </nav>
    );
}
