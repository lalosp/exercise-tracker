/* What's the difference between import and require?
 * We're not going to use the logo or App.css
 */
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
		// This JSX code is what gets rendered on the frontend
    <div className="container">
    	Hi, world!
		</div>
  );
}

// Why export default and not module.exporst?
export default App;
