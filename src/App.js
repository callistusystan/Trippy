import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMapReact from "google-map-react";
import {FlatButton} from "material-ui"
import FormGroupDrawer from "./drawers/FormGroupDrawer"
const buttonStyle ={fontWeight:200}
class App extends Component {
    static defaultProps = {
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 1
    }

    state = {
        newGroupDrawerOpen:false,
        timeFrameDrawerOpen:false,
        locationDrawerOpen:false,
        landmarksDrawerOpen:false,
    }

    render() {
        const {newGroupDrawerOpen} = this.state
        return (
          <div style={{height: '100vh', width: '100%'}}>
              <div
                style={{
                    height:75,
                    width:"100%",
                    background:"#fff",
                    position:"fixed",
                    top:0,
                    zIndex:1301,
                    display:"flex",
                    alignItems:"center"
                }}
              >
                  <span style={{letterSpacing:2,margin:30}}>TRAVERSAL</span>
              </div>
              <FormGroupDrawer open={newGroupDrawerOpen}/>
              <GoogleMapReact
                bootstrapURLKeys={{key: "AIzaSyB2KWm73tDpOV2yiIO7M7BoO-D_GIdNURM"}}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >

              </GoogleMapReact>

              <div
                style={{
                    height:75,
                    width:"100%",
                    background:"#fff",
                    position:"fixed",
                    bottom:0,
                    zIndex:1301,
                    display:"flex",
                    overflowX:"scroll"
                }}
              >
                  <FlatButton
                    onClick={()=>this.setState({newGroupDrawerOpen:!this.state.newGroupDrawerOpen})}
                    style={{height:"100%",flex:1,minWidth:173}}
                    labelStyle={buttonStyle}
                    label={"FORM A NEW GROUP"}
                  />
                  <FlatButton
                    style={{height:"100%",flex:1,minWidth:173}}
                    labelStyle={buttonStyle}
                    label={"SELECT TIME-FRAME"}
                  />
                  <FlatButton
                    style={{height:"100%",flex:1,minWidth:173}}
                    labelStyle={buttonStyle}
                    label={"SELECT LOCATION"}
                  />
                  <FlatButton
                    style={{height:"100%",flex:1,minWidth:173}}
                    labelStyle={buttonStyle}
                    label={"SELECT LANDMARKS"}
                  />
                  <FlatButton
                    style={{height:"100%",flex:1,minWidth:173}}
                    labelStyle={buttonStyle}
                    label={"CONFIRMATION"}
                  />
              </div>
          </div>
        );
    }
}

export default App;
