'use client'
import { useState,} from 'react'
import styles from './Header.module.css'
import BookingWidget from '../../ui/BookingWidget'

//ts types defys
type NavItem = {
    label: string;
    href: string;
    external: boolean;
}

const navItems: NavItem[] = [
    { label: 'LA ESTANCIA', href: '#homestead', external: false },
    { label: 'GATRONOMÍA', href: '#gastronomy', external: false },
    { label: 'ACTIVIDADES', href: '#activities', external: false },
    { label: 'SPA', href: '#spa', external: false },
    { label: 'CONTACTO', href: '#contact', external: false },
    { label: 'BLOG', href: 'https://blog.donjoaquin.com/es/', external: true }
]


export default function Header() {
    //states
    const [isOpen, setIsOpen] = useState(false)
    const [isWidgetOpen, setWidgetOpen] = useState(false)


    return (
        <nav  className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
            <img src={isOpen ? "/images/logo_black.png" : "/images/logo_white.png"} alt="logo" />

            <div className={styles.navRight}>
                <button onClick={() => setWidgetOpen(!isWidgetOpen)} className={styles.reservarBtn}>
                    RESERVAR
                </button>
                <button onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menú" className={styles.hamburgerMenu}>
                        {!isOpen &&(
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"  strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 8l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 16l16 0" />
                        </svg>
                        )}
                        {isOpen &&(
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                        </svg>
                        )}     
                </button>
            </div>
                <div className={`${styles.openedMenu} ${isOpen ? styles.visible : ''}`}>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    target={item.external ? "_blank" : undefined}
                                    rel={item.external ? "noopener noreferrer" : undefined}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {isWidgetOpen &&(<BookingWidget></BookingWidget> )}

        </nav>
    )
}