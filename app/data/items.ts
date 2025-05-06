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
    id: 'cozinha',
    name: 'Cozinha',
    items: [
      { id: 'cozinha-1', name: 'Afiador de Facas' },
      { id: 'cozinha-2', name: 'Açucareiro' },
      { id: 'cozinha-3', name: 'Amassador de Batata' },
      { id: 'cozinha-4', name: 'Jogo de Xícaras' },
      { id: 'cozinha-5', name: 'Jogo de Sobremesa' },
      { id: 'cozinha-6', name: 'Jogo de Copos' },
      { id: 'cozinha-7', name: 'Jogo de Taças' },
      { id: 'cozinha-8', name: 'Jogo de Talheres' },
      { id: 'cozinha-9', name: 'Jarra de Suco' },
      { id: 'cozinha-10', name: 'Saleiro' },
      { id: 'cozinha-11', name: 'Porta Temperos' },
      { id: 'cozinha-12', name: 'Tábua de cortar carne' },
      { id: 'cozinha-13', name: 'Frigideira grande' },
      { id: 'cozinha-14', name: 'Frigideira Pequena' },
      { id: 'cozinha-15', name: 'Descascador de Legumes' },
      { id: 'cozinha-16', name: 'Ralador' },
      { id: 'cozinha-17', name: 'Escorredor de Louça' },
      { id: 'cozinha-18', name: 'Lixeira de Cozinha' },
      { id: 'cozinha-19', name: 'Fruteira' },
      { id: 'cozinha-20', name: 'Suporte Papel Toalha' },
      { id: 'cozinha-21', name: 'Espátula' },
      { id: 'cozinha-22', name: 'Concha' },
      { id: 'cozinha-23', name: 'Copo Medidor' },
      { id: 'cozinha-24', name: 'Espremedor' },
      { id: 'cozinha-25', name: 'Escorredor Macarrão' },
      { id: 'cozinha-26', name: 'Jogo de Peneiras' },
      { id: 'cozinha-27', name: 'Leiteira' },
      { id: 'cozinha-28', name: 'Paliteiro' },
      { id: 'cozinha-29', name: 'Pano de Prato' },
      { id: 'cozinha-30', name: 'Pincel' },
      { id: 'cozinha-31', name: 'Tesoura' },
      { id: 'cozinha-32', name: 'Rodo de Pia' },
      { id: 'cozinha-33', name: 'Secador de Salada' },
      { id: 'cozinha-34', name: 'Suporte de Bolo' },
      { id: 'cozinha-35', name: 'Bacias de Plástico' },
      { id: 'cozinha-36', name: 'Colheres de Medida' },
      { id: 'cozinha-37', name: 'Funil' },
      { id: 'cozinha-38', name: 'Panela Cuscuzeira' },
      { id: 'cozinha-39', name: 'Jogo Panela Tramontina' },
      { id: 'cozinha-40', name: 'Porta Alho' },
      { id: 'cozinha-41', name: 'Faqueiro Tramontina' },
      { id: 'cozinha-42', name: 'Colheres de Silicone' },
      { id: 'cozinha-43', name: 'Colheres de Pau' },
      { id: 'cozinha-44', name: 'Saladeira' },
      { id: 'cozinha-45', name: 'Travessas' },
      { id: 'cozinha-46', name: 'Forma de Bolo' },
      { id: 'cozinha-47', name: 'Potes de Vidro' },
      { id: 'cozinha-48', name: 'Potes de Plástico' },
      { id: 'cozinha-49', name: 'Bandeijas' },
      { id: 'cozinha-50', name: 'Forma de Silicone' },
      { id: 'cozinha-51', name: 'Garrafa Térmica de café' }
    ]
  },
  {
    id: 'eletrodomesticos',
    name: 'Eletrodomésticos',
    items: [
      { id: 'eletro-1', name: 'Air Fryer' },
      { id: 'eletro-2', name: 'Liquidificador' },
      { id: 'eletro-3', name: 'Microondas' },
      { id: 'eletro-4', name: 'Batedeira' },
      { id: 'eletro-5', name: 'Sanduicheira' },
      { id: 'eletro-6', name: 'Purificador de água' },
      { id: 'eletro-7', name: 'Forno' },
      { id: 'eletro-8', name: 'Geladeira' }
    ]
  },
  {
    id: 'quarto',
    name: 'Quarto',
    items: [
      { id: 'quarto-1', name: 'Cabeceira' },
      { id: 'quarto-2', name: 'Cabides' },
      { id: 'quarto-3', name: 'Lençóis Casal' },
      { id: 'quarto-4', name: 'Edredom casal' },
      { id: 'quarto-5', name: 'Cobertor Casal' },
      { id: 'quarto-6', name: 'Caixa Organizadora' },
      { id: 'quarto-7', name: 'Colchão' },
      { id: 'quarto-8', name: 'Fronha travesseiros' },
      { id: 'quarto-9', name: 'Cama' },
      { id: 'quarto-10', name: 'Cortina' },
      { id: 'quarto-11', name: 'Mesinha de Cabeceira' },
      { id: 'quarto-12', name: 'Travesseiro' },
      { id: 'quarto-13', name: 'Guarda-roupa' },
      { id: 'quarto-14', name: 'Espelho' },
      { id: 'quarto-15', name: 'Ar Condicionado' },
      { id: 'quarto-16', name: 'Penteadeira' },
      { id: 'quarto-17', name: 'Televisão' }
    ]
  },
  {
    id: 'banheiro',
    name: 'Banheiro',
    items: [
      { id: 'banheiro-1', name: 'Cesto de Roupa Suja' },
      { id: 'banheiro-2', name: 'Escova de Sanitário' },
      { id: 'banheiro-3', name: 'Frasco Sabon. Líquid.' },
      { id: 'banheiro-4', name: 'Lixeira' },
      { id: 'banheiro-5', name: 'Porta Cotonete' },
      { id: 'banheiro-6', name: 'Porta Escova de Dente' },
      { id: 'banheiro-7', name: 'Saboneteira' },
      { id: 'banheiro-8', name: 'Toalha de Banho' },
      { id: 'banheiro-9', name: 'Toalha de Rosto' }
    ]
  },
  {
    id: 'sala',
    name: 'Sala de Estar',
    items: [
      { id: 'sala-1', name: 'Almofadas' },
      { id: 'sala-2', name: 'Capas de Almofadas' },
      { id: 'sala-3', name: 'Painel de TV' },
      { id: 'sala-4', name: 'Porta Chaves' },
      { id: 'sala-5', name: 'Porta Retratos' },
      { id: 'sala-6', name: 'Sofá' },
      { id: 'sala-7', name: 'Televisão' },
      { id: 'sala-8', name: 'Mesa e Cadeira' },
      { id: 'sala-9', name: 'Cortinas' }
    ]
  },
  {
    id: 'servico',
    name: 'Área de Serviço',
    items: [
      { id: 'servico-1', name: 'Balde' },
      { id: 'servico-2', name: 'Borrifador' },
      { id: 'servico-3', name: 'Dispenser de Sabão' },
      { id: 'servico-4', name: 'Escovão' },
      { id: 'servico-5', name: 'Ferro de Passar' },
      { id: 'servico-6', name: 'Flanelas' },
      { id: 'servico-7', name: 'Pá de Lixo' },
      { id: 'servico-8', name: 'Pano de Chão' },
      { id: 'servico-9', name: 'Potes Organizadores' },
      { id: 'servico-10', name: 'Prendedor de Roupa' },
      { id: 'servico-11', name: 'Rodo' },
      { id: 'servico-12', name: 'Suporte de Vassoura' },
      { id: 'servico-13', name: 'Vassoura' },
      { id: 'servico-14', name: 'Máquina de Lavar' },
      { id: 'servico-15', name: 'Extensão' },
      { id: 'servico-16', name: 'Adaptador de Tomada' },
      { id: 'servico-17', name: 'Lixeira' },
      { id: 'servico-18', name: 'Bacia' },
      { id: 'servico-19', name: 'Porta Amaciante' },
      { id: 'servico-20', name: 'Pá' },
      { id: 'servico-21', name: 'Desentupidor' },
      { id: 'servico-22', name: 'Aromatizante de Amb.' },
      { id: 'servico-23', name: 'Tapetes para todas as áreas' }
    ]
  }
]; 