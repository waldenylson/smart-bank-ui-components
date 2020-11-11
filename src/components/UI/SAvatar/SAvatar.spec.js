import {
    shallowMount
} from '@vue/test-utils';

import SAvatar from './index'

describe('SAvatar', () => {
    const mountFunction = (config) => shallowMount(SAvatar, { ...config })

    it('content passed via slot', () => {
        const wrapper = mountFunction({
            slots: {
                default: 'image'
            },
        })
        expect(wrapper.html()).toContain('image');
    });

    it('must have size in the styles-inline passing size prop', () => {
        const wrapper = mountFunction({
            propsData:{
                size:100
            }
        })
        const result = 'height: 100px; width: 100px;'
        expect(wrapper.find('.s-avatar-container').attributes('style')).toBe(result);
    });

    it('must have border-radius rounded in the styles-inline passing rounded prop', () => {
        const wrapper = mountFunction({
            propsData:{
                rounded: true
            }
        })
        expect(wrapper.find('.s-avatar-container').classes('s-avatar-rounded')).toBeTruthy();
    });

    it('Must have background color passing color prop', () => {
       const wrapper = mountFunction({
           propsData:{
               color:'blue'
           }
       })
       expect(wrapper.element.style.background).toBe('blue');
    });
});