import _ from 'lodash';
import React, { Component } from 'react';
import Giraffe from '../images/giraffe.svg';
import { AutoComplete, CircularProgress, RaisedButton } from 'material-ui';
import cities from '../data/cities_S';

const CITIES = _.uniq(cities);

class GiraffeModal extends Component {
    state = {
        searchTerm: '',
        loading: false
    };

    handleClick = () => {
        this.setState({ loading: true });
        setTimeout(() => this.props.changeRoute('/app/abc123'), 500);
    };

    render() {
        const { searchTerm, loading } = this.state;
        return (
            <div style={styles.container}>
                <div style={styles.giraffeContainer}>
                    <img src={Giraffe} style={styles.giraffe}/>
                    <form style={styles.form}>
                        <h2 style={{ color: '#555' }}>Create a trip!</h2>
                        <div style={styles.textFieldContainer}>
                            <AutoComplete
                                dataSource={CITIES}
                                filter={AutoComplete.caseInsensitiveFilter}
                                fullWidth
                                maxSearchResults={5}
                                hintText='Enter a location'
                                value={searchTerm}
                                onUpdateInput={searchTerm => this.setState({ searchTerm })}
                                hintStyle={{
                                    fontSize: 24
                                }}
                                inputStyle={{
                                    fontSize: 24
                                }}
                                underlineFocusStyle={{
                                    borderColor: '#555'
                                }}
                                underlineStyle={{
                                    borderColor: '#AAA'
                                }}
                            />
                        </div>
                        <div style={{ alignSelf: 'flex-end', marginTop: 16, height: 36 }}>
                            {
                                loading ?
                                    <CircularProgress />:
                                    <RaisedButton
                                        type='submit'
                                        onClick={this.handleClick}
                                        disabled={searchTerm === ''}
                                        label='Search'
                                        primary
                                    />
                            }
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        width: '100%',
        height: 'calc(100vh - 70px)',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    giraffeContainer: {
        position: 'relative'
    },
    giraffe: {
        width: 'auto',
        height: 600
    },
    form: {
        position: 'absolute',
        width: '80%',
        height: 180,
        top: 380,
        left: 60,
        margin: 8,
        padding: '0px 8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    textFieldContainer: {
        padding: '8px 16px',
        backgroundColor: 'rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        marginTop: 8,
    }
};

export default GiraffeModal;