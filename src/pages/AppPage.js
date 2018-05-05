import React, { Component } from 'react';
import AppMap from "../maps/RootMap"
import Ripples from 'react-ripples'
import SemiCircleButton from "../buttons/SemiCircleButton"
import {FlatButton, FloatingActionButton, RaisedButton} from "material-ui";

import calendarIcon from "../icons/calendar.svg"
import carIcon from "../icons/car.svg"
import landmarkIcon from "../icons/landmark.svg"
import planeIcon from "../icons/plane.svg"
import sleepIcon from "../icons/sleep.svg"
import spaguettiIcon from "../icons/spaguetti.svg"


class AppPage extends Component {

    state = {
        calendarOpen:false,
        spaguettiOpen:false,
        planeOpen:false,
        carOpen:false,
        landmarkOpen:false,
        sleepOpen:false
    }


    TopBar = props => {
        return(
            <div style={{display:"flex",top:0,width:"100%",position:"fixed",justifyContent:"center",zIndex:1}}>
                <span style={{flex:1}}/>
                <FlatButton backgroundColor={"#fff"} hoverColor={"#eaeaea"} style={{width:200,height:200,borderRadius:100,position:"relative",top:-100,}}/>
                <span style={{flex:1}}/>
                <FlatButton backgroundColor={"#fff"} hoverColor={"#eaeaea"} style={{width:200,height:200,borderRadius:100,position:"relative",top:-100,}}/>
                <span style={{flex:1}}/>
            </div>
        )
    }

    BottomBar = props => {
        return(
            <div style={{display:"flex",bottom:0,width:"100%",position:"fixed",justifyContent:"center",zIndex:1}}>
                <span style={{flex:1}}/>
                <FlatButton backgroundColor={"#fff"} hoverColor={"#eaeaea"} style={{width:200,height:150,borderRadius:100,position:"relative",bottom:-100,}}/>
                <span style={{flex:1}}/>
                <FlatButton backgroundColor={"#fff"} hoverColor={"#eaeaea"} style={{width:200,height:200,borderRadius:100,position:"relative",bottom:-100,}}/>
                <span style={{flex:1}}/>
            </div>
        )
    }

    LeftBar = props => {
        return (
            <div style={{display:"flex",flexDirection:"column",left:0,height:"100%",position:"fixed",justifyContent:"center",zIndex:1}}>
                <FlatButton backgroundColor={"#fff"} hoverColor={"#eaeaea"} style={{width:150,height:50,borderRadius:0,position:"relative",}}>
                    <div style={{width:'100%',display:"flex",flexDirection:"row-reverse",alignItems:"center"}}>
                        <img src={calendarIcon} width={40} height={40} style={{marginRight:10,marginLeft:10}}/>
                        <span style={{flex:1}}>CALENDAR</span>
                    </div>
                </FlatButton>
                <FlatButton backgroundColor={"#fff"} hoverColor={"#eaeaea"} style={{width:150,height:50,borderRadius:0,position:"relative",}}>
                    <div style={{width:'100%',display:"flex",flexDirection:"row-reverse",alignItems:"center"}}>
                        <img src={planeIcon} width={40} height={40} style={{marginRight:10,marginLeft:10}}/>
                        <span style={{flex:1}}>FLIGHT</span>
                    </div>
                </FlatButton>
                <FlatButton backgroundColor={"#fff"} hoverColor={"#eaeaea"} style={{width:150,height:50,borderRadius:0,position:"relative",}}>
                    <div style={{width:'100%',display:"flex",flexDirection:"row-reverse",alignItems:"center"}}>
                        <img src={spaguettiIcon} width={40} height={40} style={{marginRight:10,marginLeft:10}}/>
                        <span style={{flex:1}}>FOOD</span>
                    </div>
                </FlatButton>
                <FlatButton backgroundColor={"#fff"} hoverColor={"#eaeaea"} style={{width:150,height:50,borderRadius:0,position:"relative",}}>
                    <div style={{width:'100%',display:"flex",flexDirection:"row-reverse",alignItems:"center"}}>
                        <img src={carIcon} width={40} height={40} style={{marginRight:10,marginLeft:10}}/>
                        <span style={{flex:1}}>TRANSPORT</span>
                    </div>
                </FlatButton>
                <FlatButton backgroundColor={"#fff"} hoverColor={"#eaeaea"} style={{width:150,height:50,borderRadius:0,position:"relative",}}>
                    <div style={{width:'100%',display:"flex",flexDirection:"row-reverse",alignItems:"center"}}>
                        <img src={landmarkIcon} width={40} height={40} style={{marginRight:10,marginLeft:10}}/>
                        <span style={{flex:1}}>ATTRACTIONS</span>
                    </div>
                </FlatButton>
                <FlatButton backgroundColor={"#fff"} hoverColor={"#eaeaea"} style={{width:150,height:50,borderRadius:0,position:"relative",}}>
                    <div style={{width:'100%',display:"flex",flexDirection:"row-reverse",alignItems:"center"}}>
                        <img src={sleepIcon} width={40} height={40} style={{marginRight:10,marginLeft:10}}/>
                        <span style={{flex:1}}>ACCOMODATION</span>
                    </div>
                </FlatButton>
            </div>
        )
    }

    RightBar = props => {
        return (
            <div style={{display:"flex",flexDirection:"column",right:0,height:"100%",position:"fixed",justifyContent:"center",zIndex:1}}>
                <span style={{flex:1,height:0}}/>
                <FlatButton backgroundColor={"#fff"} hoverColor={"#eaeaea"} style={{width:200,height:200,borderRadius:100,position:"relative",right:-100,}}/>
                <span style={{flex:1}}/>
                <FlatButton backgroundColor={"#fff"} hoverColor={"#eaeaea"} style={{width:200,height:200,borderRadius:100,position:"relative",right:-100,}}/>
                <span style={{flex:1}}/>
                <FlatButton backgroundColor={"#fff"} hoverColor={"#eaeaea"} style={{width:200,height:200,borderRadius:100,position:"relative",right:-100,}}/>
                <span style={{flex:1}}/>
            </div>
        )
    }


    render() {
        const { match } = this.props;
        return (
            <div style={styles.container}>
                <this.LeftBar/>
                {/*<this.RightBar/>*/}
                {/*<this.TopBar/>*/}
                {/*<this.BottomBar/>*/}
                {/*<this.LeftBar/>*/}

                <AppMap/>
            </div>
        );
    }
}

const styles = {
    container: {
        width: '100%',
        height: '100vh'
    }
};

export default AppPage;