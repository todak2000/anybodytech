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
        <div className='body2'>
        <div className="circle2">
            <div className="app__results">
            <h4 style={{textAlign:"center"}} className='result-item__definition'>Search Result for </h4>
            <h3 style={{fontSize:16,textTransform:"uppercase", marginTop:0,fontFamily:'Montserrat-Bold'}}>{this.props.transcript}</h3>
            <li>
                <div style={{textAlign:'left'}}>
                <img  style={{borderRadius:'100%', width:60, height:60, float:"left"}} src={this.props.location.state.results[0].img_src} alt=''/><span>
                <h3 className="result-item__definition">{this.props.location.state.results[0].profile}</h3> </span>

                <img  style={{borderRadius:'100%', width:60, height:60, float:"left"}} src={this.props.location.state.results[1].img_src} alt=''/><span>
                <h3 className="result-item__definition">{this.props.location.state.results[1].profile}</h3> </span>

                <img  style={{borderRadius:'100%', width:60, height:60, float:"left"}} src={this.props.location.state.results[2].img_src} alt=''/><span>
                <h3 className="result-item__definition">{this.props.location.state.results[2].profile}</h3> </span>
                <img  style={{borderRadius:'100%', width:60, height:60, float:"left"}} src={this.props.location.state.results[3].img_src} alt=''/><span>
                <h3 className="result-item__definition">{this.props.location.state.results[3].profile}</h3> </span> 
                <img  style={{borderRadius:'100%', width:60, height:60, float:"left"}} src={this.props.location.state.results[4].img_src} alt=''/><span>
                <h3 className="result-item__definition">{this.props.location.state.results[4].profile}</h3> </span>
                <img  style={{borderRadius:'100%', width:80, height:80, float:"left"}} src={this.props.location.state.results[5].img_src} alt=''/><span>
                <h3 className="result-item__definition">{this.props.location.state.results[5].profile}</h3> </span>
                {/* <img  style={{borderRadius:'100%', width:80, height:80, float:"left"}} src={this.props.location.state.results[6].img_src} alt=''/><span>
                <h3 className="result-item__definition">{this.props.location.state.results[6].profile}</h3> </span> */}
                {/* <img  style={{borderRadius:'100%', width:80, height:80, float:"left"}} src={this.props.location.state.results[7].img_src} alt=''/><span>
                <h3 className="result-item__definition">{this.props.location.state.results[7].profile}</h3> </span>
                <img  style={{borderRadius:'100%', width:80, height:80, float:"left"}} src={this.props.location.state.results[8].img_src} alt=''/><span>
                <h3 className="result-item__definition">{this.props.location.state.results[8].profile}</h3> </span>
                <img  style={{borderRadius:'100%', width:80, height:80, float:"left"}} src={this.props.location.state.results[9].img_src} alt=''/><span>
                <h3 className="result-item__definition">{this.props.location.state.results[9].profile}</h3> </span>
                 */}
                
               
               </div>
               
              
               
            </li>
            
        
            </div>
        </div>
        </div>

        );
    }

}

export default SearchPage;