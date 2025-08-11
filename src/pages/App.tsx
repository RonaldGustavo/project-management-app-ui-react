import Channel from '../components/Channel';
import Header from '../components/Header';
import Highlight from '../components/Highlight';

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <div className="container-highlight-channel">
          <Highlight />
          <Channel />
        </div>
      </div>
    </>
  );
}

export default App;
