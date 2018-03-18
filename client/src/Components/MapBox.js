// ES6
import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZG91Z2llY2hvbmciLCJhIjoiY2pleGRwZGNwMTdqZzJ5cHNpMjVoeGdvdSJ9.zp0szttBt7tDbVkGlY9Xrg"
});

export default class MapBoxMap extends React.Component {
  render() {
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
          </Layer>
      </Map>
    );
  }
}