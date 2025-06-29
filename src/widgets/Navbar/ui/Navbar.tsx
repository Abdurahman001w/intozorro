import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { array } from 'shared/config/SvgHelper/SvgHelper';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { ProfileMenu } from 'shared/ui/ProfileMenu/ProfileMenu';
import { useState } from 'react';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <nav className={classNames(cls.Navbar, {}, [className!])}>
            <div className={cls.logoBlock}>
                <img height={63} src='img/logo.svg' alt='#' />
                <h1>Intozorro</h1>
            </div>
            <div className={cls.profileBlock}>
                <ThemeSwitcher />
                <p onClick={handleClick} className={cls.profile}>A</p>
                <ProfileMenu array={array} isVisible={isClicked}/>
            </div>
        </nav>
    );
};
