import React, {Component} from 'react';
import firebase from 'firebase';
import AppMap from '../maps/RootMap';
import {FlatButton} from 'material-ui';
import documentIcon from "../icons/document.svg"
import {
    AttractionDrawer,
    AccommodationDrawer,
    CalendarDrawer,
    FlightDrawer,
    FoodDrawer,
    TransportDrawer,
    ItineraryDrawer
} from '../drawer';

import calendarIcon from '../icons/calendar.svg';
import carIcon from '../icons/car.svg';
import landmarkIcon from '../icons/landmark.svg';
import planeIcon from '../icons/plane.svg';
import sleepIcon from '../icons/sleep.svg';
import spaguettiIcon from '../icons/spaguetti.svg';
import TopBar from '../components/TopBar';
import TripName from '../components/TripName';
import ChatWidget from '../components/ChatWidget';

const LeftBarButton = props => {
    const {labelName, src, onClick, active} = props;
    return (
        <FlatButton
            className={'leftBarButton'}
            backgroundColor={'#fff'}
            hoverColor={'#eaeaea'}
            style={{width: 210, left: -150, height: 50, borderRadius: 0, position: 'relative',}}
            onClick={onClick}
            secondary={active}
        >
            <div style={{width: '100%', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                <img src={src} width={30} height={30} style={{marginRight: 15, marginLeft: 15, color: 'red'}}/>
                <span style={{flex: 1}}>{labelName}</span>
            </div>
        </FlatButton>
    );
};

class AppPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            calendarOpen: false,
            spaguettiOpen: false,
            planeOpen: false,
            carOpen: false,
            landmarkOpen: false,
            sleepOpen: false,
            itineraryOpen:false,
            tripName: 'Trip to San Francisco'
        };

        const roomRef = firebase.database().ref('abc123');
        roomRef.on('value', snapshot => {
                const val = snapshot.val();
                if (val) this.setState({ tripName: val.tripName });
                else this.setState({ tripName: 'Trip to San Francisco' });
            });
    }

    DarkBackground = props => {
        const {calendarOpen, spaguettiOpen, planeOpen, carOpen, landmarkOpen, sleepOpen} = this.state;
        return (
            <span>
                {
                    (calendarOpen || planeOpen || spaguettiOpen || carOpen || landmarkOpen || sleepOpen) &&
                    <div
                        style={{
                            width: '100%',
                            height: 'calc(100vh - 70px)',
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            zIndex: 100,
                            position: 'absolute',
                            transition: 'all 0.2s ease-in-out'
                        }}
                    />
                }
            </span>
        )
    }

    closeAllDrawers = () => new Promise((resolve) => {
        this.setState({
            calendarOpen: false,
            spaguettiOpen: false,
            planeOpen: false,
            carOpen: false,
            landmarkOpen: false,
            sleepOpen: false,
            itineraryOpen:false
        }, () => setTimeout(() => resolve('Done'), 250));
    });
    q

    openDrawer = drawerName => {
        const {calendarOpen, spaguettiOpen, planeOpen, carOpen, landmarkOpen, sleepOpen, itineraryOpen} = this.state;
        if (this.state[drawerName]) {
            this.setState({[drawerName]: false});
        } else if (calendarOpen || spaguettiOpen || planeOpen || carOpen || landmarkOpen || sleepOpen||itineraryOpen) {
            this.closeAllDrawers().then(res => {
                this.setState({[drawerName]: true});
            });
        } else {
            this.setState({[drawerName]: true});
        }
    };

    LeftBar = props => {
        const {calendarOpen, spaguettiOpen, planeOpen, carOpen, landmarkOpen, sleepOpen,itineraryOpen} = this.state;
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                left: 0,
                height: 'calc(100vh - 70px)',
                position: 'fixed',
                justifyContent: 'center',
                zIndex: 1301,
                width: 0
            }}>
                <LeftBarButton labelName={'CALENDAR'} src={calendarIcon} active={calendarOpen}
                               onClick={() => this.openDrawer('calendarOpen')}/>
                <LeftBarButton labelName={'FLIGHT'} src={planeIcon} active={planeOpen}
                               onClick={() => this.openDrawer('planeOpen')}/>
                <LeftBarButton labelName={'ACCOMMODATION'} src={sleepIcon} active={sleepOpen}
                               onClick={() => this.openDrawer('sleepOpen')}/>
                <LeftBarButton labelName={'FOOD'} src={spaguettiIcon} active={spaguettiOpen}
                               onClick={() => this.openDrawer('spaguettiOpen')}/>
                <LeftBarButton labelName={'ATTRACTION'} src={landmarkIcon} active={landmarkOpen}
                               onClick={() => this.openDrawer('landmarkOpen')}/>
                <LeftBarButton labelName={'TRANSPORT'} src={carIcon} active={carOpen}
                               onClick={() => this.openDrawer('carOpen')}/>
                <LeftBarButton labelName={'ITINERARY'} src={documentIcon} active={itineraryOpen}
                               onClick={() => this.openDrawer('itineraryOpen')}/>
            </div>
        );
    };


    render() {
        const {calendarOpen, spaguettiOpen, planeOpen, carOpen, landmarkOpen, sleepOpen, tripName,itineraryOpen} = this.state;
        return (
            <div style={styles.container}>
                <TopBar>
                    <TripName onChange={event => this.setState({tripName: event.target.value})} name={tripName}/>
                    <ChatWidget/>
                </TopBar>
                <div style={{width: '100%', height: 'calc(100vh - 70px)'}}>
                    <this.LeftBar/>
                    <CalendarDrawer open={calendarOpen} closeAll={this.closeAllDrawers}
                                    style={{marginTop: 70, height: 'calc(100vh - 70px)', backgroundColor: undefined}}/>
                    <FlightDrawer open={planeOpen} closeAll={this.closeAllDrawers}
                                  style={{marginTop: 70, height: 'calc(100vh - 70px)', backgroundColor: undefined}}/>
                    <FoodDrawer open={spaguettiOpen} closeAll={this.closeAllDrawers}
                                style={{marginTop: 70, height: 'calc(100vh - 70px)', backgroundColor: undefined}}/>
                    <TransportDrawer open={carOpen} closeAll={this.closeAllDrawers}
                                     style={{marginTop: 70, height: 'calc(100vh - 70px)', backgroundColor: undefined}}/>
                    <ItineraryDrawer open={itineraryOpen} closeAll={this.closeAllDrawers}
                                     style={{marginTop: 70, height: 'calc(100vh - 70px)', backgroundColor: undefined}}/>
                    <AttractionDrawer
                        open={landmarkOpen}
                        closeAll={this.closeAllDrawers}
                        style={{
                            marginTop: 70,
                            height: 'calc(100vh - 70px)',
                            backgroundColor: undefined
                        }}
                    />
                    <AccommodationDrawer
                        closeAll={this.closeAllDrawers}
                        open={sleepOpen}
                        style={{
                            marginTop: 70,
                            height: 'calc(100vh - 70px)',
                            backgroundColor: undefined
                        }}
                    />
                    <this.DarkBackground/>
                    <AppMap/>
                </div>
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