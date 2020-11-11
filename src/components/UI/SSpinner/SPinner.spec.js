import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils'

// SSPiner and STransition imports
import SSpinner from './index'
import STransition from '../STransition'

const localVue = createLocalVue();
localVue.component('STransition', STransition);

describe('SSpinner', () => {
    const mountFunction = (config) => shallowMount(SSpinner, {
        ...config,
        localVue
    })
    it('must have size in the styles-inline passing size prop', () => {
        const wrapper = mountFunction({
            propsData: {
                loading: true,
                size: 45
            }
        })
        const cp = wrapper.findComponent({
            name: 'STransition'
        })
        expect(cp.find('.spinner').attributes().style).toBe('min-height: 45px; min-width: 45px;');
    })
});