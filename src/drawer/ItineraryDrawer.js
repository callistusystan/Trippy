import React from "react"
import {Drawer} from "material-ui"
import SaveIcon from "../icons/diskette.svg"
import firebase from "firebase";

const buttonStyle = {fontWeight: 200, textAlign: "left"};

class ItineraryDrawer extends React.Component {
    state = {
        "votes": {}
    };

    componentDidMount() {
        console.log("Itinerary mounted");
        const ref = firebase.database().ref('abc123/');
        ref.on('value', (snapshot) => {
            this.setState({
                votes: snapshot.val()
            }, () => {
                console.log("!");
                console.log(this.state);
            });
        });
    };

    render() {
        const {open, style} = this.props;
        return (
            <Drawer open={open} width={"100%"} containerStyle={{padding: 70, boxShadow: undefined, ...style}}>
                <div style={{background: "rgba(255,255,255,0.8)", width: "100%", height: "100%", padding: 20}}>
                    <div style={{display: "flex"}}>
                        <span style={{letterSpacing: 1}}>BASIC ITINERARY</span>
                        <div style={{flex: 1}}/>
                        <div onClick={this.props.closeAll} className={"pointer"}><img height={25} width={25}
                                                                                      src={SaveIcon}/></div>
                    </div>
                </div>
            </Drawer>
        )
    }
}

export default ItineraryDrawer