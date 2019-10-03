const Realm = require('realm');
import {Lancamentos, TiposLancamentos} from '~/schemas';

export function getRealm() {
  return Realm.open({
    schema: [Lancamentos, TiposLancamentos],
    schemaVersion: 9,
  });
}

export async function save(schema, data) {
  getRealm()
    .then(realm => {
      data.id = realm.objects(schema).length + 1;
      realm.write(() => {
        realm.create(schema, data);
      });
    })
    .catch(error => {
      console.tron.warn(error);
    });
}

export function getObjects(schema, callBack, filtered = false, filter = '') {
  getRealm()
    .then(realm => {
      let objects = realm.objects(schema);

      if (filtered === true) {
        objects = objects.filtered(filter);
      }

      callBack(objects);
    })
    .catch(error => {
      console.tron.warn('Erro ao gerar lista.');
    });
}

export function deleteAll() {
  getRealm()
    .then(realm => {
      realm.write(() => {
        let lancamentos = realm.objects('lancamentos');
        let tipos = realm.objects('tipos');

        realm.delete(lancamentos);
        realm.delete(tipos);
      });
    })
    .catch(err => {
      alert(err);
    });
}

// export {getRealm, getObjects, save};
