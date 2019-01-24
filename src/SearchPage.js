import React, {Component} from 'react';





class SearchPage extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          results: {},
          transcript:''
        
        };

    }
    render() {
        return (
            <div className="circle3">
            <div className="app__results">
            <h4 style={{marginBottom:0,fontFamily:'Montserrat-Bold',fontSize:20 }}>Search Result for </h4>
            <h3 style={{fontSize:16,textTransform:"uppercase", marginTop:0,fontFamily:'Montserrat-Bold'}}>{this.state.transcript}</h3>
            
               <h3>{this.props.location.state.results[0]}</h3> 
               {/* <h3>{this.props.location.state.results[1].profile}</h3> 
               <h3>{this.props.location.state.results[2].profile}</h3>
               <h3>{this.props.location.state.results[3].profile}</h3> 
               <h3>{this.props.location.state.results[4].profile}</h3> 
               <h3>{this.props.location.state.results[5].profile}</h3> 
                */}
               
            
        
            </div>
        </div>

        );
    }

}

export default SearchPage;