import React from 'react';
import PropTypes from 'prop-types';
import { componentWithName } from 'airbnb-prop-types';

const IconLink = (props) => (
  <span className={props.wrapperClasses.join(' ')}>
    {props.icon && props.icon.props.name && <React.Fragment>{props.icon} &nbsp;</React.Fragment>}
    {props.link}
  </span>
);

IconLink.propTypes = {
  icon: componentWithName('Icon'),
  link: componentWithName('Link'),
  wrapperClasses: PropTypes.arrayOf(PropTypes.string)
};

IconLink.defaultProps = {
  wrapperClasses: []
};

export default IconLink;
