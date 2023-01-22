import { useState } from 'react';
import { Home } from './components/pages/Home';
import { AppRoutes } from './routing/AppRoutes';

function App() {

  return (
    <div className="layout">
      <AppRoutes />
    </div>
  )
}

export default App
