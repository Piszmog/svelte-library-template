import '@testing-library/jest-dom';
import {render} from '@testing-library/svelte';
import Header from '../Header.svelte';

describe('Header', () => {
    test('should render', () => {
        const {getByText} = render(Header, {props: {value: 'hello'}});
        expect(getByText('hello')).toBeInTheDocument();
    })
});
