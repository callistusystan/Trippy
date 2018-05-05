import _ from 'lodash';
import React from "react"
import {Card, Divider, Drawer, ListItem} from "material-ui"
import firebase from "firebase/index";
import VotingCard from "../components/VotingCard";
import Ranking from "../components/Ranking";
import FacebookIcon from "../icons/facebook.png"
import ZomatoIcon from "../icons/zomato.svg"
import SaveIcon from "../icons/diskette.svg"
import YelpIcon from "../icons/yelp.png"
import GoogleIcon from "../icons/google.png"
import LinesEllipsis from "react-lines-ellipsis"
import {connect} from "react-redux"
import { Rating } from 'react-rating';
import GiraffeHead from '../images/giraffe-head.svg';


const FoodCard = props => {
    const {style, cardStyle, id} = props;
    let source;
    if (props.source === 'Facebook') source = FacebookIcon;
    else if (props.source === 'Zomato') source = ZomatoIcon;
    else if (props.source === 'Yelp') source = YelpIcon;
    else source = GoogleIcon;
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center",marginBottom:10, ...style}}>
            <VotingCard
                rating={props.rating}
                path={`abc123/eats/${id}`}
                style={{
                    boxShadow: "0 0 0 0",
                    width: "98%",
                    height: "100%",
                    minWidth: 300,
                    padding: 10,
                    ...cardStyle
                }}
            >
                <div style={{display: "flex", width: "100%", alignItems: "center", padding:5,height:41}}>
                    <span style={{letterSpacing: 1}}>{props.name}</span>
                    <span style={{flex: 1}}/>
                    <div className={'pointer'}><img onClick={()=>window.open(props.link,'_blank')} style={{height: 30, width: 'auto'}} src={source}/></div>
                </div>
                <Divider/>
                <div
                    style={{
                        height: 100,
                        width: '100%',
                        background: `url(${props.img_url})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                <Divider/>
                <div style={{ padding: 8 }}>
                    {props.about}
                </div>

            </VotingCard>
        </div>
    )
}

class FoodDrawer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            company2eats: {},
            foodItems: [],
            ranking: []
        }
    }

    componentDidMount(){
        const facebook = firebase.database().ref('facebook_data/eat');
        const zomato = firebase.database().ref('zomato_data');
        const google = firebase.database().ref('google_places_data/eat');
        const yelp = firebase.database().ref('yelp_data/eat');
        const votesRef = firebase.database().ref('abc123/eats/').orderByChild('votes');
        votesRef.on('value', snapshot => {
            let vals = []
            snapshot.forEach((childSnapshot) => {
                const index = childSnapshot.key;
                const val = childSnapshot.val();
                vals.push({index, votes: val.votes});
            });
            this.setState({ranking: _.reverse(vals)});
        });
        const p1 = new Promise(res => facebook.on('value', snapshot => {
            res(snapshot.val())
        }));
        const p2 = new Promise(res => zomato.on('value', snapshot => {
            res(snapshot.val())
        }));
        const p3 = new Promise(res => google.on('value', snapshot => {
            res(snapshot.val())
        }));
        const p4 = new Promise(res => yelp.on('value', snapshot => {
            res(snapshot.val())
        }));
        Promise.all([p1, p2, p3, p4]).then(res => {
            const [x, y, z, a] = res;
            this.setState({foodItems: [...x, ...y, ...z, ...a]});


        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        const {open, style} = this.props
        if (this.state.foodItems.length === 0) return <div />;
        return (
            <Drawer open={open} width={"100%"} containerStyle={{padding: 70, boxShadow: undefined, ...style}}>
                <div style={{background: "rgba(255,255,255,0.8)", width: "100%", height: "100%", padding: 20}}>
                    <div style={{display:"flex"}}>
                        <span style={{letterSpacing: 1}}>SELECT FOOD</span>
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
                            {this.state.foodItems.map((x, i) => <FoodCard {...x} id={i} style={{flex: 1}}/>)}
                            <span style={{flex: 1, minWidth: 300,}}/>
                            <span style={{flex: 1, minWidth: 300,}}/>
                            <span style={{flex: 1, minWidth: 300,}}/>
                        </div>
                        <Ranking
                            threshold={5}
                            style={{height: '100%'}}
                            ranking={this.state.foodItems.length > 0 && this.state.ranking.map(({index, votes}) => {
                                const data = this.state.foodItems[index];
                                console.log(data)
                                return {title: data.name, votes, lat_lng: data.lat_lng};
                            })}
                            path='abc123/eats'
                        />
                        {/*<div style={{minWidth:200,background:"rgba(255,255,255,0.8)",padding:10,height:"100%",overflowY:"scroll"}}>*/}
                        {/*<span style={{letterSpacing:2,color:"#777777"}}>Ranking</span>*/}
                        {/*{this.state.foodItems.map((v,i)=><ListItem innerDivStyle={{fontSize:10}}>#{i+1} Gami Dinner</ListItem>)}*/}
                        {/*</div>*/}
                    </div>
                </div>
            </Drawer>
        )
    }
}


export default FoodDrawer