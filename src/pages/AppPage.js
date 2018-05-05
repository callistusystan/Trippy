import React, { Component } from 'react';
import AppMap from "../maps/RootMap"
import Ripples from 'react-ripples'
import SemiCircleButton from "../buttons/SemiCircleButton"
import {FlatButton, RaisedButton} from "material-ui";



class AppPage extends Component {


    TopBar = props => {
        return(
            <div style={{display:"flex",top:0,width:"100%",position:"fixed",justifyContent:"center",zIndex:1}}>
                <span style={{flex:1}}/>

                <RaisedButton style={{width:200,height:200,position:"relative",top:-100,background:"#fff"}}>

                </RaisedButton>


                <span style={{flex:1}}/>
                <div style={{width:200,height:200,borderRadius:100,position:"relative",top:-100,background:"#fff"}}/>
                <span style={{flex:1}}/>
            </div>
        )
    }

    BottomBar = props => {
        return (
            <div style={{display:"flex",bottom:0,width:"100%",position:"fixed",justifyContent:"center",zIndex:1}}>
                <span style={{flex:1}}/>
                <div style={{width:200,height:200,borderRadius:100,position:"relative",bottom:-100,zIndex:1,background:"#fff"}}/>
                <span style={{flex:1}}/>
                <div style={{width:200,height:200,borderRadius:100,position:"relative",bottom:-100,zIndex:1,background:"#fff"}}/>
                <span style={{flex:1}}/>
            </div>
        )
    }

    LeftBar = props => {
        return (
            <div style={{display:"flex",flexDirection:"column",left:0,height:"100%",position:"fixed",justifyContent:"center",zIndex:1}}>
                <span style={{flex:1}}/>
                <div style={{width:200,height:200,borderRadius:100,position:"relative",left:-100,zIndex:1,background:"#fff"}}/>
                <span style={{flex:1}}/>
                <div style={{width:200,height:200,borderRadius:100,position:"relative",left:-100,zIndex:1,background:"#fff"}}/>
                <span style={{flex:1}}/>
            </div>
        )
    }

    RightBar = props => {
        return (
            <div style={{display:"flex",flexDirection:"column",right:0,height:"100%",position:"fixed",justifyContent:"center",zIndex:1}}>
                <span style={{flex:1}}/>
                <div style={{width:200,height:200,borderRadius:100,position:"relative",right:-100,zIndex:1,background:"#fff"}}/>
                <span style={{flex:1}}/>
                <div style={{width:200,height:200,borderRadius:100,position:"relative",right:-100,zIndex:1,background:"#fff"}}/>
                <span style={{flex:1}}/>
            </div>
        )
    }


    render() {
        const { match } = this.props;
        return (
            <div style={styles.container}>
                <this.TopBar/>
                <this.LeftBar/>
                <this.RightBar/>
                <this.BottomBar/>
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