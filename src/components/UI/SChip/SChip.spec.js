import {
    shallowMount
} from "@vue/test-utils"

import SChip from './SChip';

describe('SChip', () => {
    const mountFunction = (config) => shallowMount(SChip, {
        ...config
    })

    it('Should use the s-chip class by default', () => {
        const wrapper = mountFunction();
        expect(wrapper.classes()).toBeTruthy();
    });

    it('Should have s-chip-primary class by default', () => {
        const wrapper = mountFunction();
        expect(wrapper.classes('s-chip-primary')).toBeTruthy();
    });

    it('Should have s-chip-danger class when using type prop = danger', () => {
        const type = 'danger';
        const wrapper = mountFunction({
            propsData: {
                type
            }
        });
        expect(wrapper.classes(`s-chip-${type}`)).toBeTruthy();
    });

    it('You should not render the <i> element without passing a icon prop', () => {
        const wrapper = mountFunction();
        expect(wrapper.find('i').exists()).toBeFalsy();
    });

    it('Must render element <i> with the class passed to the icon prop', () => {
        const icon = 'mdi mdi-user';
        const wrapper = mountFunction({
            propsData: {
                icon
            }
        });
        expect(wrapper.find('i').exists()).toBeTruthy();
    });

    it(' should render the content passed through the slot', () => {
        const wrapper = mountFunction({
            slots: {
                default: '10%'
            }
        });
        expect(wrapper.find('span').text()).toBe('10%');
    });
});