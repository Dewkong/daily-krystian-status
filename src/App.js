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

var youtubeToggled = false;
var easterEggFound = false;

const toggleYoutubeView = () => {
  if (!easterEggFound) return;
  var grappaDiv = document.getElementById("GrappaDiv");
  youtubeToggled = !youtubeToggled;
  grappaDiv.style.display = youtubeToggled ? "block" : "none";
}

const toggleYoutubeVid = () => {
  var grappaVid = document.getElementById("GrappaVid");
  grappaVid.src = "https://www.youtube.com/embed/n23ejN1esr4?autoplay=1";
  easterEggFound = true;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={toggleYoutubeView}>Daily Krystian Status</h1>
        <div onClick={toggleYoutubeVid}>
          <img src={robert} className="App-logo" alt="robert" />
        </div>
        <div id='GrappaDiv'>
          <iframe id='GrappaVid' allow='autoplay' width="800px" height="500px"  title="GRAPPA ICE" frameborder="0" allowFullScreen></iframe>
        </div>
        <div class="main">
          <div class="inner">
            <h2>FOOD</h2>
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
