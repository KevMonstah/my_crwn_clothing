//import logo from './logo.svg';
//import './App.css';
//import './categories.styles.scss';
//import CategoryItem from './components/category-item/category-item.component.jsx'
import Directory from './components/directory/directory.component.jsx'

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

/*
const App = () => {
  return (
    <div className="categories-container">
      Hello World Today.  I don't hate it.
    </div>
    );
}
*/
const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      // subtitle: 'Show NOW',  // this CAN BE hardcoded, as all will have the same thing.
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: 2,
      title: 'Jackets',
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      title: 'Sneakers',
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 4,
      title: 'Womens',
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id: 5,
      title: 'Mens',
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    },
  ];

  /* first version
  return (
    <div className="categories-container">
      <div className="category-container">
        {/ * <img /> * /}
        <div className="category-body-container">
          <h2>Hats</h2>
          <p>Shop NOW</p>
        </div>
      </div>
      <div className="category-container">
        {/ * <img /> * /}
        <div className="category-body-container">
          <h2>Jackets</h2>
          <p>Shop NOW</p>
        </div>
      </div>
      <div className="category-container">
        {/ * <img /> * /}
        <div className="category-body-container">
          <h2>Sneakers</h2>
          <p>Shop NOW</p>
        </div>
      </div>
      <div className="category-container">
        {/ * <img /> * /}
        <div className="category-body-container">
          <h2>Womens</h2>
          <p>Shop NOW</p>
        </div>
      </div>
      <div className="category-container">
        {/ * <img /> * /}
        <div className="category-body-container">
          <h2>Mens</h2>
          <p>Shop NOW</p>
        </div>
      </div>
    </div>
    );
  */

    return (
        <Directory categories={categories} />
    );
};

export default App;
