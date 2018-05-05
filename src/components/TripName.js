import React, { Component } from 'react';

class TripName extends Component {
    render() {
        const { name } = this.props;
        return (
            <div>
                <h1>{name}</h1>
            </div>
        );
    }
}

export default TripName;