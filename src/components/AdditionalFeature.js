import React from 'react';
import { connect } from 'react-redux';
import {addedFeature} from '../state/actions'

const AdditionalFeature = props => {
  console.log("AdditionalFeature props = ", props )
  const handleClick = () => {

  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addedFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapState = (state)=>{
  return {
     
  }
}
//export default AdditionalFeature;
export default connect(null, {addedFeature})(AdditionalFeature);
