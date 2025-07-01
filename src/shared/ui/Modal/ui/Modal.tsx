import React, { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import './Modal.scss'
interface ModalProps {
  className?:string;
  children?: React.ReactNode;
  active: boolean;
  setActive: (prop: boolean) => void;
}
export const Modal: FC<ModalProps> = ({ className,active, children, setActive }) => {
  return (
    <div>
  <div
      className={classNames(active ? "modal active" : "modal",{},[className])}
      onClick={() => setActive(false)}
    >
      <div className={classNames("modal-content",{},[className])} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div></div>

  );
};
