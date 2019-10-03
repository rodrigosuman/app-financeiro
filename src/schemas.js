export const Lancamentos = {
  name: 'lancamentos',
  primaryKey: 'id',
  properties: {
    id: 'int',
    valor: 'float',
    descricao: 'string',
    observacoes: 'string',
    data: 'date',
    pago: 'bool',
    tipo: {type: 'tipos'},
  },
};

export const TiposLancamentos = {
  name: 'tipos',
  primaryKey: 'id',
  properties: {
    id: 'int',
    descricao: 'string',
    receita: 'bool',
  },
};
