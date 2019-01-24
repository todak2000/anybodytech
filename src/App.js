import React, { Component } from 'react';
import SpeakPage from './Speak';
 import SearchPage from './SearchPage';
// import Result from './components/Results'
import { BrowserRouter as Router, Route} from 'react-router-dom';

 

 
class App extends Component {
 
  render() {
    return (
       
          <Router>
            <div>
              <Route exact path="/" component={SpeakPage} />
              <Route exact path="/search"  component={SearchPage} />
            </div>
          </Router>
 
            
      
    );
  }
}

export default App;



// import React, { Component } from 'react';
// import annyang from 'annyang';
// import axios from 'axios';
// import Workzone from './components/Workzone';
// import Results from './components/Results';
// import Unsupported from './components/Unsupported';
// import config from './config';
// import './App.css';

// class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       isSpeechAvailable: !!annyang,
//       transcript: '',
//       isRecording: false,
//       isFetching: false,
//       results: {},
//     };
//   }
  
//   componentWillMount() {
//     if (!this.state.isSpeechAvailable) return;

//     annyang.addCallback('result', this.handleSpeechResult);
//   }

// render() {
//     return (
//       <div className="">
//       <div className=" ">
//       {this.state.isSpeechAvailable ? this.renderOnSuccess() : this.renderOnError()}
//       </div>
//       </div>
//     );
// }

//   shouldComponentUpdate(nextProps, nextState) {
//     if (this.state.transcript !== nextState.transcript && nextState.transcript !== '') {
//       this.fetchDefinition(nextState.transcript);
//     }

//     return true;
//   }
//   renderOnSuccess = () => {
//     return (
//       <div>
//         <div className="circle1">
//           <main className="circle">
//             <Workzone
//               className="app__workzone"
//               transcript={this.state.transcript}
//               isRecording={this.state.isRecording}
//               isFetching={this.state.isFetching}
//               onRecordingStart={this.handleRecordingStart}
//               onRecordingAbort={this.abortRecording}
//             />

            
//           </main>

//           <footer className="app__footer"></footer>
//         </div>
//         <div className="circle2">
//             <div className="app__results">
//               <Results data={this.state.results} />
//             </div>
//         </div>
//       </div>
//     );
//   };

//   renderOnError = () => {
//     return <Unsupported />;
//   };

//   handleSpeechResult = (event) => {
//     this.saveTranscript(event);
//     this.abortRecording();
//   }

//   saveTranscript = (event) => {
//     this.setState({ transcript: event[0] });
//   };

//   handleRecordingStart = () => {
//     this.resetResults();
//     this.startRecording();
//   }

//   startRecording = () => {
//     annyang.start({ autoRestart: true, continuous: true });
//     this.setState({ isRecording: true });
//   };

//   abortRecording = () => {
//     annyang.abort();
//     this.setState({ isRecording: false });
//   };

//   fetchDefinition = (search_word) => {
//     this.setState({ isFetching: true });

//     axios.post(`${config.anyBodyApi}${encodeURI(search_word)}`)
//       .then(this.handleSearchResponse)
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   handleSearchResponse = ({ data }) => {
//     console.log(data);
//     let msg = new SpeechSynthesisUtterance();
//     //let voices = window.speechSynthesis.getVoices();
//     msg.text=data.results[0].profile;
//     //msg.voice = voices[0]; // Note: some voices don't support altering params
//    // msg.voiceURI = 'native';
//     // msg.volume = 1; // 0 to 1
//     //msg.rate = 0.7; // 0.1 to 10
//     //msg.pitch = 2; //0 to 2
//     msg.lang = 'en-US';
//     speechSynthesis.speak(msg);
   
//     this.setState({ results: data, isFetching: false });
//   };

//   handleSearchError = (err) => {
//     console.log(err);
//   };

//   resetResults = () => {
//     //loop thru all the results and make sure none is null before settinjg
//     this.setState({ results: {}, transcript: '' });
//   };
// }

// export default App;
