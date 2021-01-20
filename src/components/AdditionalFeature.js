import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCarFeature } from '../actions/carSalesActions'


const AdditionalFeature = props => {

  const featureArray = useSelector( state => state.car.features)

  useEffect(() => {
    console.log('f',featureArray);
  }, [featureArray])
 

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addCarFeature(props.feature.id))
  }

  
  

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleClick} disabled={featureArray.some(x => x.id == props.feature.id)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
