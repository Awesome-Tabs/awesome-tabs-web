/* eslint-disable no-undef, no-unused-expressions */
import { renderComponent, expect } from '../test_helper';
import About from '../../src/app/components/about/About';

describe('About', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(About);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
