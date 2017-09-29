import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';
import {expect} from 'chai';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('checks for app header text', () => {
  const component = renderIntoDocument(<App/>);
  const appHeader = findRenderedDOMComponentWithClass(component, 'App-header');
  expect(appHeader).to.be.ok;
  const appHeaderText = appHeader.textContent;
  expect(appHeaderText).to.equal('Welcome to MyHeatMaps');
});