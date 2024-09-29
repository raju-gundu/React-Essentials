import reactImg from '../../assets/react-core-concepts.png';
import './Header.css'
const reactDescriptions = ["Fundamental","Crucial","Core"];

function generateRandomInt(max){
    return Math.floor(Math.random()*(max+1)); 
  }

export default function Header(){
    const descritpion = reactDescriptions[generateRandomInt(reactDescriptions.length-1)];
    return (
      <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {descritpion} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  }

