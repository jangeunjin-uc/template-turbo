import { child, get, ref } from '@firebase/database';
import { database } from '../../firebase.config';

export default function getDatabaseRealtime(refs: string) {
  const dbRef = ref(database);

  return get(child(dbRef, refs)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    }

    return '';
  });
}
