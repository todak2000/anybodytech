import React, {Component} from 'react';

import btn from './assets/styles/btn.png'





class SearchPage extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          results: {},
          transcript:''
        
        };

    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.transcript !== nextState.transcript && nextState.transcript !== '') {
          
        }
    
        return true;
      }
    render() {
        return (
        <div className='body2'>
        
        
              
           
        <div className="circle2">
            <div className="app__results">
            <div style={{flexDirection:"row"}}>
            <button  style={{position:"fixed",left: '2%', top: '-4%',borderRadius:"50%",width:30,height:30, marginTop:'5%',backgroundColor:'#122C3B',borderColor:'#122C3B'}} onClick={this.navigateBack}><img style={{width:40,height:40}}alt='' src={btn}/></button><span>
            <h4 style={{textAlign:"center"}} className='result-item__definition'>Search Result for </h4></span>
            <h3 key="final" style={{fontSize:16,textTransform:"uppercase", marginTop:0,fontFamily:'Montserrat-Bold'}}>{this.props.transcript}</h3>
            </div>
            <li>
            <div style={{textAlign:'left'}}>
            <img  style={{borderRadius:'100%', width:60, height:60, float:"left"}} src={this.props.location.state.results[0].img_src} alt=''/><div className="spana"> 
                <h3 className="result-item__definition_anybody">{this.props.location.state.results[0].name}</h3> 
                <h3 className="result-item__definition">{this.props.location.state.results[0].profile}</h3>
                <h3 className="result-item__definition">{this.props.location.state.results[0].likely_occupation}</h3> </div>

                <img  style={{borderRadius:'100%', width:60, height:60, float:"left"}} src={this.props.location.state.results[1].img_src} alt=''/><div className="spana">
                <h3 className="result-item__definition_anybody">{this.props.location.state.results[1].name}</h3> 
                <h3 className="result-item__definition">{this.props.location.state.results[1].profile}</h3> 
                <h3 className="result-item__definition">{this.props.location.state.results[1].likely_occupation}</h3></div>


                <img  style={{borderRadius:'100%', width:60, height:60, float:"left"}} src={this.props.location.state.results[2].img_src} alt=''/><div className="spana">
                <h3 className="result-item__definition_anybody">{this.props.location.state.results[2].name}</h3> 
                <h3 className="result-item__definition">{this.props.location.state.results[2].profile}</h3>
                <h3 className="result-item__definition">{this.props.location.state.results[2].likely_occupation}</h3> </div>

                <img  style={{borderRadius:'100%', width:60, height:60, float:"left"}} src={this.props.location.state.results[3].img_src} alt=''/><div className="spana">
                <h3 className="result-item__definition_anybody">{this.props.location.state.results[3].name}</h3> 
                <h3 className="result-item__definition">{this.props.location.state.results[3].profile}</h3>
                <h3 className="result-item__definition">{this.props.location.state.results[3].likely_occupation}</h3> </div>

                <img  style={{borderRadius:'100%', width:60, height:60, float:"left"}} src={this.props.location.state.results[4].img_src} alt=''/><div className="spana">
                <h3 className="result-item__definition_anybody">{this.props.location.state.results[4].name}</h3> 
                <h3 className="result-item__definition">{this.props.location.state.results[4].profile}</h3>
                <h3 className="result-item__definition">{this.props.location.state.results[4].likely_occupation}</h3> </div>
                
                <div className="spana">
                <div className="imageDiv">
                <img  style={{borderRadius:'100%', width:60, height:60, float:"left"}} src={this.props.location.state.results[5].img_src} alt=''/>

                </div>
                <div className="otherDiv">

                <h3 className="result-item__definition_anybody">{this.props.location.state.results[5].name}</h3> 
                <h3 className="result-item__definition">{this.props.location.state.results[5].profile}</h3>
                <h3 className="result-item__definition">{this.props.location.state.results[5].likely_occupation}</h3>

                </div>
 </div>
               
                
               
               </div>
               
              
               
            </li>
            
        
            </div>
        </div>
        </div>

        );
    }

}

export default SearchPage;