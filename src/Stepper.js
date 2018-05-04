import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import React from "react"

const stepperStyle ={fontWeight:200}

class CustomStepper extends React.Component{
    render(){
        return(
          <Stepper activeStep={0} connector={<ArrowForwardIcon />}>
              <Step>
                  <StepLabel style={stepperStyle}>Form a group</StepLabel>
              </Step>
              <Step>
                  <StepLabel style={stepperStyle}>Select a time frame</StepLabel>
              </Step>
              <Step>
                  <StepLabel style={stepperStyle}>Select a location</StepLabel>
              </Step>
              <Step>
                  <StepLabel style={stepperStyle}>Select places to visit</StepLabel>
              </Step>

              <Step>
                  <StepLabel style={stepperStyle}>Create an ad</StepLabel>
              </Step>
          </Stepper>
        )
    }
}

export default CustomStepper