import React from 'react';
import { connect, useSelector } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addCarFeature } from './actions/carSalesActions'

const App = (props) => {

  const carState = useSelector( state => state.car )
  
  console.log(props)
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={carState} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addCarFeature={props.addCarFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {

return {
  areYouThere: true,
  additionalPrice:  state.additionalPrice,
  car: state.car,
  additionalFeatures: state.additionalFeatures,
   
}
}

export default connect(mapStateToProps, { addCarFeature })(App);
