import * as React from 'react';
import {
  render, mount, shallow,
  ReactWrapper, ShallowWrapper,
} from 'enzyme';

import { ToolHeader } from './ToolHeader';

describe('<ToolHeader /> Enzyme Static HTML', () => {
  test('<ToolHeader /> renders', () => {
    const component = JSON.stringify(
      render(<ToolHeader headerText="The Tool" />).html(),
    );

    expect(component).toMatchSnapshot();
  });
});

describe('<ToolHeader /> Enzyme Mock DOM', () => {
  let component: ReactWrapper;
  let componentDOMNode: ReactWrapper;

  beforeEach(() => {
    component = mount(<ToolHeader headerText="The Tool" />);
    componentDOMNode = component.find('h1');
  });

  test('<ToolHeader /> renders', () => {
    expect(componentDOMNode.text()).toBe('The Tool');
  });
});

describe('<ToolHeader /> Shallow with Enzyme', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ToolHeader headerText="The Tool" />);
  });

  test('<ToolHeader /> renders', () => {
    const h1Content = wrapper.find('h1').text();
    expect(h1Content).toBe('The Tool');
  });
});
