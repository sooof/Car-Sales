import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  //console.log("Header props = ", props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};
const mapState = (state) => {
  return {
    car: state.car
  }
}

// export default Header;
export default connect(mapState)(Header);
