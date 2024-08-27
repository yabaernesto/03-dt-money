import { HeaderContainer, HeaderContent, NewTransitionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../../assets/logo.svg';

export function Header() {

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransitionButton>Nova transação</NewTransitionButton>
          </Dialog.Trigger>

          <NewTransitionButton />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
