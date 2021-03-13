import React from 'react';
import Card from './card';
import './search.css';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            user: {},
        }
    };

    componentDidMount() {
        fetch(`https://api.github.com/users/facebook`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    user: result,
                });
            });
    }
    render() {
        return (
            <div className="search__block">
                <div className="search__input">
                    <h1>Start type github user name</h1>
                    <form action="#">
                        <input className="input" placeholder="Start type username"/>
                    </form>
                </div>
                <Card user={this.state.user}/>
            </div>
        );
    }
}