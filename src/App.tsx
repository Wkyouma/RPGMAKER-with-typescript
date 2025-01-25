import { Banner } from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Classe from './componentes/Classe';
import Footer from './componentes/footer';
import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AdicionarClasse from './componentes/AdicionarClasse';
import { Iaventureiro } from './Shared/Interface/Iaventureiro';


interface ClasseType {
  id: string;
  nome: string;
  corPrimaria: string;
  corSecundaria: string;
}

function App() {
  const [Classes, setClasses] = useState<ClasseType[]>([
    { id: uuidv4(), nome: 'Bardo', corPrimaria: '#57C278', corSecundaria: '#09F7E9' },
    { id: uuidv4(), nome: 'Mago', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF' },
    { id: uuidv4(), nome: 'Necromante', corPrimaria: '#A60D15', corSecundaria: '#FDE7E8' },
    { id: uuidv4(), nome: 'Ladino', corPrimaria: '#FFD700', corSecundaria: '#FFF8DC' },
    { id: uuidv4(), nome: 'Guerreiro', corPrimaria: '#8B0000', corSecundaria: '#FA8072' },
    { id: uuidv4(), nome: 'Druida', corPrimaria: '#228B22', corSecundaria: '#90EE90' },
  ]);

  const especies: string[] = [
    'elfo', 'humano', 'anão', 'orc', 'hobbit', 'dragão', 'troll', 'goblin', 
    'centauro', 'fada', 'súcubo', 'demônio', 'licano', 'vampiro', 'quimera'
  ];

  const [aventureiros, setAventureiros] = useState<Iaventureiro[]>([]);

  const aoNovoAventureiroAdd = (aventureiro: Omit<Iaventureiro, 'id' | 'favorito'>) => {
    setAventureiros([...aventureiros, { id: uuidv4(), favorito: false, ...aventureiro }]);
  };

  const deletarAventureiro = (id: string) => {
    setAventureiros(aventureiros.filter((aventureiro) => aventureiro.id !== id));
  };

  const resolverFavorito = (id: string) => {
    setAventureiros(
      aventureiros.map((aventureiro) =>
        aventureiro.id === id ? { ...aventureiro, favorito: !aventureiro.favorito } : aventureiro
      )
    );
  };

  const mudarCorSecundaria = (cor: string, id: string) => {
    setClasses(
      Classes.map((classe) =>
        classe.id === id ? { ...classe, corSecundaria: cor } : classe
      )
    );
  };

  const mudarCorPrimaria = (cor: string, id: string) => {
    setClasses(
      Classes.map((classe) =>
        classe.id === id ? { ...classe, corPrimaria: cor } : classe
      )
    );
  };

  const adicionarClasse = (novaClasse: Omit<ClasseType, 'id'>) => {
    setClasses([...Classes, { id: uuidv4(), ...novaClasse }]);
  };

  return (
    <div className="App">
      <Banner enderecoImagem='banner2.png' textoAlternativo='Imagem banner rpg' />
      <Formulario
        classes={Classes.map((classe) => classe.nome)}
        especies={especies}
        aoAventureiroCadastrado={aoNovoAventureiroAdd}
      />
      <AdicionarClasse aoAdicionarClasse={adicionarClasse} />
      {Classes.map((classe) => (
        <Classe
          key={classe.id}
          id={classe.id}
          nome={classe.nome}
          corPrimaria={classe.corPrimaria}
          corSecundaria={classe.corSecundaria}
          aventureiros={aventureiros.filter(aventureiro => aventureiro.classe === classe.nome)}
          aoDeletar={deletarAventureiro}
          aoFavoritar={resolverFavorito}
          aoMudarCor={mudarCorSecundaria}
          aoMudarCorPrimaria={mudarCorPrimaria}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;