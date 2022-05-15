import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary,
    outlined,
    disabled,
    leftIcon,
    rightIcon,
    rounded = false,
    text = false,
    small = false,
    large = false,
    medium = false,
    children,
    onClick,
    ...passedProps
}) {
    let Comp = 'button';
    const props = { onClick };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        delete props.onClick;
    }

    const classes = cx('wrapper', {
        primary,
        outlined,
        text,
        small,
        large,
        disabled,
        rounded,
    });
    return (
        <Comp className={classes} {...props} {...passedProps}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
