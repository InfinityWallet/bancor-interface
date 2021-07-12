import 'elements/layoutHeader/LayoutHeader.css';
import { ReactComponent as IconWallet } from 'assets/icons/wallet.svg';
import { useState } from 'react';
import { WalletModal } from 'elements/walletModal/WalletModal';
import { useWeb3React } from '@web3-react/core';
import { getNetworkName } from 'utils/pureFunctions';
import { EthNetworks } from 'services/web3/types';
import { NotificationsMenu } from 'elements/notifications/NotificationsMenu';
import { SettingsMenu } from 'elements/settings/SettingsMenu';
import { LayoutHeaderMobile } from 'elements/layoutHeader/LayoutHeaderMobile';
import { ReactComponent as IconHamburger } from 'assets/icons/hamburger.svg';
import { ReactComponent as IconBancor } from 'assets/icons/bancor.svg';

interface LayoutHeaderProps {
  setIsSidebarOpen: Function;
}

export const LayoutHeader = ({ setIsSidebarOpen }: LayoutHeaderProps) => {
  const [isWalletOpen, setWalletOpen] = useState(false);
  const { chainId } = useWeb3React();

  return (
    <>
      <header className="layout-header">
        <div className="layout-header-content">
          <div className="flex items-center">
            <button className="btn-secondary btn-sm">
              <div
                className={`${
                  !chainId || chainId === EthNetworks.Mainnet
                    ? 'bg-success'
                    : chainId === EthNetworks.Ropsten
                    ? 'bg-error'
                    : 'bg-warning'
                } w-6 h-6 rounded-full mr-10`}
              />
              {getNetworkName(chainId ? chainId : EthNetworks.Mainnet)}
            </button>
          </div>

          <div className="flex items-center">
            <WalletModal isOpen={isWalletOpen} setIsOpen={setWalletOpen} />
            <NotificationsMenu />
            <span className="text-grey-3 text-20 mx-16">|</span>
            <SettingsMenu />
          </div>
        </div>
      </header>
      <LayoutHeaderMobile>
        <button onClick={() => setIsSidebarOpen(true)}>
          <IconHamburger className="w-[27px]" />
        </button>
        <div className="flex justify-center">
          <IconBancor className="w-[23px]" />
        </div>
        <div className="flex items-center justify-end">
          <NotificationsMenu />
          <div className="bg-grey-4 w-[1px] h-30 mx-10">&#8203;</div>
          <IconWallet className="text-primary-light w-[22px]" />
        </div>
      </LayoutHeaderMobile>
    </>
  );
};
