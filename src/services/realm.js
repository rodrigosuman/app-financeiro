const Realm = require('realm');
import {Lancamentos, TiposLancamentos} from '~/schemas';

function getRealm() {
  return Realm.open({
    schema: [Lancamentos, TiposLancamentos],
    schemaVersion: 5,
  });
}

async function save(schema, data) {
  getRealm()
    .then(realm => {
      console.tron.log(realm);
      realm.write(() => {
        realm.create(schema, data);
      });
      getObjects(schema);
    })
    .catch(error => {
      console.tron.warn(error);
    });
}

function getObjects(schema, callBack) {
  getRealm()
    .then(realm => {
      let objects = realm.objects(schema);
      callBack(objects);
    })
    .catch(error => {
      console.tron.warn('Erro ao gerar lista.');
    });
}

export {getRealm, getObjects, save};
