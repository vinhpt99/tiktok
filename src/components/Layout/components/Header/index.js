import classNames from 'classnames/bind';
import styles from '@/components/Layout/components/Header/Header.module.s';

const cx = classNames.bind(styles);
function Header() {
   return <header className = {cx('wrapper')}></header>
}

export default Header