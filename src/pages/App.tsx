import Channel from '../components/Channel';
import Header from '../components/Header';
import Highlight from '../components/Highlight';
import News from '../components/News';
import Project from '../components/Project';

function App() {
  return (
    <>
      <div className="container">
        <div className='container-wrapper'>
          <Header />
          <div className="container-grid-2-column">
            <Highlight />
            <Channel />
          </div>
          <div className="container-grid-2-column">
            <Project />
            <News />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
