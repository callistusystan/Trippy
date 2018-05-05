import _ from 'lodash';
import React from "react"
import {Card, Divider, Drawer, ListItem} from "material-ui"
import firebase from "firebase/index";
import VotingCard from "../components/VotingCard";
import Ranking from "../components/Ranking";
import FacebookIcon from "../icons/facebook.png"
import ZomatoIcon from "../icons/zomato.svg"
import YelpIcon from "../icons/yelp.png"
import GoogleIcon from "../icons/google.png"
import SaveIcon from "../icons/diskette.svg"
const AttractionCard = props => {
    const {style, cardStyle, data, id, rating} = props
    let source;
    if (props.source === 'Facebook') source = FacebookIcon;
    else if (props.source === 'Zomato') source = ZomatoIcon;
    else if (props.source === 'Yelp') source = YelpIcon;
    else source = GoogleIcon;
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center",marginBottom:10, ...style}}>
            <VotingCard
                path={`abc123/transport/${id}`}
                style={{
                    boxShadow: "0 0 0 0",
                    width: "98%",
                    height: "100%",
                    minWidth: 300,
                    padding: 10,
                    ...cardStyle
                }}
                rating={rating}
            >
                <div style={{display: "flex", width: "100%", alignItems: "center", padding:5,height:41}}>
                    <span style={{letterSpacing: 1}}>{props.company_name}</span>
                    <span style={{flex: 1}}/>
                    <h3 style={{ color: '#27ae60' }}>{props.average_price}</h3>
                </div>
                <Divider/>
                <div
                    style={{
                        height: 100,
                        width: '100%',
                        background: `url(${props.image})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                <Divider/>
                <div style={{ flex: 1, padding: 8, display: 'flex', alignItems: 'center' }}>
                    <h3>Available Cars:&nbsp;{props.cars_available}</h3>
                </div>

            </VotingCard>
        </div>
    )
}

class TransportDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            transportItems: [],
            ranking: []
        };
        const car_rentals = firebase.database().ref('car_data');
        const votesRef = firebase.database().ref('abc123/transport/').orderByChild('votes');
        votesRef.on('value', snapshot => {
            let vals = [];
            snapshot.forEach((childSnapshot) => {
                const index = childSnapshot.key;
                const val = childSnapshot.val();
                vals.push({index, votes: val.votes});
            });
            this.setState({ranking: _.reverse(vals)});
        });
        const p1 = new Promise(res => car_rentals.on('value', snapshot => {
            res(snapshot.val())
        }));
        Promise.all([p1]).then(res => {
            const [x] = res;
            this.setState({transportItems: [...x]}, () => console.log(this.state.transportItems));
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        const {open, style} = this.props
        if (this.state.transportItems.length === 0) return <div />
        return (
            <Drawer open={open} width={"100%"} containerStyle={{padding: 70, boxShadow: undefined, ...style}}>
                <div style={{background: "rgba(255,255,255,0.8)", width: "100%", height: "100%", padding: 20}}>
                    <div style={{display:"flex"}}>
                        <span style={{letterSpacing: 1}}>SELECT LANDMARK</span>
                        <div style={{flex:1}}/>
                        <div onClick={this.props.closeAll} className={"pointer"}><img height={25} width={25} src={SaveIcon}/></div>
                    </div>
                    <div style={{height: 15}}/>
                    <div style={{display: "flex", height: "95%", paddingBottom: 20}}>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                overflowY: "scroll",
                                height: "100%",
                            }}
                        >
                            {this.state.transportItems.map((x, i) => <AttractionCard {...x} id={i} style={{flex: 1}}/>)}
                            <span style={{flex: 1, minWidth: 300,}}/>
                            <span style={{flex: 1, minWidth: 300,}}/>
                            <span style={{flex: 1, minWidth: 300,}}/>
                        </div>
                        <Ranking
                            threshold={5}
                            style={{height: '100%'}}
                            ranking={this.state.transportItems.length > 0 && this.state.ranking.map(({index, votes}) => {
                                const data = this.state.transportItems[index];
                                const {location} = data
                                const lat_lng = {lat:location.lat,lng:location.lon}
                                return {title: data.company_name, votes,lat_lng};
                            })}
                            path='abc123/transport'
                        />
                    </div>
                </div>
            </Drawer>
        )
    }
}

export default TransportDrawer;