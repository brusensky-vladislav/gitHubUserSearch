import './app.css';
import Toolbar from './toolbar';
import Search from './search';

export default function App() {
    const hi = 'Hello world';
    return (
        <section id="page" className="container">
            <header>
                <Toolbar />
            </header>
            <main>
                <Search />
            </main>
        </section>)
}