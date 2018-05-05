import React from "react"
import {Drawer, FlatButton, TextField} from "material-ui"
const buttonStyle ={fontWeight:200,textAlign:"left"}
class CalendarDrawer extends React.Component{
    render(){
        const {open} = this.props
        return(
            <Drawer open={open} width={"100%"} openSecondary>
                <div style={{height:75,top:0}}/>
                <FlatButton labelStyle={buttonStyle} label={"Generate Share Link"}/>
                <TextField/>
                <div style={{height:75,bottom:0}}/>
            </Drawer>
        )
    }
}

export default CalendarDrawer