export interface Item {
  id: string;
  name: string;
  category: string;
  checked: boolean;
}

export interface Category {
  id: string;
  name: string;
  items: Item[];
}

export const categories: Category[] = [
  {
    id: 'cozinha',
    name: 'Cozinha',
    items: [
      { id: 'cozinha-1', name: 'Afiador de Facas', category: 'cozinha', checked: false },
      { id: 'cozinha-2', name: 'Açucareiro', category: 'cozinha', checked: false },
      { id: 'cozinha-3', name: 'Amassador de Batata', category: 'cozinha', checked: false },
      { id: 'cozinha-4', name: 'Jogo de Xícaras', category: 'cozinha', checked: false },
      { id: 'cozinha-5', name: 'Jogo de Sobremesa', category: 'cozinha', checked: false },
      { id: 'cozinha-6', name: 'Jogo de Copos', category: 'cozinha', checked: false },
      { id: 'cozinha-7', name: 'Jogo de Taças', category: 'cozinha', checked: false },
      { id: 'cozinha-8', name: 'Jogo de Talheres', category: 'cozinha', checked: false },
      { id: 'cozinha-9', name: 'Jarra de Suco', category: 'cozinha', checked: false },
      { id: 'cozinha-10', name: 'Saleiro', category: 'cozinha', checked: false },
      { id: 'cozinha-11', name: 'Porta Temperos', category: 'cozinha', checked: false },
      { id: 'cozinha-12', name: 'Tábua de cortar carne', category: 'cozinha', checked: false },
      { id: 'cozinha-13', name: 'Frigideira grande', category: 'cozinha', checked: false },
      { id: 'cozinha-14', name: 'Frigideira Pequena', category: 'cozinha', checked: false },
      { id: 'cozinha-15', name: 'Descascador de Legumes', category: 'cozinha', checked: false },
      { id: 'cozinha-16', name: 'Ralador', category: 'cozinha', checked: false },
      { id: 'cozinha-17', name: 'Escorredor de Louça', category: 'cozinha', checked: false },
      { id: 'cozinha-18', name: 'Lixeira de Cozinha', category: 'cozinha', checked: false },
      { id: 'cozinha-19', name: 'Fruteira', category: 'cozinha', checked: false },
      { id: 'cozinha-20', name: 'Suporte Papel Toalha', category: 'cozinha', checked: false },
      { id: 'cozinha-21', name: 'Espátula', category: 'cozinha', checked: false },
      { id: 'cozinha-22', name: 'Concha', category: 'cozinha', checked: false },
      { id: 'cozinha-23', name: 'Copo Medidor', category: 'cozinha', checked: false },
      { id: 'cozinha-24', name: 'Espremedor', category: 'cozinha', checked: false },
      { id: 'cozinha-25', name: 'Escorredor Macarrão', category: 'cozinha', checked: false },
      { id: 'cozinha-26', name: 'Jogo de Peneiras', category: 'cozinha', checked: false },
      { id: 'cozinha-27', name: 'Leiteira', category: 'cozinha', checked: false },
      { id: 'cozinha-28', name: 'Paliteiro', category: 'cozinha', checked: false },
      { id: 'cozinha-29', name: 'Pano de Prato', category: 'cozinha', checked: false },
      { id: 'cozinha-30', name: 'Pincel', category: 'cozinha', checked: false },
      { id: 'cozinha-31', name: 'Tesoura', category: 'cozinha', checked: false },
      { id: 'cozinha-32', name: 'Rodo de Pia', category: 'cozinha', checked: false },
      { id: 'cozinha-33', name: 'Secador de Salada', category: 'cozinha', checked: false },
      { id: 'cozinha-34', name: 'Suporte de Bolo', category: 'cozinha', checked: false },
      { id: 'cozinha-35', name: 'Bacias de Plástico', category: 'cozinha', checked: false },
      { id: 'cozinha-36', name: 'Colheres de Medida', category: 'cozinha', checked: false },
      { id: 'cozinha-37', name: 'Funil', category: 'cozinha', checked: false },
      { id: 'cozinha-38', name: 'Panela Cuscuzeira', category: 'cozinha', checked: false },
      { id: 'cozinha-39', name: 'Jogo Panela Tramontina', category: 'cozinha', checked: false },
      { id: 'cozinha-40', name: 'Porta Alho', category: 'cozinha', checked: false },
      { id: 'cozinha-41', name: 'Faqueiro Tramontina', category: 'cozinha', checked: false },
      { id: 'cozinha-42', name: 'Colheres de Silicone', category: 'cozinha', checked: false },
      { id: 'cozinha-43', name: 'Colheres de Pau', category: 'cozinha', checked: false },
      { id: 'cozinha-44', name: 'Saladeira', category: 'cozinha', checked: false },
      { id: 'cozinha-45', name: 'Travessas', category: 'cozinha', checked: false },
      { id: 'cozinha-46', name: 'Forma de Bolo', category: 'cozinha', checked: false },
      { id: 'cozinha-47', name: 'Potes de Vidro', category: 'cozinha', checked: false },
      { id: 'cozinha-48', name: 'Potes de Plástico', category: 'cozinha', checked: false },
      { id: 'cozinha-49', name: 'Bandeijas', category: 'cozinha', checked: false },
      { id: 'cozinha-50', name: 'Forma de Silicone', category: 'cozinha', checked: false },
      { id: 'cozinha-51', name: 'Garrafa Térmica de café', category: 'cozinha', checked: false },
    ]
  },
  {
    id: 'eletrodomesticos',
    name: 'Eletrodomésticos',
    items: [
      { id: 'eletro-1', name: 'Air Fryer', category: 'eletrodomesticos', checked: false },
      { id: 'eletro-2', name: 'Liquidificador', category: 'eletrodomesticos', checked: false },
      { id: 'eletro-3', name: 'Microondas', category: 'eletrodomesticos', checked: false },
      { id: 'eletro-4', name: 'Batedeira', category: 'eletrodomesticos', checked: false },
      { id: 'eletro-5', name: 'Sanduicheira', category: 'eletrodomesticos', checked: false },
      { id: 'eletro-6', name: 'Purificador de água', category: 'eletrodomesticos', checked: false },
      { id: 'eletro-7', name: 'Forno', category: 'eletrodomesticos', checked: false },
      { id: 'eletro-8', name: 'Geladeira', category: 'eletrodomesticos', checked: false },
    ]
  },
  {
    id: 'quarto',
    name: 'Quarto',
    items: [
      { id: 'quarto-1', name: 'Cabeceira', category: 'quarto', checked: false },
      { id: 'quarto-2', name: 'Cabides', category: 'quarto', checked: false },
      { id: 'quarto-3', name: 'Lençóis Casal', category: 'quarto', checked: false },
      { id: 'quarto-4', name: 'Edredom casal', category: 'quarto', checked: false },
      { id: 'quarto-5', name: 'Cobertor Casal', category: 'quarto', checked: false },
      { id: 'quarto-6', name: 'Caixa Organizadora', category: 'quarto', checked: false },
      { id: 'quarto-7', name: 'Colchão', category: 'quarto', checked: false },
      { id: 'quarto-8', name: 'Fronha travesseiros', category: 'quarto', checked: false },
      { id: 'quarto-9', name: 'Cama', category: 'quarto', checked: false },
      { id: 'quarto-10', name: 'Cortina', category: 'quarto', checked: false },
      { id: 'quarto-11', name: 'Mesinha de Cabeceira', category: 'quarto', checked: false },
      { id: 'quarto-12', name: 'Travesseiro', category: 'quarto', checked: false },
      { id: 'quarto-13', name: 'Guarda-roupa', category: 'quarto', checked: false },
      { id: 'quarto-14', name: 'Espelho', category: 'quarto', checked: false },
      { id: 'quarto-15', name: 'Ar Condicionado', category: 'quarto', checked: false },
      { id: 'quarto-16', name: 'Penteadeira', category: 'quarto', checked: false },
      { id: 'quarto-17', name: 'Televisão', category: 'quarto', checked: false },
    ]
  },
  {
    id: 'banheiro',
    name: 'Banheiro',
    items: [
      { id: 'banheiro-1', name: 'Cesto de Roupa Suja', category: 'banheiro', checked: false },
      { id: 'banheiro-2', name: 'Escova de Sanitário', category: 'banheiro', checked: false },
      { id: 'banheiro-3', name: 'Frasco Sabon. Líquid.', category: 'banheiro', checked: false },
      { id: 'banheiro-4', name: 'Lixeira', category: 'banheiro', checked: false },
      { id: 'banheiro-5', name: 'Porta Cotonete', category: 'banheiro', checked: false },
      { id: 'banheiro-6', name: 'Porta Escova de Dente', category: 'banheiro', checked: false },
      { id: 'banheiro-7', name: 'Saboneteira', category: 'banheiro', checked: false },
      { id: 'banheiro-8', name: 'Toalha de Banho', category: 'banheiro', checked: false },
      { id: 'banheiro-9', name: 'Toalha de Rosto', category: 'banheiro', checked: false },
    ]
  },
  {
    id: 'sala',
    name: 'Sala de Estar',
    items: [
      { id: 'sala-1', name: 'Almofadas', category: 'sala', checked: false },
      { id: 'sala-2', name: 'Capas de Almofadas', category: 'sala', checked: false },
      { id: 'sala-3', name: 'Painel de TV', category: 'sala', checked: false },
      { id: 'sala-4', name: 'Porta Chaves', category: 'sala', checked: false },
      { id: 'sala-5', name: 'Porta Retratos', category: 'sala', checked: false },
      { id: 'sala-6', name: 'Sofá', category: 'sala', checked: false },
      { id: 'sala-7', name: 'Televisão', category: 'sala', checked: false },
      { id: 'sala-8', name: 'Mesa e Cadeira', category: 'sala', checked: false },
      { id: 'sala-9', name: 'Cortinas', category: 'sala', checked: false },
    ]
  },
  {
    id: 'area-servico',
    name: 'Área de Serviço',
    items: [
      { id: 'servico-1', name: 'Balde', category: 'area-servico', checked: false },
      { id: 'servico-2', name: 'Borrifador', category: 'area-servico', checked: false },
      { id: 'servico-3', name: 'Dispenser de Sabão', category: 'area-servico', checked: false },
      { id: 'servico-4', name: 'Escovão', category: 'area-servico', checked: false },
      { id: 'servico-5', name: 'Ferro de Passar', category: 'area-servico', checked: false },
      { id: 'servico-6', name: 'Flanelas', category: 'area-servico', checked: false },
      { id: 'servico-7', name: 'Pá de Lixo', category: 'area-servico', checked: false },
      { id: 'servico-8', name: 'Pano de Chão', category: 'area-servico', checked: false },
      { id: 'servico-9', name: 'Potes Organizadores', category: 'area-servico', checked: false },
      { id: 'servico-10', name: 'Prendedor de Roupa', category: 'area-servico', checked: false },
      { id: 'servico-11', name: 'Rodo', category: 'area-servico', checked: false },
      { id: 'servico-12', name: 'Suporte de Vassoura', category: 'area-servico', checked: false },
      { id: 'servico-13', name: 'Vassoura', category: 'area-servico', checked: false },
      { id: 'servico-14', name: 'Máquina de Lavar', category: 'area-servico', checked: false },
      { id: 'servico-15', name: 'Extensão', category: 'area-servico', checked: false },
      { id: 'servico-16', name: 'Adaptador de Tomada', category: 'area-servico', checked: false },
      { id: 'servico-17', name: 'Lixeira', category: 'area-servico', checked: false },
      { id: 'servico-18', name: 'Bacia', category: 'area-servico', checked: false },
      { id: 'servico-19', name: 'Porta Amaciante', category: 'area-servico', checked: false },
      { id: 'servico-20', name: 'Pá', category: 'area-servico', checked: false },
      { id: 'servico-21', name: 'Desentupidor', category: 'area-servico', checked: false },
    ]
  }
]; 