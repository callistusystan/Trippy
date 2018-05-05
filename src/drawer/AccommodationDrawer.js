import React from "react"
import {Drawer, FlatButton, TextField} from "material-ui"
const buttonStyle ={fontWeight:200,textAlign:"left"}
class AccommodationDrawer extends React.Component{
    render(){
        const {open,style} = this.props
        return(
            <Drawer open={open} width={"100%"} containerStyle={{padding:70,...style}}>
                <div style={{background:"rgba(255,255,255,0.8)",width:"100%",height:"100%",padding:20}}>
                    <span style={{letterSpacing:1}}>SELECT ACCOMMODATION</span>
                </div>
            </Drawer>
        )
    }
}

export default AccommodationDrawer