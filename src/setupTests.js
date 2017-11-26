import 'jest-enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'web-audio-test-api';

Enzyme.configure({ adapter: new Adapter() });
