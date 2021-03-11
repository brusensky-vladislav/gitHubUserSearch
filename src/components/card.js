export default function Card() {
    return (
        <div className="card">
            <div className="card__header">
                <div className="card__title">Name</div>
                <div className="card__subtitle">Location</div>
            </div>
            <img src="" alt="avatar"/>
            <div className="card__content">
                <ul>
                    <li>public repos: </li>
                </ul>
            </div>
            <div className="card__actions">
                <a className="a-button" href="https://github.com/Brusensky-pmr" target="_blank">
                <span>View Profile</span>
                </a>
            </div>
        </div>
    );
}