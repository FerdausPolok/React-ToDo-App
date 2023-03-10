import React from 'react';
import { Toaster } from 'react-hot-toast';
import PageTitle from './components/PageTitle';
import style from './styles/modules/app.module.scss';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>WellList</PageTitle>
        <div className={style.app__wrapper}>
          <AppHeader />
        </div>
        <AppContent />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.3rem',
          },
        }}
      />
    </>
  );
}

export default App;
