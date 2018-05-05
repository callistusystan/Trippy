import React, { Component } from 'react';
import firebase from 'firebase';
import { Divider, ListItem } from 'material-ui';

class Ranking extends Component {
    constructor(props) {
        super(props);
    }

    renderVoteItems = () => {
        return this.props.ranking.map((item, i) => {
            return (
                <ListItem
                    key={i}
                    innerDivStyle={{ fontSize: 10 }}
                >
                    <div style={{width:"100%",display:"flex"}}>
                    {item.title}
                    <div style={{flex:1}}/>
                    {item.votes} votes
                    </div>
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
                marginLeft: 8,
                ...this.props.style
            }}>
                <span style={{ fontSize: 24, letterSpacing: 2, color: '#777777' }}>Ranking</span>
                <Divider/>
                <div style={{ flex: 1, padding: 8 }}>
                    {
                        this.props.ranking.length > 0 ?
                            this.renderVoteItems() :
                            <h3>Vote for something!</h3>
                    }
                </div>
            </div>
        );
    }
}

export default Ranking;