import {useState} from 'react'; 
import Campo from '../Campo';
import Lista from '../Lista';
import Botao from '../Botao';
import './Formulario.css';
import { v4 as uuidv4 } from 'uuid'; 
import { Iaventureiro } from '../../Shared/Interface/Iaventureiro';
interface FormularioProps {
  aoAventureiroCadastrado: (aventureiro: Iaventureiro) => void;
  especies: string[];
  classes: string[];
  
 

}
const Formulario = (props:FormularioProps) =>{

  const [nome,setNome] = useState('')
  const [especie,setEspecie] = useState('')
  const [imagem,setImagem] = useState('')
  const [classe, setClasse] = useState('')
  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    props.aoAventureiroCadastrado({
        id: uuidv4(), 
        nome,
        especie,
        imagem,
        classe,
        favorito: false,
    })
    setNome('')
    setEspecie('')
    setImagem('')
    setClasse('')
}
 
    return (
      <section className='Formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha para criar o card do Aventureiro</h2>
            <Campo obrigatorio={true} label='Nome' valor={nome} aoAlterado={valor => setNome(valor)}></Campo>
            <Lista obrigatorio={true} label="especie" itens={props.especies} valor={especie} aoAlterado={(valor: string) => setEspecie(valor)} />


            <Campo label='Imagem' valor={imagem} aoAlterado={valor=> setImagem(valor)}></Campo>
            <Lista obrigatorio={true}  label="Classe" itens = {props.classes} valor = {classe} aoAlterado={(valor: string) => setClasse(valor)} ></Lista>
            <Botao>Criar</Botao>
        </form>
      </section>
    )
}
export default Formulario