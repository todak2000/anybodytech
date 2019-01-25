import React, { Component } from 'react';
import annyang from 'annyang';
import axios from 'axios';
import Workzone from './components/Workzone';
import Results from './components/Results';
import Unsupported from './components/Unsupported';
import config from './config';
import './App.css';
import WebFont from 'webfontloader';




WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif','Montserrat-Regular','Montserrat-Bold']
  }
});





class Speak extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isSpeechAvailable: !!annyang,
      transcript: '',
      isRecording: false,
      isFetching: false,
      results: {},
      redirect:true,
    };
  }
  
   
  
  componentWillMount() {
    if (!this.state.isSpeechAvailable) return;

    annyang.addCallback('result', this.handleSpeechResult);
  }

render() {
  
  
    return (
      <div className="">
      <div className=" ">
      {this.state.isSpeechAvailable ? this.renderOnSuccess() : this.renderOnError()}
      </div>

      </div>
    );
}

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.transcript !== nextState.transcript && nextState.transcript !== '') {
      this.fetchDefinition(nextState.transcript);
    }

    return true;
  }
  renderOnSuccess = () => {
    
    return (
      <div>
        <div className="body">
          <div className="circle">
            <Workzone
              className="app__workzone"
              transcript={this.state.transcript}
              isRecording={this.state.isRecording}
              isFetching={this.state.isFetching}
              onRecordingStart={this.handleRecordingStart}
              onRecordingAbort={this.abortRecording}
            />
               

          </div>
       
        </div>
        <div className="circle2">
            <div className="app__results">
            {/* <h4 style={{marginBottom:0,fontFamily:'Montserrat-Bold',fontSize:20 }}>Search Result for </h4>
            <h3 style={{fontSize:16,textTransform:"uppercase", marginTop:0,fontFamily:'Montserrat-Bold'}}>{this.state.transcript}</h3> */}

            <Results data={this.state.results}/>
        
            </div>
        </div>
      </div>
    );
  };

  renderOnError = () => {
    return <Unsupported />;
  };

  handleSpeechResult = (event) => {
    this.saveTranscript(event);
    this.abortRecording();
  }

  saveTranscript = (event) => {
    this.setState({ transcript: event[0] });
  };

  handleRecordingStart = () => {
    this.resetResults();
    this.startRecording();
  }

  startRecording = () => {
    annyang.start({ autoRestart: true, continuous: true });
    this.setState({ isRecording: true });
  };

  abortRecording = () => {
    annyang.abort();
    this.setState({ isRecording: false });
  };

  fetchDefinition = (search_word) => {
    this.setState({ isFetching: true });

    axios.post(`${config.anyBodyApi}${encodeURI(search_word)}`)
      .then(this.handleSearchResponse)
      .catch((err) => {
        console.log(err);
      });
  };

  handleSearchResponse = ({ data }) => {
    console.log(data);
    if(data && data.results){
      this.props.history.push({
        pathname: '/search',
        search: '?search_word=abc',
        state: { results: data.results },
        
      })
    }else{
      alert('Sorry, we could not find the name. Kindly, check for other names');
      
    }
    
    
    
    let msg = new SpeechSynthesisUtterance();
    //let voices = window.speechSynthesis.getVoices();
    
    msg.text=data.results[0].profile;
    //msg.voice = voices[0]; // Note: some voices don't support altering params
   // msg.voiceURI = 'native';
    // msg.volume = 1; // 0 to 1
    //msg.rate = 0.7; // 0.1 to 10
    //msg.pitch = 2; //0 to 2
    msg.lang = 'en-US';
    speechSynthesis.speak(msg);
   
    this.setState({ results: data, isFetching: false });
  };

  handleSearchError = (err) => {
    console.log(err);
  };

  resetResults = () => {
    this.setState({ results: {}, transcript: '' });
  };
}

export default Speak;





