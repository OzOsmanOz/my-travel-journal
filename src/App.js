import './App.css';
import NavbarComponent from './Components/NavbarComponent';
import CardsComponent from './Components/CardsComponent';
import DataComponent from './Components/DataComponent';

function App() {
  const cardComponent = DataComponent.map(obje => {
    return (
  <CardsComponent 
  key = {obje.id}
  {...obje}
  // img = {obje.img}
  // placeName = {obje.placeName}
  // title = {obje.title}
  // date = {obje.date}
  // description = {obje.description}
  // placeMap = {obje.placeMap}
  />
    )
  }) 
  return (
    <div className="App">
      <NavbarComponent />
      {cardComponent}
    </div>
  );
}

export default App;


