import './Card.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface CardProps{
  nome: string;
  imagem: string;
  especie: string;
  corDeFundo: string;
  favorito: boolean;  // Novo campo para indicar se o card está favoritado ou não. Inicialmente, é false.  // Novo método para favoritar o card.  // Novo método para desfavoritar o card.  // Novo evento para ao deletar o card.  // Novo evento para ao favoritar o card.  // Novo estado para o card, indicando se ele está favoritado ou não.
  aoDeletar: () => void;
  aoFavoritar: () => void;
  
}
const Card = ({ nome, imagem, especie, corDeFundo, aoDeletar, aoFavoritar, favorito }: CardProps) => {
  function favoritar() {
    aoFavoritar();
  }

  return (
    <div className="Card">
      <AiFillCloseCircle size={25} className="deletar" onClick={aoDeletar} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{especie}</h5>
        <div className="favoritar">
          {favorito ? (
            <AiFillHeart onClick={favoritar} />
          ) : (
            <AiOutlineHeart onClick={favoritar} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
