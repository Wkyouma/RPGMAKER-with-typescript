import './Card.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Card = ({ nome, imagem, especie, corDeFundo, aoDeletar, aoFavoritar, favorito }) => {
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
