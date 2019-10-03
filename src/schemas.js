export const Lancamentos = {
  name: 'lancamentos',
  primaryKey: 'id',
  properties: {
    id: 'int',
    valor: 'float',
    descricao: 'string',
    data: 'date',
    tipo: {type: 'tipos'},
    observacoes: 'string',
    pago: 'bool',
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
