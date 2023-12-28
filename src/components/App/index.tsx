import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import {Home} from '..';
import styles from './styles.module.less';

const App = () => (
    <RecoilRoot>
        <BrowserRouter>
            <div className={styles.root}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    </RecoilRoot>
);

export default App;
