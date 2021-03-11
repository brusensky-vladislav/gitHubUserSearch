import Card from './card';
import './search.css';

export default function Search() {
    return (
        <div className="search__block">
            <div className="search__input">
                <h1>Start type github user name</h1>
                <form action="#">
                    <input className="input" placeholder="Start type username"/>
                </form>
            </div>
            <Card/>
        </div>
    );
}