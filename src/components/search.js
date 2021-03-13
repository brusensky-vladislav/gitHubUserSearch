import React from 'react';
import Card from './card';
import './search.css';

const changeSearchStr = ( newSearchStr ) => {
    return {
        type: 'ACTION_CHANGE_SEARCH_STR',
        payload: newSearchStr,
    }
};

export default class Search extends React.Component {
    
    minLength = 3;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            user: {},
        }
    };
    componentDidUpdate(nextProps) {
        if(nextProps.searchStr !== this.props.searchStr && this.props.searchStr.length >= this.minLength) {
            fetch(`https://api.github.com/users/${this.props.searchStr}`)
                .then(res => res.json())
                .then((result) => {
                    this.setState({
                        isLoaded: true,
                        user: result,
                    });
                });
        }
    }
    render() {
        const dispatch = this.props.dispatch;
        const { searchStr } = this.props;
        return (
            <div className="search__block">
                <div className="search__input">
                    <h1>Start type github user name {searchStr}</h1>
                    <form action="#">
                        <input 
                            className="input" 
                            placeholder="Start type username"
                            value={searchStr}
                            onChange={ (e) => {
                                dispatch( changeSearchStr(e.target.value));
                            }}
                            />
                    </form>
                </div>
                <Card user={this.state.user}/>
            </div>
        );
    }
}