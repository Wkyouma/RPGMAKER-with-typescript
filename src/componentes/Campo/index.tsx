import React from 'react';
import './Campo.css';

interface CampoDeTextoProps {
  label: string;
  valor: string;
  aoAlterado: (novoValor: string) => void;
  
  type?: string; 
  obrigatorio?: boolean;
}

const Campo = ({ aoAlterado , label , valor , type = 'text' , obrigatorio = false}: CampoDeTextoProps) => {


  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label className="campolabel">{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={`Digite o seu ${label.toLowerCase()}`}
      />
    </div>
  );
};

export default Campo;
