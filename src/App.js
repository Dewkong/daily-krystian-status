import robert from './robert-lewandowski.png';
import './App.css';

const weekData = [
  { day: "Monday", food: "China Bar" },
  { day: "Tuesday", food: "Sevi Oriental" },
  { day: "Wednesday", food: "Hindus" },
  { day: "Thursday", food: "Variety (Bonarka)" },
  { day: "Friday", food: "Variety (Bonarka)" },
]

const favouriteTeam = "WINNERPOOL";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daily Krystian Status</h1>
        <a href='https://www.youtube.com/watch?v=n23ejN1esr4' target='_blank' rel='noreferrer'>
          <img src={robert} className="App-logo" alt="robert" />
        </a>
        <div class="main">
          <div class="inner">
            <h2>FOOD</h2>
            <p className='quote strikethrough'>Every day is a soup day ~ wonim</p>
            <table>
              <tr>
                <th>Week day</th>
                <th>Food</th>
              </tr>
              {
                weekData.map((val, key) => {
                  return (
                      <tr key={key}>
                          <td>{val.day}</td>
                          <td>{val.food}</td>
                      </tr>
                  )
              })}
            </table>
          </div>
          <div class="inner">
            <img src="https://i.makeagif.com/media/5-14-2015/lh8HTV.gif" alt="gonciarz" width="100%"></img>
            <table>
              <tr>
                <td>Favourite team</td>
                <td>{favouriteTeam}</td>
              </tr>
            </table>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
