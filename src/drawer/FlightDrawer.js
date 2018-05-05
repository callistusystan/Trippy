import _ from 'lodash';
import React from 'react';
import firebase from 'firebase';
import { Card, Drawer, Divider, ListItem } from 'material-ui';
import Ranking from '../components/Ranking';
import VotingCard from '../components/VotingCard';

const FlightCard = props => {
    const { style, cardStyle, data, id, path } = props;
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ...style }}>
            <VotingCard
                path={`abc123/flights/${id}`}
                style={{
                    boxShadow: '0 0 0 0',
                    width: '98%',
                    height: '95%',
                    minWidth: 300,
                    padding: 10,
                    ...cardStyle
                }}
            >
                <span style={{flex:1}}>{data.airline}</span>
                <Divider />
                <div
                    style={{
                        height: 100,
                        width: '100%',
                        background: `url(${data.airline_img})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
            </VotingCard>
        </div>
    );
};

class FlightDrawer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            flightItems: [],
            ranking: []
        };

        const flightsRef = firebase.database().ref('flight_data');
        flightsRef.on('value', snapshot => {
            this.setState({ flightItems: snapshot.val() });
        });

        const votesRef = firebase.database().ref('abc123/flights/').orderByChild('votes');
        votesRef.on('value', snapshot => {
            let vals = []
            snapshot.forEach(function(childSnapshot) {
                const index = childSnapshot.key;
                const val = childSnapshot.val();
                vals.push({ index, votes: val.votes });
            });
            this.setState({ ranking: _.reverse(vals) });
        });
    }

    renderFlightItems = () => {
        return this.state.flightItems.map((data, i) => <FlightCard id={i} data={data} style={{ flex: 1 }}/>);
    };

    render() {
        const { open, style } = this.props;
        return (
            <Drawer open={open} width={'100%'} containerStyle={{ padding: 70, boxShadow: undefined, ...style }}>
                <div style={{ background: 'rgba(255,255,255,0.8)', width: '100%', height: '100%', padding: 20 }}>
                    <span style={{letterSpacing:1}}>SELECT FLIGHT</span>
                    <div style={{ height: 15 }}/>
                    <div style={{ display: 'flex', height: '95%',paddingBottom:20 }}>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                overflowY: 'scroll',
                                height: '100%',
                            }}
                        >
                            {this.renderFlightItems()}
                            <span style={{ flex: 1, minWidth: 300, }}/>
                            <span style={{ flex: 1, minWidth: 300, }}/>
                            <span style={{ flex: 1, minWidth: 300, }}/>
                        </div>
                        <Ranking
                            ranking={this.state.ranking.map(({ index, votes }) => {
                                const data = this.state.flightItems[index];
                                return { title: data.airline, votes };
                            })}
                            path='abc123/flights'
                        />
                    </div>
                </div>
            </Drawer>
        );
    }
}

export default FlightDrawer;