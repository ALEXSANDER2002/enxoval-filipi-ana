export interface Item {
  id: string;
  name: string;
  checked?: boolean;
}

export interface Category {
  id: string;
  name: string;
  items: Item[];
}

export const categories: Category[] = [
  {
    id: 'roupas',
    name: 'Roupas',
    items: [
      { id: 'body', name: 'Body (6 unidades)' },
      { id: 'macacao', name: 'Macacão (6 unidades)' },
      { id: 'conjunto', name: 'Conjunto (6 unidades)' },
      { id: 'meia', name: 'Meia (6 pares)' },
      { id: 'sapato', name: 'Sapato (2 pares)' },
      { id: 'touca', name: 'Touca (2 unidades)' },
      { id: 'luvas', name: 'Luvas (2 pares)' },
      { id: 'manta', name: 'Manta (2 unidades)' },
      { id: 'cobertor', name: 'Cobertor (2 unidades)' },
      { id: 'fralda', name: 'Fralda (2 pacotes)' },
    ],
  },
  {
    id: 'banho',
    name: 'Banho',
    items: [
      { id: 'toalha', name: 'Toalha de Banho (2 unidades)' },
      { id: 'toalha_rosto', name: 'Toalha de Rosto (2 unidades)' },
      { id: 'sabonete', name: 'Sabonete Líquido' },
      { id: 'shampoo', name: 'Shampoo' },
      { id: 'hidratante', name: 'Hidratante' },
      { id: 'pente', name: 'Pente' },
      { id: 'escova', name: 'Escova de Cabelo' },
      { id: 'banheira', name: 'Banheira' },
      { id: 'termometro', name: 'Termômetro' },
    ],
  },
  {
    id: 'alimentacao',
    name: 'Alimentação',
    items: [
      { id: 'mamadeira', name: 'Mamadeira (2 unidades)' },
      { id: 'bico', name: 'Bico de Mamadeira (2 unidades)' },
      { id: 'esterilizador', name: 'Esterilizador' },
      { id: 'escova_mamadeira', name: 'Escova de Mamadeira' },
      { id: 'prato', name: 'Prato Plástico' },
      { id: 'colher', name: 'Colher Plástica' },
      { id: 'copo', name: 'Copo Plástico' },
      { id: 'bebedouro', name: 'Bebedouro' },
    ],
  },
  {
    id: 'quarto',
    name: 'Quarto',
    items: [
      { id: 'berco', name: 'Berço' },
      { id: 'colchao', name: 'Colchão' },
      { id: 'lencois', name: 'Lençóis (2 jogos)' },
      { id: 'protetor', name: 'Protetor de Colchão' },
      { id: 'mosquiteiro', name: 'Mosquiteiro' },
      { id: 'carrinho', name: 'Carrinho de Bebê' },
      { id: 'cadeira', name: 'Cadeira de Alimentação' },
      { id: 'cadeira_carro', name: 'Cadeira de Carro' },
    ],
  },
  {
    id: 'higiene',
    name: 'Higiene',
    items: [
      { id: 'algodao', name: 'Algodão' },
      { id: 'alcool', name: 'Álcool 70%' },
      { id: 'soro', name: 'Soro Fisiológico' },
      { id: 'aspirador', name: 'Aspirador Nasal' },
      { id: 'cotonete', name: 'Cotonete' },
      { id: 'pomada', name: 'Pomada para Assaduras' },
      { id: 'talco', name: 'Talco' },
      { id: 'escova_dentes', name: 'Escova de Dentes' },
      { id: 'pasta_dentes', name: 'Pasta de Dentes' },
    ],
  },
  {
    id: 'outros',
    name: 'Outros',
    items: [
      { id: 'chupeta', name: 'Chupeta (2 unidades)' },
      { id: 'mordedor', name: 'Mordedor' },
      { id: 'brinquedo', name: 'Brinquedos' },
      { id: 'livro', name: 'Livros' },
      { id: 'cd', name: 'CDs de Música' },
      { id: 'camera', name: 'Câmera' },
      { id: 'album', name: 'Álbum de Fotos' },
      { id: 'lembrancinha', name: 'Lembrancinhas' },
    ],
  },
]; 