
import './App.css';
import AppHeader from './components/Header';
import Floors from './components/Floors';
import R from './components/R';
import Private from './components/private';
import Self from './components/self'
const colorseats = [
  {
    text: "Room",
    k: 10
  },
  {
    text: "Room",
    k: 2
  },
  {
    text: "Room",
    k: 6
  }
];
const Private_Room = [
  {text: "Room", pp: 0},
  {text: "Room", pp: 0},
  {text: "Room", pp: 1}
];
const Self_study = [
  {text: "Room", pri: 1},
  {text: "Room", pri: 0},
  {text: "Room", pri: 1},
  {text: "Room", pri: 0},
  {text: "Room", pri: 1},
  {text: "Room", pri: 1}
];

function App() {
  const colorElements = colorseats.map((color,index) => {return <R key={index} color={color} /> })
  const private_Room = Private_Room.map((private_room,index) => {return <Private key={index} private_room={private_room} /> })
  const self_study = Self_study.map((self_study,index) => {return <Self key={index} self_study={self_study} /> })
  
  return (
    <div className="App">

      <AppHeader />

      <div className='Bg-Room'>
        <h1 className='floor-name'>F1</h1>
        <div className="Enter_Exit">
          <h3 className='entrance'>Entrance</h3>
          <h3 className='stair'>Stair</h3>
        </div>
        {colorElements}
        <div className='personal'>{private_Room}</div>
        {self_study}
        <div className='study'>{self_study}</div>
      </div>

      <Floors title='F1' />
      <Floors title='F2' />
     
     

    </div>
  );
}

export default App;
