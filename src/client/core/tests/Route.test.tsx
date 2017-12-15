import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import { Route } from '../Route';

describe('Route.js', () => {
    const TestLayout = props => <div>{props}</div>;
    const TestComponent = () => <div>TestComponent</div>;

    it('renders without crashing', () => {
        shallow(<Route path={'/'} component={TestComponent} />);
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<Route path={'/'} component={TestComponent} />);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

    it('matches snapshot', () => {
        const wrapper = shallow(<Route component={TestComponent} layout={TestLayout}/>);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });
});
