import './App.css';
import {useState} from "react";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

const styles = {
  slider: {display: "flex", justifyContent:"center", alignItems: "center"},
  arrow: {margin: 20, padding: 20, background: "black", color:"white", borderRadius: 100, cursor: "pointer"},
  sliderImg: {height: 600, width:600}
}

function App() {
  const [currentImg, setCurrentImg] = useState(0);

  const arrownext = () => { setCurrentImg((prev) => prev === images.length - 1 ? 0 : prev + 1); };
  const arrowBack = () => { setCurrentImg((prev) => prev === 0 ? images.length - 1 : prev - 1); };;

  return (
        <div >
          <h1 style={{textAlign : "center"}}>Project 1: Carousel</h1>
          <div style={styles.slider}>
            <div style={styles.arrow} onClick={arrowBack}>
              ⬅
            </div>
            <img src={images[currentImg]} style={styles.sliderImg} />
            <div style={styles.arrow} onClick={arrownext}>
              ⮕
            </div>
          </div>

        </div>
  );
}

export default App;
