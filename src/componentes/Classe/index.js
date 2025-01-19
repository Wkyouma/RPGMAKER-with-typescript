import { useState } from 'react';
import Card from '../Card';
import './Classe.css';

const Classe = ({ nome, corPrimaria, corSecundaria, aventureiros, aoDeletar, aoMudarCor, aoMudarCorPrimaria, id, aoFavoritar }) => {
  const [corAtual, setCorAtual] = useState(corSecundaria);
  const [corPrimariaAtual, setCorPrimariaAtual] = useState(corPrimaria);

  const atualizarCorSecundaria = (novaCor) => {
    setCorAtual(novaCor);
    aoMudarCor(novaCor, id);
  };

  const atualizarCorPrimaria = (novaCor) => {
    setCorPrimariaAtual(novaCor);
    aoMudarCorPrimaria(novaCor, id);
  };

  return (
    aventureiros.length > 0 && (
      <section className="Classe" style={{ backgroundColor: corAtual }}>
        <div className="inputs-cores">
       
          
            <input
              value={corAtual}
              type="color"
              className="input-color"
              onChange={(e) => atualizarCorSecundaria(e.target.value)}
            />
        
        
        
            <input
              value={corPrimariaAtual}
              type="color"
              className="input-color2"
              onChange={(e) => atualizarCorPrimaria(e.target.value)}
            />
    w1
        </div>
        <h3 style={{ borderColor: corPrimariaAtual }}>{nome}</h3>
        <div className="aventureiros">
          {aventureiros.map((aventureiro) => (
            <Card
              key={aventureiro.id}
              corDeFundo={corPrimariaAtual}
              nome={aventureiro.nome}
              especie={aventureiro.especie}
              imagem={aventureiro.imagem}
              favorito={aventureiro.favorito}
              aoDeletar={() => aoDeletar(aventureiro.id)}
              aoFavoritar={() => aoFavoritar(aventureiro.id)}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Classe;
