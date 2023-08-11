import * as React from 'react';
import XflowTest from './xflow/XflowTest';
import './style.css';

export default function App() {
  return (
    <div>
      <XflowTest meta={{ flowId: 'xflow' }} />
    </div>
  );
}
