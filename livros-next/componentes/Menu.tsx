import React from 'react'
import Link from 'next/link';

export const Menu: React.FC = () => { 
    return (
        <nav className="navbar navbar-custom navbar-expand-lg menu">
            <Link href="/" className="navbar-brand item-nav"><a>Home</a></Link>
            <Link href="/LivroLista" className="navbar-brand item-nav"><a>Catálago</a></Link>
            <Link href="/LivroDados" className="navbar-brand item-nav"><a>Novo</a></Link>
        </nav>
    );
}