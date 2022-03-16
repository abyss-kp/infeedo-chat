import logo from './logo.svg';
import './App.css';
import ChatPage from './pages/ChatPage';
import ChatMenu from './components/ChatNavigation/ChatMenu';

function App() {
  return (
    <div className="App">
      {/* <ChatPage />  */}
      <ChatMenu />
    </div>
  );
}

export default App;
