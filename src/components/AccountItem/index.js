import React from 'react';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Test Name</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>

                <span className={cx('username')}>Test Username</span>
            </div>
        </div>
    );
}

export default AccountItem;
