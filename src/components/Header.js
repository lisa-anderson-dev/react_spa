import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <h1>{this.props.title} Simple SPA</h1>
            </div>
        );
    }
}

export default Header;