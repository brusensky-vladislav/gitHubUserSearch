import Search from './search';
import Card from './card';
export default function MainComponent(props) {
    if(props.id) {
        return (
            <>
            <Search setUser={props.setUser}/>
            <Card user={props.user}/>
            </>
        );
    } else {
        return <Search setUser={props.setUser}/>;
    }
};