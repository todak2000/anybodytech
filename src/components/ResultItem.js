import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const ResultItem = ({ profile, img_src, description, percentage,likely_occupation }) => {
  let header;

  if (profile.length !== 0 && percentage.length !== 0) {
    header = (
      <div className="imagespan">
      <img style={{ borderRadius:'100%', width:50, height:50, float:"left"}} alt=''src={img_src}img/>
      </div>
    );
  }

  return (
    <li className="result-item">
      <Card className="result-item__content">
        {header}

        <div className="result-item__body">
          <h4 className="result-item__definition">{profile}</h4>
          <h5 className="result-item__example">{description}</h5>
          <h4 className="result-item__example">{likely_occupation}</h4>
        </div>
      </Card>
    </li>
  );
};

ResultItem.propTypes = {
  profile: PropTypes.string,
  img_src: PropTypes.string,
  description: PropTypes.string,
  percentage: PropTypes.string,
  likely_occupation: PropTypes.string,
};

ResultItem.defaultProps = {
  profile: '',
  img_src: '',
  description: 'the word is so weird, there is no possible way to define it',
  percentage: 'it is impossible to put it in the same sentense with other words',
  likely_occupation:'',
};

export default ResultItem;
