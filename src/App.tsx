import { useState } from 'react';
import './App.css';
import { ConfigProvider } from 'antd';
import faIR from 'antd/locale/fa_IR';

function App() {
  const [count, setCount] = useState(0);
  const app = (
    <div className="App">
      <div className="card">
        <button type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
  return (
    <ConfigProvider direction="rtl" locale={faIR}>
      {app}
    </ConfigProvider>
  );
}

export default App;
