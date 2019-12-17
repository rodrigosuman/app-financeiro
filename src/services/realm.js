const Realm = require('realm');
import {Lancamentos, TiposLancamentos} from '~/schemas';

export function getRealm() {
  return Realm.open({
    schema: [Lancamentos, TiposLancamentos],
    schemaVersion: 9,
  });
}

export function getObject(schema, id, callBack) {
  getRealm()
    .then(realm => {
      let objects = realm.objects(schema);
      let object = objects.filtered(`id = ${id}`);

      callBack(object[0]);
    })
    .catch(error => {
      console.tron.warn(error);
    });
}

export async function save(schema, data, callBack) {
  getRealm()
    .then(realm => {
      data.id = realm.objects(schema).length + 1;
      realm.write(() => {
        realm.create(schema, data);
        callBack();
      });
    })
    .catch(error => {
      console.tron.warn(error);
    });
}

export async function update(schema, data, callBack) {
  getRealm()
    .then(realm => {
      realm.write(() => {
        realm.create(schema, data, true);
        callBack();
      });
    })
    .catch(error => {
      console.tron.warn(error);
    });
}

export function getObjects(
  schema,
  callBack,
  filtered = false,
  filter = '',
  sorted = false,
  sortedField = '',
  order = true,
) {
  getRealm()
    .then(realm => {
      let objects = realm.objects(schema);

      if (filtered === true) {
        objects = objects.filtered(filter);
      }

      console.tron.log(sorted);
      console.tron.log(sortedField);

      if (sorted === true) {
        objects = objects.sorted(sortedField, order);
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
        // let tipos = realm.objects('tipos');

        realm.delete(lancamentos);
        // realm.delete(tipos);
      });
    })
    .catch(err => {
      alert(err);
    });
}

export function deleteObject(schema, id, callBack) {
  getRealm()
    .then(realm => {
      realm.write(() => {
        let objects = realm.objects(schema);
        let object = objects.filtered(`id = ${id}`);
        realm.delete(object);

        callBack();
      });
    })
    .catch(err => {
      alert(err);
    });
}
// export {getRealm, getObjects, save};
