import React, { FC } from 'react';

import './style.css';
import { App as AntApp, Space } from 'antd';
import XflowTest from './xflow/XflowTest';

const App: FC = () => (
  // <Space style={{ width: '100%', backgroundColor: 'green' }}>
  <AntApp>
    <div style={{ backgroundColor: 'green' }}>
      <XflowTest meta={{ flowId: 'xflow-test' }} />
    </div>
  </AntApp>
  // </Space>
);

export default App;
