import Link from 'next/link'
import { useRouter } from 'next/router';
import Style from './Navbar.module.css';

const Navbar = () => {

    const router = useRouter();

    const menuItems = [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Pricing',
            href: '/pricing'
        },
    ];

    return (
        <nav className={Style['nav-container']}>
            {menuItems.map( ({ text, href }) =>
                <Link key={href} href={href}>
                    <a className={router.pathname == href ? Style.active : ""}>
                        {text}
                    </a>
                </Link>
            )}
        </nav>
    )
}

export default Navbar