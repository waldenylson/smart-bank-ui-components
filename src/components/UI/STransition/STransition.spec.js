import {
    shallowMount
} from '@vue/test-utils'

import STransition from './index'

describe('STransition', () => {

    const mountFunction = config => shallowMount(STransition, {
        ...config
    });

    it('The prop transition receives a string containing the transition style', () => {
        const transitionStyle = 'bounce';
        const wrapper = mountFunction({
            propsData: {
                transition:transitionStyle
            }
        });
        expect(wrapper.vm.$props.transition).toBe(transitionStyle);
    });

});