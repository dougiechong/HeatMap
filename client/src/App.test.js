import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';
//import {expect} from 'chai';
const {expect} = require('chai')
  .use(require('chai-style'))
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
  expect(appHeaderText.text()).to.have.string('Some text');
});

//TODO: make reusable function to check styles
it('checks for app header styles', () => {
  const component = renderIntoDocument(<App/>);
  const appHeader = findRenderedDOMComponentWithClass(component, 'App-header');
  expect(appHeader).to.be.ok;
  expect(appHeader).to.have.style('backgroundColor', '#222');
  expect(appHeader).to.have.style('color', 'blue');
});
