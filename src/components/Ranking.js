import React, { Component } from 'react';
import { Divider, ListItem } from 'material-ui';
import Trophy from '../icons/trophy.svg';
import {setRank} from "../actions/itineraryActions"
import {connect} from "react-redux";

class Ranking extends Component {
    constructor(props) {
        super(props);
    }

    renderVoteItems = () => {
        const category = this.props.path.split("/")[1]
        const {ranking} = this.props
        console.log(category)
        this.props.setRank(category,ranking)
        return this.props.ranking.map((item, i) => {

            return (
                <ListItem
                    key={i}
                    innerDivStyle={{ fontSize: 16 }}
                >
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        <h3 style={{alignItems: 'center', minWidth: 32, margin: 0, marginRight: 8 }}># {i+1}</h3>
                        <span>{item.title}</span>
                        <div style={{ flex: 1 }}/>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', minWidth: 112 }}>
                            {i < (this.props.threshold || 1) &&
                            <img src={Trophy} style={{ margin: '0px 8px', width: 32, height: 32 }}/>}
                            <strong>{item.votes} vote{item.votes === 1 ? '' : 's'}</strong>
                        </div>
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
                <div style={{ flex: 1 }}>
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

export default connect(null,{setRank})(Ranking);