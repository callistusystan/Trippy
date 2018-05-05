import React, { Component } from 'react';
import firebase from 'firebase';
import { Divider, ListItem } from 'material-ui';

class Ranking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            voteItems: []
        };
    }

    componentDidMount() {
        console.log(this.props);
        const dataRef = firebase.database().ref(this.props.path);
        dataRef.once('value')
            .then(snapshot => {
                this.setState({ voteItems: snapshot.val() || [] });
            })
            .catch(e => console.log(e));
    }

    renderVoteItems = () => {
        return this.state.voteItems.map((voteItem, i) => {
            return (
                <ListItem
                    key={i}
                    innerDivStyle={{ fontSize: 10 }}
                >

                </ListItem>
            );
        });
    };

    render() {
        return (
            <div style={{
                minWidth: 400,
                background: 'rgba(255,255,255,0.8)',
                padding: 10,
                height: '100%',
                overflowY: 'scroll',
                marginLeft: 8
            }}>
                <span style={{ fontSize: 24, letterSpacing: 2, color: '#777777' }}>Ranking</span>
                <Divider/>
                <div style={{ flex: 1, padding: 8 }}>
                    {
                        this.state.voteItems.length > 0 ?
                            this.renderVoteItems() :
                            <h3>No items to vote for!</h3>
                    }
                </div>
            </div>
        );
    }
}

export default Ranking;