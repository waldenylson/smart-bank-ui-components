import {
    shallowMount
} from '@vue/test-utils'

import STextField from './STextField'


describe('STextField', () => {

    it('There is the "input" element inside the component', () => {
        const wrapper = shallowMount(STextField);
        expect(wrapper.find('input')).toBeTruthy();
    });

    it('The "label" prop accepts number and string', () => {
        const wrapper = shallowMount(STextField);
        wrapper.setProps({label:'Testing'});
        expect( wrapper.vm.label).toBe('Testing');
    });

    it('The default value returned by type must be text', () => {
        const wrapper = shallowMount(STextField);
        expect( wrapper.vm.type).toBe('text');
    });
    
    it('Type" property that classifies the input', () => {
        const wrapper = shallowMount(STextField);
        wrapper.setProps({type:'password'});
        expect( wrapper.vm.type).toBe('password');
    });

})