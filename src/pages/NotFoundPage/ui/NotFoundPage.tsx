import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export default function NotFoundPage ({className}: NotFoundPageProps) {
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className!])}>
            not found
        </div>
    );
};