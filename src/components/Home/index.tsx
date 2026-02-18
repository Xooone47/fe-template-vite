/**
 * @file 首页
 * @author Dylan
 */
import {FC} from 'react';
import SuccessSvg from '@/assets/success.svg?react';
import {useCurrentUser} from '@/hooks';
import styles from './index.module.less';

const Home: FC = () => {
    const user = useCurrentUser();

    return (
        <div className={styles.root}>
            <div>Hi {user?.username}</div>
            <SuccessSvg />
        </div>
    );
};

export default Home;
