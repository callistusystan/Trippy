import React, { Component } from 'react';
import { TextField } from 'material-ui';
import { Icon } from 'antd';

class TripName extends Component {

    state = {
        editMode: false
    };

    render() {
        const { editMode } = this.state;
        const { onChange, name } = this.props;
        const minWidth = 270;
        return (
            <div>
                <form style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <div style={{ minWidth}}>
                        {
                            editMode ?
                                <TextField
                                    onChange={onChange}
                                    value={name}
                                    style={{ minWidth }}
                                    inputStyle={{
                                        fontSize: 28,
                                        fontFamily: 'Open Sans'
                                    }}
                                    underlineFocusStyle={{
                                        borderColor: '#555'
                                    }}
                                    underlineStyle={{
                                        borderColor: '#AAA'
                                    }}
                                /> :
                                <h1 style={{ margin: 0 }}>{name}</h1>
                        }
                    </div>
                    <button
                        type='submit'
                        onClick={event => {
                            event.preventDefault();
                            this.setState({ editMode: !editMode })
                        }}
                        style={{ visibility: 'hidden' }}
                    />
                    <Icon
                        onClick={() => this.setState({ editMode: !editMode })}
                        type={editMode ? 'check' : 'edit'}
                        style={{
                            marginLeft: 8,
                            cursor: 'pointer'
                        }}
                    />
                </form>
            </div>
        );
    }
}

export default TripName;