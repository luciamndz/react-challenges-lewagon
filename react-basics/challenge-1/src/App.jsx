import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Quote from './components/Quote';

function App() {
    const text = "App the quotes";
    return (
        <>
            <div><Header /></div>
            <div><Quote /></div>
            <div><Footer customText={text}/></div>
        </>
    );
}

export default App;
