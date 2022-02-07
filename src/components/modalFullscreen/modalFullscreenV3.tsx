import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { ReactComponent as IconBancor } from 'assets/icons/bancor.svg';
import { ReactComponent as IconTimes } from 'assets/icons/times.svg';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
  title: string;
}

export const ModalFullscreenV3 = ({
  isOpen,
  setIsOpen,
  children,
  title,
}: Props) => {
  return (
    <>
      <Transition
        appear
        show={isOpen}
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-0"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-0"
      >
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto min-w-full max-h-screen bg-white"
          onClose={() => setIsOpen(false)}
        >
          <div className="inline-block w-full">
            <header className="fixed top-0 w-full bg-white h-[70px] flex items-center justify-between px-20">
              <h3 className="flex items-center text-20">
                <IconBancor className="w-20 mr-20" />
                {title}
              </h3>
              <button onClick={() => setIsOpen(false)}>
                <IconTimes className="w-20" />
              </button>
            </header>

            <main className="min-h-[calc(100vh-70px)] space-y-10 flex items-center justify-center">
              <div className="pt-[70px] px-20">{children}</div>
            </main>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
