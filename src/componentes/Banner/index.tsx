import './Banner.css';
import React from 'react';

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}
export const Banner = ({ enderecoImagem, textoAlternativo }:BannerProps) => {
    return (
        <header className='banner'>
            <img src={enderecoImagem} alt={textoAlternativo} />
            <h1 className="banner-title">RPG Maker</h1>
        </header>
    );
}
