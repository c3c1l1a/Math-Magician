import '../css/home.css';
import piGif from '../images/pi.gif';

const Home = () => (
  <div className="home">
    <div>
      <header>
        <h1>I want Pi</h1>
        <h3> React calculator </h3>
        <h4> Some background </h4>
      </header>
      <p>
        <span>

          This project is developed as part of learning
          about the ins and outs of React. As I move on in this world
          of development.
        </span>
        <span>
          I hope to develop this project to be  use for more than
          ust simple arithmetic computation. I would  want this
          project to evelove to be like Wolfram Alpha computational
          intelligence calculator.
        </span>
      </p>
    </div>
    <img alt="I want pi" src={piGif} />
  </div>
);

export default Home;
