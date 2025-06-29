import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileMenu.module.scss';
import { SvgProps } from 'shared/config/SvgHelper/SvgHelper';
import { AppLink } from '../AppLink/AppLink';

interface ProfileMenuProps {
    className?: string;
    array?: SvgProps[];
    isVisible: boolean;
}

export const ProfileMenu = (props: ProfileMenuProps) => {
    const { className, array, isVisible } = props;

    return (
        <div className={classNames(cls.ProfileMenu, {[cls.menuVisible]: isVisible}, [className])}>
            {array.map(({ xmlns, width, height, d, viewBox, fill, text, profileSrc }) => (
                <div className={cls.svgBlock} key={text}>
                    <svg width={width} xmlns={xmlns} height={height} viewBox={viewBox} fill={fill}>
                        <path d={d} />
                    </svg>
                    <AppLink to={profileSrc}>
                        <p>{text}</p>
                    </AppLink>
                </div>
            ))}
        </div>
    );
};
