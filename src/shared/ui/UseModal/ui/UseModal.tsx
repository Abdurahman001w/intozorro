import { classNames } from "shared/lib/classNames/classNames";
import cls from "./UseModal.module.scss";
import { Button } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal";
import { Input } from "shared/ui/Input";
import { useState } from "react";
interface UseModalProps {
  className?: string;
}
export const UseModal = ({ className }: UseModalProps) => {
  const [active, setActive] = useState(false);
  return (
    <div className={classNames(cls.UseModal, {}, [className])}>
      <div>
        <div>
          <img src="" alt="404" /> <h3>Intozorro</h3>
        </div>

        <Button
          className={classNames(cls.Button, {}, [className])}
          onClick={() => setActive(true)}
        >
          Вход
        </Button>
      </div>

      <Modal active={active} setActive={setActive}>
        Main Page
        <Input placeholder="tech" />
        <Button onClick={() => setActive(false)}>enter</Button>
      </Modal>
    </div>
  );
};
