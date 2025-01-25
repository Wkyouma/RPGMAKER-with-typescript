export interface Iaventureiro {
    id: string; // Use 'string' em vez de 'String'
    nome: string;
    especie: string;
    imagem: string;
    classe?: string;
    favorito: boolean;
}