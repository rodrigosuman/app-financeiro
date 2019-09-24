export const Lancamentos = {
  name: 'lancamentos',
  properties: {
    valor: 'float',
    descricao: 'string',
    observacoes: 'string',
    data: 'date',
    conciliado: 'bool',
    tipo: {type: 'tipos'},
  },
};

export const TiposLancamentos = {
  name: 'tipos',
  properties: {
    descricao: 'string',
  },
};
