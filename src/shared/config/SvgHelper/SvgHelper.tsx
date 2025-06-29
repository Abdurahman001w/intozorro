export enum SvgEnum {
    xmlns = 'xmlns',
    height  = 'height',
    width   = 'width',
    viewBox = 'viewBox',
    fill    = 'fill',
    d   = 'd',
    text = 'text',
    profileSrc = 'profileSrc',
}
export interface SvgProps {
    [SvgEnum.xmlns]: string;
    [SvgEnum.height]: string;
    [SvgEnum.width]: string;
    [SvgEnum.viewBox]: string;
    [SvgEnum.fill]: string;
    [SvgEnum.d]: string;
    [SvgEnum.text]: string;
    [SvgEnum.profileSrc]?: string;
}

export const array: SvgProps[] = [
    {
        xmlns: 'http://www.w3.org/2000/svg',
        height: '24px',
        width: '24px',
        viewBox: '0 -960 960 960',
        fill: '#e3e3e3',
        d: 'M200-246q54-53 125.5-83.5T480-360q83 0 154.5 30.5T760-246v-514H200v514Zm280-194q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm69-80h422q-44-39-99.5-59.5T480-280q-56 0-112.5 20.5T269-200Zm211-320q-25 0-42.5-17.5T420-580q0-25 17.5-42.5T480-640q25 0 42.5 17.5T540-580q0 25-17.5 42.5T480-520Zm0 17Z',
        text: 'Профиль',
        profileSrc: '/profile',
    },
    {
        xmlns: 'http://www.w3.org/2000/svg',
        height: '24px',
        width: '24px',
        viewBox: '0 -960 960 960',
        fill: '#e3e3e3',
        d: 'M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z',
        text: 'Добавить заведение'
    },
    {
        xmlns: 'http://www.w3.org/2000/svg',
        height: '24px',
        width: '24px',
        viewBox: '0 -960 960 960',
        fill: '#e3e3e3',
        d: 'M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z',
        text: 'Выход'
    },
]