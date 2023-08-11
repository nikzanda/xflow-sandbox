import React, { FC } from 'react';

import './style.css';
import { App as AntApp, Layout } from 'antd';
import XflowTest from './xflow/XflowTest';

const App: FC = () => (
  <AntApp>
    <Layout style={{ height: '100vh', padding: '15px 15px 15px 15px' }}>
      <XflowTest meta={{ flowId: 'xflow-test' }} />
    </Layout>
  </AntApp>
);

export default App;
