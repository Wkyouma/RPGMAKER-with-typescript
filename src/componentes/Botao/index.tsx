import { ReactElement } from 'react';
import './Botao.css';


interface BotaoProps{
    children: ReactElement | string;
}
const Botao = (props: BotaoProps) => {
    return (
        <button className='Botao'>{props.children}</button>
    )
}
export default Botao;