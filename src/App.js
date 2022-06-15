import useFetch from './useFetch';
import './App.css';

function App() {
  const { isLoading, serverError, apiData } = useFetch('GET', 'https://pokeapi.co/api/v2/pokemon/');
  console.log(apiData);
  return (
    <div className='App'>
      <h2>API data</h2>
      {isLoading && <span>Loading.....</span>}
      {!isLoading && serverError ? (
        <span>Error in fetching data ...</span>
      ) : (
        <span>{JSON.stringify(apiData)}</span>
      )}
    </div>
  );
}

export default App;
