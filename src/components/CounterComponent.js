import { mount } from '@vue/test-utils';
import Task8 from './Task8.vue'; 

describe('Task8', () => {
  let wrapper;

  beforeEach(() => {
    // Mount the component before each test
    wrapper = mount(Task8);
  });

  test('renders correctly with initial count', () => {
    // Check if the initial count is 0
    expect(wrapper.text()).toContain('0');
  });

  test('increments count when button is clicked', async () => {
    const button = wrapper.find('button'); 

    await button.trigger('click'); 

    // Check if the count has incremented
    expect(wrapper.text()).toContain('1'); 

    await button.trigger('click');

    // Check if the count has incremented again
    expect(wrapper.text()).toContain('2'); 
  });
});
