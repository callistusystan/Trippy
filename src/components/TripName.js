import React, { Component } from 'react';
import { TextField } from 'material-ui';
import { Icon } from 'antd';

class TripName extends Component {

    state = {
        editMode: false
    };

    render() {
        const { editMode } = this.state;
        const { name } = this.props;
        return (
            <div>
                {
                    editMode ?
                        <TextField /> :
                        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                            <h1 style={{ margin: 0 }}>{name}</h1>
                            <Icon type="edit" style={{ marginLeft: 8 }} />
                        </div>
                }
            </div>
        );
    }
}

export default TripName;