/* eslint-disable no-undef, no-unused-expressions */
import { renderComponent, expect } from '../test_helper';
import App from '../../src/app/components/App';
import Home from '../../src/app/components/home/Home';
import About from '../../src/app/components/about/About'

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});

describe('Home', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Home);
  });

  it('renders the home component', () => {
    expect(component).to.exist;
  });
});

describe('About', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(About);
  });

  it('renders the about component', () => {
    expect(component).to.exist;
  });
});
