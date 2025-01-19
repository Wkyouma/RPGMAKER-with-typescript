import './AdicionarClasse.css';
import { useState } from 'react';
import Campo from '../Campo';
import Botao from '../Botao';

const AdicionarClasse = ({ aoAdicionarClasse }) => {
  const [nomeClasse, setNomeClasse] = useState('');
  const [corPrimaria, setCorPrimaria] = useState('#000000');
  const [corSecundaria, setCorSecundaria] = useState('#FFFFFF');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const AdicionarClasse = (e) => {
    e.preventDefault();
    const novaClasse = {
      nome: nomeClasse || 'Nova Classe',
      corPrimaria: corPrimaria,
      corSecundaria: corSecundaria,
    };
    aoAdicionarClasse(novaClasse);

    setNomeClasse('');
    setCorPrimaria('#000000');
    setCorSecundaria('#FFFFFF');
    setMostrarFormulario(false); 
  };

  const alternarFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <div className='AdicionarClasse'>
      <button onClick={alternarFormulario} className={mostrarFormulario ? 'botao-ocultar' : 'botao-adicionar'}>
        {mostrarFormulario ? 'Ocultar Formulário' : 'Adicionar Nova Classe'}
      </button>
      {mostrarFormulario && (
        <form onSubmit={AdicionarClasse}>
          <h3>Adicionar nova classe</h3>
          <div className="form-group">
            <Campo
              label="Nome da Classe"
              valor={nomeClasse}
              aoAlterado={(valor) => setNomeClasse(valor)}
            />
          </div>
          <div className="form-group">
            <Campo
              label="Cor Primária"
              valor={corPrimaria}
              aoAlterado={(valor) => setCorPrimaria(valor)}
              type="color"
            />
          </div>
          <div className="form-group">
            <Campo
              label="Cor Secundária"
              valor={corSecundaria}
              aoAlterado={(valor) => setCorSecundaria(valor)}
              type="color"
            />
          </div>
          <Botao>Adicionar</Botao>
        </form>
      )}
    </div>
  );
};

export default AdicionarClasse;
