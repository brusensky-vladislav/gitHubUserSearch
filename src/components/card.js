import './card.css';
export default function Card(props) {
    const user = props.user;
    return (
        <div className="card">
            <div className="card__header">
                <div className="card__title">{user.name}</div>
                <div className="card__subtitle">{user.location}</div>
            </div>
            <img className="card__avatar" src={user.avatar_url} alt="avatar"/>
            <div className="card__content">
                <ul>
                    <li>Id: {user.id}</li>
                    <li>Public repos: {user.public_repos}</li>
                    <li>Date of creation: {user.created_at}</li>
                </ul>
            </div>
            <div className="card__actions">
                <a 
                    className="a-button" 
                    href={user.html_url} 
                    target="_blank"
                    rel="noreferrer"
                >
                    <span>View Profile</span>
                </a>
            </div>
        </div>
    );
}