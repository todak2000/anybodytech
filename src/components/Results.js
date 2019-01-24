import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ResultItem from './ResultItem';

class Results extends Component {
  render() {
    return (
      <CSSTransitionGroup
        className="results"
        component="ul"
        transitionName="swing"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {this.renderResults()}
      </CSSTransitionGroup>
    );
  }

  renderResults = () => {
    const { results, search_name } = this.props.data;

    if (results && results === 'no_results') {
      
      return  <ResultItem/>  
    }

    if (search_name && results.length > 0) {
      return (
        results.map((result) => {
          return (
            <ResultItem
              // key={result.percentage}
              profile={result.profile}
              img_src={result.img_src}
              description={result.description}
              percentage={result.percentage}
              likely_occupation={result.likely_occupation}
            />
          );
        })
      );
    }

    return;
  };
}

Results.propTypes = {
  data: PropTypes.object,
};

Results.defaultProps = {
  data: {},
};

export default Results;
