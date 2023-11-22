import React from "react";
import './CalculateAge.css';
import Introduction from "./Introduction";

class CalculateAge extends React.Component {
    constructor() {
        super();
        this.state = {
            value: [],
            valueLeft: []};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    setValue(event) {
        const ageLeft = Math.round(((this.state.value)/80)*100);
            this.setState({valueLeft: "You lived " + ageLeft + "% of your life"});
            event.preventDefault();
            this.setState({value: ''});
    }
  
    handleSubmit(event) {
        if(this.state.value <= 80){
            this.setValue(event);
        }
        else if(this.state.value > 80){
            this.setState({valueLeft: "This program can only work upto age 80, which is average expectancy of human being"});
            event.preventDefault();
            this.setState({value: ''});
        }
        else {
            this.setState({valueLeft: "Error"});
            event.preventDefault();
            this.setState({value: ''});
        }
    }
  
    render() {
      return (
        <div>
            <div>
                <Introduction />
            </div>
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <div>
                        <input className="input" 
                            type="text" 
                            value={this.state.value} 
                            onChange={this.handleChange} placeholder="Enter your age"/>
                    </div>
                    <div>
                        <input className="submit" 
                            type="submit" 
                            value="Submit" />
                    </div>
                </div>
            </form>
            
            <h1 className="heading">
                {this.state.valueLeft}
            </h1>
        </div>
      );
    }
  }
  export default CalculateAge;