import {render} from 'react-dom';
import {App} from '@/components';
import '@babel/polyfill';
import '@/styles/index.less';

render(
    <App />,
    document.getElementById('app')
);
