import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import styles from './index.module.css';
import { Form } from './form/form';
import CopyField from './copy-field/copy-field';

function App() {
  return (
    <main className={styles.main}>
      <Form />
      <CopyField />
    </main>
  );
}

export default App;
