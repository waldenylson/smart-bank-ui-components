import {
    shallowMount,
    RouterLinkStub,
    createLocalVue
} from '@vue/test-utils'

// components
import SButton from './SButton'
import STransition from '../STransition'
import SSpinner from '../SSPinner'

const localVue = createLocalVue();

[
    STransition,
    SSpinner
].forEach(component => {
    localVue.component(component.name, component)
})


const mountFunction = config => shallowMount(SButton, {
    ...config,
    localVue,
    stubs: {
        RouterLink: RouterLinkStub
    }
})

describe('SButton', () => {



    it('Passing the button name by slot', () => {

        const wrapper = mountFunction({
            slots: {
                default: 'Login'
            },
        })
        expect(wrapper.html()).toContain('Login');
    });

    it('Testig event emitted by click', async () => {
        const wrapper = mountFunction();
        wrapper.vm.$emit('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted().click).toBeTruthy()
    });

    it('initial state of properties must be false', () => {
        const wrapper = mountFunction();
        const {
            block,
            text,
            loading
        } = wrapper.vm.$props;
        expect(text).toBeFalsy();
        expect(block).toBeFalsy();
        expect(loading).toBeFalsy();
    });

    it('The computed property "class" must return an object', () => {
        const wrapper = mountFunction();
    });

    it('Loading spinner is active when loading prop is true', () => {
        const wrapper = mountFunction({
            propsData: {
                loading: true
            },
        });
        expect(wrapper.find('.loadingspinner')).toBeTruthy();
    });

    it('Color property must return an empty string by default', () => {
        const wrapper = mountFunction();
        expect(wrapper.vm.$props.color).toBe('');
    });

    it('color property returns the value passed by props', () => {
        const wrapper = mountFunction({
            propsData: {
                color: 'blue'
            }
        });
        expect(wrapper.vm.$props.color).toBe('blue');
    });

    it('should have s-btn-outlined class when using outlined prop', () => {
        const wrapper = mountFunction({
            propsData: {
                outlined: true
            }
        });
        expect(wrapper.find('button').classes('s-btn-outlined')).toBeTruthy()
    });

    it('should have s-btn-text class when using text prop', () => {
        const wrapper = mountFunction({
            propsData: {
                text: true
            }
        });
        expect(wrapper.find('button').classes('s-btn-text')).toBeTruthy()
    });

    it('should have s-btn-block class when using block prop', () => {
        const wrapper = mountFunction({
            propsData: {
                block: true
            }
        });
        expect(wrapper.find('button').classes('s-btn-block')).toBeTruthy()
    });

    it('Must have s-btn-size-small class when using small prop', () => {
        const wrapper = mountFunction({
            propsData: {
                small: true
            }
        });
        expect(wrapper.find('button').classes('s-btn-size-small')).toBeTruthy();
    });

    it('Must be disabled when using disabled prop', () => {
        const wrapper = mountFunction({
            propsData: {
                disabled: true
            }
        });
        expect(wrapper.element.disabled).toBeTruthy();
    });

})