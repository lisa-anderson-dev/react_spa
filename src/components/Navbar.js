import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <ul>
                    <li><button>Home</button></li>
                    <li><button>Stuff</button></li>
                    <li><button>Contact</button></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;