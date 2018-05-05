import React from "react"
import {Drawer, FlatButton, TextField} from "material-ui"
import SaveIcon from "../icons/diskette.svg"
const buttonStyle ={fontWeight:200,textAlign:"left"}
class AttractionDrawer extends React.Component{
    render(){
        const {open,style} = this.props
        return(
            <Drawer open={open} width={"100%"} containerStyle={{padding:70, boxShadow: undefined, ...style}}>
                <div style={{background:"rgba(255,255,255,0.8)",width:"100%",height:"100%",padding:20}}>
                    <div style={{display:"flex"}}>
                        <span style={{letterSpacing: 1}}>SELECT ATTRACTIONS</span>
                        <div style={{flex:1}}/>
                        <div onClick={this.props.closeAll} className={"pointer"}><img height={25} width={25} src={SaveIcon}/></div>
                    </div>
                </div>
            </Drawer>
        )
    }
}

export default AttractionDrawer