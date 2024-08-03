import { CartWidget } from "./CartWidget"

export function NavBar() {
    return (
            <nav className="container mx-auto flex justify-between items-center">
                <ul className="flex space-x-4 text-white">
                    <li><a href="/" className="hover:text-orange-500">Home</a></li>
                    <li><a href="/" className="hover:text-orange-500">Store</a></li>
                    <li><a href="/" className="hover:text-orange-500">About us</a></li>
                </ul>
                <CartWidget />
            </nav>
    );
};

