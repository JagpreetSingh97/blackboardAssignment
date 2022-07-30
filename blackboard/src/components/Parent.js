function Parent(props) {
    return (
        <div className="center">
            <h3>Parent Component {props.children}</h3>
        </div>
    );
}

export default Parent;