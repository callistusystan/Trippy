import React, { Component } from 'react';
import { Snackbar, TextField } from 'material-ui';
import { Icon } from 'antd';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class TripName extends Component {

    state = {
        editMode: false,
        open: false
    };

    render() {
        const { editMode } = this.state;
        const { onChange, name } = this.props;
        const minWidth = 270;
        return (
            <div>
                <form style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <div style={{ minWidth, height: 48 }}>
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
                                <h1 style={{ display: 'flex', alignItems: 'center', margin: 0, height: 48 }}>{name}</h1>
                        }
                    </div>
                    <button
                        type='submit'
                        onClick={event => {
                            event.preventDefault();
                            this.setState({ editMode: !editMode });
                        }}
                        style={{ visibility: 'hidden' }}
                    />
                    <div>
                        <CopyToClipboard
                            text='http://fb-hack-2018.firebaseapp.com/app/abc123'
                            onCopy={() => this.setState({open: true})}
                        >
                            <Icon
                                type='copy'
                                style={{
                                    marginLeft: 8,
                                    cursor: 'pointer'
                                }}
                            />
                        </CopyToClipboard>
                        <br/>
                        <Icon
                            onClick={() => this.setState({ editMode: !editMode })}
                            type={editMode ? 'check' : 'edit'}
                            style={{
                                marginLeft: 8,
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                </form>

                <Snackbar
                    open={this.state.open}
                    message='Link copied'
                    autoHideDuration={3000}
                    onRequestClose={() => this.setState({ open: false })}
                />
            </div>
        );
    }
}

export default TripName;