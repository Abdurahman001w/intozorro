import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface AppLinkProps extends LinkProps {
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, children, ...otherProps } = props;
    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className])} {...otherProps}>
            {children}
        </Link>
    );
};
