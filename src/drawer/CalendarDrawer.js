import React from "react"
import {Drawer} from "material-ui"
import SaveIcon from "../icons/diskette.svg"

import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';


class CalendarDrawer extends React.Component {
    state = {
        from: null,
        to: null,
        enteredTo: null,
        mySelectedDays: []
    }

    isSelectingFirstDay = (from, to, day) => {
        const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
        const isRangeSelected = from && to;
        return !from || isBeforeFirstDay || isRangeSelected;
    }

    handleResetClick = () => {
        this.setState({from: null, to: null})
    }

    handleDayClick = (day) => {
        const {from, to} = this.state;
        if (from && to && day >= from && day <= to) {
            this.handleResetClick();
            return;
        }
        if (this.isSelectingFirstDay(from, to, day)) {
            this.setState({
                from: day,
                to: null,
                enteredTo: null,
            });
        } else {
            this.setState({
                to: day,
                enteredTo: day,
            });
        }
    }

    handleDayMouseEnter = (day) => {
        const {from, to} = this.state;
        if (!this.isSelectingFirstDay(from, to, day)) {
            this.setState({
                enteredTo: day,
            });
        }
    }

    render() {
        const {open, style} = this.props
        const {from, to, enteredTo} = this.state;
        const modifiers = {start: from, end: enteredTo};
        const disabledDays = {before: this.state.from};
        const selectedDays = [from, {from, to: enteredTo}];
        return (
            <Drawer open={open} width={"100%"} containerStyle={{padding: 70, boxShadow: undefined, ...style}}>
                <div style={{
                    background: "rgba(255,255,255,0.9)",
                    width: "100%",
                    height: "100%",
                    padding: 20,
                    overflowY: "scroll"
                }}>
                    <div style={{display:"flex"}}>
                        <span style={{letterSpacing: 1}}>SELECT TRAVELLING DATES</span>
                        <div style={{flex:1}}/>
                        <div onClick={this.props.closeAll} className={"pointer"}><img height={25} width={25} src={SaveIcon}/></div>
                    </div>
                    <DayPicker
                        className="Range"
                        numberOfMonths={12}
                        fromMonth={new Date()}
                        selectedDays={selectedDays}
                        pagedNavigation
                        modifiers={modifiers}
                        onDayClick={this.handleDayClick}
                        onDayMouseEnter={this.handleDayMouseEnter}
                    />
                </div>
                <style>
                    {`
                          .Range .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                            background-color: #f0f8ff !important;
                            color: #4a90e2;
                          }
                          .Range .DayPicker-Day {
                            border-radius: 0 !important;
                          }
                    `
                    }
                </style>
            </Drawer>
        )
    }
}

export default CalendarDrawer