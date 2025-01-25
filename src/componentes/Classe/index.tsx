import React, { useState } from "react";
import Card from '../Card/index'
import "./Classe.css";

interface Aventureiro {
  id: number;
  nome: string;
  especie: string;
  imagem: string;
  favorito: boolean;
}

interface TimeProps {
  corPrimaria: string;
  nome: string;
  aventureiros: Aventureiro[];
  aoDeletar: (id: number) => void;
  aoMudarCor: (novaCor: string, id: number) => void;
  aoMudarCorPrimaria: (novaCor: string, id: number) => void;
  id: number;
  aoFavoritar: (id: number) => void;
  corSecundaria: string;
}

const Classe = (props: TimeProps) => {
  const [corAtual, setCorAtual] = useState(props.corSecundaria || "#ffffff");
  const [corPrimariaAtual, setCorPrimariaAtual] = useState(props.corPrimaria || "#000000");

  const atualizarCorSecundaria = (novaCor: string) => {
    setCorAtual(novaCor);
    props.aoMudarCor(novaCor, props.id);
  };

  const atualizarCorPrimaria = (novaCor: string) => {
    setCorPrimariaAtual(novaCor);
    props.aoMudarCorPrimaria(novaCor, props.id);
  };

  return (
    props.aventureiros.length > 0 && (
      <section className="Classe" style={{ backgroundColor: corAtual }}>
        <div className="inputs-cores">
          <input
            value={corAtual}
            type="color"
            className="input-color"
            onChange={(e) => atualizarCorSecundaria(e.target.value)}
            aria-label="Alterar cor secundária"
          />
          <input
            value={corPrimariaAtual}
            type="color"
            className="input-color2"
            onChange={(e) => atualizarCorPrimaria(e.target.value)}
            aria-label="Alterar cor primária"
          />
        </div>
        <h3 style={{ borderColor: corPrimariaAtual }}>{props.nome}</h3>
        <div className="aventureiros">
          {props.aventureiros.map((aventureiro) => (
            <Card
              key={aventureiro.id}
              corDeFundo={corPrimariaAtual}
              nome={aventureiro.nome}
              especie={aventureiro.especie}
              imagem={aventureiro.imagem}
              favorito={aventureiro.favorito}
              aoDeletar={() => props.aoDeletar(aventureiro.id)}
              aoFavoritar={() => props.aoFavoritar(aventureiro.id)}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Classe;
