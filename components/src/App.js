
import './App.css';
import First from './components/First';
import Second from './components/Second';
import BookList from './components/BookList';
// import LazyComponent from './components/LazyComponent';
import { lazy, Suspense } from 'react';
import FragmentTable from './components/FragmentTable';
import { UserProvider } from './context/userComponent';
import ChildComponent from './context/ChildComponent';
import Name from './ErrorBoundary/Name';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const LazyComponent = lazy(() => import('./components/LazyComponent'));

function App() {
  return (
    <div className="App">
      <First></First>
      <Second />
      <BookList></BookList>
      <Suspense fallback={<div>Loading... </div>}>
        <LazyComponent></LazyComponent>
      </Suspense>
      <h1>Fragment Samples</h1>
      <FragmentTable></FragmentTable>
      <h1>Context Example</h1>
      <UserProvider value="Rannith">
        <ChildComponent></ChildComponent>
      </UserProvider>
      <h1>Error Boundary Example</h1>
      <ErrorBoundary>
        <Name name="Ram" /><br />
        <Name name="Raj" /><br />
        <Name name={22} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
