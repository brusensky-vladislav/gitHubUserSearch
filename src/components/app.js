import './app.css';
import Toolbar from './toolbar';
import Search from './search';

export default function App() {
    const hi = 'GitHub Search';
    return (
        <section id="page" className="container">
            <header>
                <Toolbar text={hi} />
            </header>
            <main>
                <Search />
            </main>
        </section>)
}