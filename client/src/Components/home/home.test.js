import React from 'react'
import {mount, shallow} from 'enzyme'
import LandingPage from '../../pages/landing/landingPage';
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));





const wrapper = mount(<LandingPage/>);

describe('si existe LandingPage', () => {
    test('debe existir LandingPage', () => {
        expect(wrapper.find('LandingPage1')).toHaveLength(1);
    })

})