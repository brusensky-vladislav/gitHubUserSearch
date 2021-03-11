export default function Toolbar(props) {
    const styles = {
        fontSize: '24px',
        color: '#fff',
        fontFamily: '"Helvetica Neue", sans-serif',
    };
    return (
        <span style={styles} className="toolbar-text">{props.text}</span>
    );
}