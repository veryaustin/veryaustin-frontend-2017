import React, {PropTypes} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';

// Container for individual grid item
const Item = styled.div`
  width: 50vw;
  height: 50vw;
  background-color: ${props => props.color};
  transition: all .1s ease-in-out;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 10px #000000;
  }
  @media only screen and (min-width: 769px) {
    width: 20vw;
    height: 20vw;
  }
`;

// Logo image for an individual grid item
const ItemImage = styled.img`
  width: 50%;
  height: 50%;
  margin: 25%;
`;

// GridItem Component
const GridItem = (props) => {
  const {site_url, background_color, logo_url} = props.gridItem;
  return (
    <Link to={site_url} target="_blank">
      <Item color={background_color}>
        <ItemImage src={logo_url}/>
      </Item>
    </Link>
  );
};

// GridItem Props Validation
GridItem.propTypes = {
  gridItem: PropTypes.object
};

export default GridItem;