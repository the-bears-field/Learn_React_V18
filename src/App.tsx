import './App.css';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';
import { Transition } from './components/Transition';
import { ReactQuery } from './components/ReactQuery';
import { Suspense } from 'react';

function App() {
  return (
    <div className='App'>
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
      <Suspense fallback={<p>ローディング中…</p>}>
        <ReactQuery />
      </Suspense>
    </div>
  );
}

export default App;
