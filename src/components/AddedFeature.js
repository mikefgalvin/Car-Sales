import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCarFeature } from '../actions/carSalesActions'

const AddedFeature = props => {

  const featureRem = useSelector( state => state.car.features)

  const dispatch = useDispatch();

  const handleX = () => {
    dispatch(removeCarFeature(props.feature.id))
  }


  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleX}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
