import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import mic from '../assets/styles/speakermic.svg'
import Card from './Card';
import Loader from './Loader';
// import Spinner  from 'react-spinkit';


class Workzone extends Component {
  render() {
    const { isFetching } = this.props;

    return (
      <Card className={`${this.props.className} workzone`}>
        <CSSTransitionGroup
          className="workzone__row"
          component="div"
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {this.renderTranscript()}
        </CSSTransitionGroup>

        <div className="workzone__loader">
          {this.renderButton()}
        </div>

        <div className={isFetching ? `workzone__loader workzone__loader_active` : 'workzone__loader'}>
        <Loader/>
        </div>
      </Card>
    );
  }

  renderTranscript = () => {
    if (this.props.isRecording) {
       return <div className="transcript" key="active">Listening...</div>;
    }

    if (this.props.transcript.length === 0) {
      return   <span className="transcript" key="initial">Speak Now</span> 
    }

    return <span className="transcript2" key="final">Searching... {this.props.transcript}</span>;
  };

  renderButton = () => {
    const text = this.props.isRecording ? 'abort' : 'mic';
    const callback = this.props.isRecording ? this.props.onRecordingAbort : this.props.onRecordingStart;

    return <div><button className="pulse" onClick={callback}><img style={{margin:'-11%'}}src={mic} alt=''/>{}</button></div>;
  };
}

Workzone.propTypes = {
  className: PropTypes.string,
  transcript: PropTypes.string.isRequired,
  isRecording: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onRecordingStart: PropTypes.func.isRequired,
  onRecordingAbort: PropTypes.func.isRequired,
};

Workzone.defaultProps = {
  className: '',
};

export default Workzone;
