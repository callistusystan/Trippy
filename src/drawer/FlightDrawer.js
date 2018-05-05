import React from "react"
import firebase from 'firebase';
import {Card, Drawer, ListItem} from "material-ui"
import Ranking from '../components/Ranking';

const FlightCard = props => {
    const {style, cardStyle, data} = props;
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", ...style}}>
            <Card
                style={{
                    boxShadow: "0 0 0 0",
                    width: "98%",
                    height: "95%",
                    minWidth: 300,
                    padding: 10,
                    ...cardStyle
                }}
            >
                <span style={{letterSpacing: 1}}>{data.airline}</span>
                <div
                    style={{
                        height: 200,
                        width: "100%",
                        background: `url(${data.airline_img})`,
                        backgroundSize: "contain",
                        backgroundPosition:"center",
                        backgroundRepeat:"no-repeat"
                    }}
                />
            </Card>
        </div>
    )
}

class FlightDrawer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            flightItems: []
        };

        const flightsRef = firebase.database().ref('flight_data');
        flightsRef.on('value', snapshot => {
            this.setState({flightItems: snapshot.val()});
        });
    }

    renderFlightItems = () => {
        return this.state.flightItems.map(data => <FlightCard data={data} style={{flex: 1}}/>);
    };

    render() {
        const {open, style} = this.props
        return (
            <Drawer open={open} width={"100%"} containerStyle={{padding: 70, boxShadow: undefined, ...style}}>
                <div style={{background: "rgba(255,255,255,0.8)", width: "100%", height: "100%", padding: 20}}>
                    <span style={{letterSpacing: 1}}>SELECT FLIGHTS</span>
                    <div style={{height: 15}}/>
                    <div style={{display: "flex", height: "95%",}}>
                        <div
                            className={'flightDiv'}
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                overflowY: "scroll",
                                height: "100%",
                            }}
                        >
                            {this.renderFlightItems()}
                            <span style={{flex: 1, minWidth: 300,}}/>
                            <span style={{flex: 1, minWidth: 300,}}/>
                            <span style={{flex: 1, minWidth: 300,}}/>
                        </div>
                        <Ranking
                            path='abc123/flights'
                        />
                    </div>
                </div>
                <style>
                    {`
                        .flightDiv ::-webkit-scrollbar-button{ display: block; height: 13px; border-radius: 0px; background-color: #AAA; } ::-webkit-scrollbar-button:hover{ background-color: #AAA; } ::-webkit-scrollbar-thumb{ background-color: #a0a0a0; } ::-webkit-scrollbar-thumb:hover{ background-color: #CCC; } ::-webkit-scrollbar-track{ background-color: #efefef; } ::-webkit-scrollbar-track:hover{ background-color: #CCC; } ::-webkit-scrollbar{ width: 5px; }
                    `}
                </style>
            </Drawer>
        )
    }
}

export default FlightDrawer