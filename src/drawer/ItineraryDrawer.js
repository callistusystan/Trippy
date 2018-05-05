import _ from "lodash"
import React from "react"
import {Drawer, FlatButton, List, ListItem, TextField} from "material-ui"
import SaveIcon from "../icons/diskette.svg"
import Ranking from "../components/Ranking";
import {connect} from "react-redux";
import calendarIcon from '../icons/calendar.svg';
import carIcon from '../icons/car.svg';
import landmarkIcon from '../icons/landmark.svg';
import planeIcon from '../icons/plane.svg';
import sleepIcon from '../icons/sleep.svg';
import spaguettiIcon from '../icons/spaguetti.svg';

const buttonStyle = {fontWeight: 200, textAlign: "left"}

const normalizeCategory = category => {
    switch(category){
        case("eats"):
            return "Food"
        default:
            return _.capitalize(category)
    }
}

const iconizeCategory = category => {
    let icon = null
    switch(category){
        case("eats"):
            icon = spaguettiIcon
            break
        case("attraction"):
            icon = landmarkIcon
            break
        case("hotel"):
            icon = sleepIcon
            break
        case("flights"):
            icon = planeIcon
            break
        case("transport"):
            icon = carIcon
            break
        default:
            break
    }
    return <img src={icon} width={20} height={20}/>
}

class ItineraryDrawer extends React.Component {
    render() {
        const {open, style, itinerary} = this.props
        console.log(this.props)
        return (
            <Drawer open={open} width={"100%"} containerStyle={{padding: 70, boxShadow: undefined, ...style}}>
                <div style={{background: "rgba(255,255,255,0.8)", width: "100%", height: "100%", padding: 20}}>
                    <div style={{display: "flex"}}>
                        <span style={{letterSpacing: 1}}>BASIC ITINERARY</span>
                        <div style={{flex: 1}}/>
                        <div onClick={this.props.closeAll} className={"pointer"}><img height={25} width={25}
                                                                                      src={SaveIcon}/></div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection:"column",
                            flexWrap: "wrap",
                            overflowY: "auto",
                            height: "100%",
                        }}
                    >
                    {Object.keys(itinerary).map(category => {
                        let array = itinerary[category]
                        if (array&&array.length >= 3){
                            array = array.slice(0,3)
                        }else{
                            array = array.slice(0,array.length)
                        }
                        return(
                            <div style={{padding:5}}>
                            <h4 style={{ margin: 0 }}>{iconizeCategory(category)}  {normalizeCategory(category)}</h4>
                            <List>{
                                array.map(el => {
                                    return <ListItem innerDivStyle={{background:"rgba(255,255,255,0.8)"}}>{el['title']}</ListItem>
                                })
                            }
                            </List>
                            </div>
                        )
                    })}
                    </div>
                </div>

            </Drawer>
        )
    }
}

const mapStateToProps = state => ({
    itinerary: state.itinerary
})

export default connect(mapStateToProps)(ItineraryDrawer)