import robert from './robert-lewandowski.png';
import './App.css';

const weekData = [
  { day: "Monday", food: "China Bar" },
  { day: "Tuesday", food: "Sevi Oriental" },
  { day: "Wednesday", food: "Hindus" },
  { day: "Thursday", food: "Variety (Bonarka)" },
  { day: "Friday", food: "Variety (Bonarka)" },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daily Krystian Status</h1>
        <img src={robert} className="App-logo" alt="robert" />
        <p className='quote'>Every day is a soup day ~ wonim</p>
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
      </header>
    </div>
  );
}

export default App;
