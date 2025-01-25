import './Lista.css'

interface ListaProps{
    aoAlterado : (valor:string) => void
    obrigatorio: boolean;
    valor: string;
    label:string;
    itens: string[];
}

const Lista = (props: ListaProps) => {
    return (
        <div className='Lista'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Lista