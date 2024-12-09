import UserCard from './components/user_card'
import myImage from './assets/myimage.jpeg'
import Portfolio from './components/portfolio'
import './App.css'

export default function App() {
  return (
    <div className="container">


      <Portfolio>
        <UserCard
          name="Aryan Chauhan"
          desc="I am invisible"
          image={myImage}
        />
        <h1>I have not done anything</h1>
        <p>Take thenga!!</p>
      </Portfolio>


    </div>
  )
}


