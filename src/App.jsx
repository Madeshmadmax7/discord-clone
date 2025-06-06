import './App.css';
import Sidebar from './components/Sidebar';
import Channelbar from './components/Channelbar';
import Topbar from './components/Topbar';
import ContentBar from './components/Contentbar';
import Bottombar from './components/Bottombar';
function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-top-bar">
      <Sidebar />
      <div className="flex flex-grow overflow-hidden">
        <Channelbar />
        <div className="flex flex-col flex-grow relative overflow-hidden">
          <Topbar />
          <div className="flex-grow overflow-auto">
            <ContentBar />
          </div>
          <Bottombar />
        </div>
      </div>
    </div>
  );
}

export default App;
