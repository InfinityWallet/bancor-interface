import { sendGTM } from 'services/api/googleTagManager';

export enum DepositEvent {
  DepositPoolClick,
  DepositClick,
  DepositUnlimitedPopupRequest,
  DepositUnlimitedPopupConfirm,
  DepositWalletRequest,
  DepositWalletConfirm,
  DepositSuccess,
  DepositFailed,
}

const depositTxtMap = new Map([
  [DepositEvent.DepositPoolClick, 'Deposit Pool Click'],
  [DepositEvent.DepositClick, 'Deposit Click'],
  [
    DepositEvent.DepositUnlimitedPopupRequest,
    'Deposit Unlimited Popup Request',
  ],
  [
    DepositEvent.DepositUnlimitedPopupConfirm,
    'Deposit Unlimited Popup Confirm',
  ],
  [DepositEvent.DepositWalletRequest, 'Deposit Wallet Request'],
  [DepositEvent.DepositWalletConfirm, 'Deposit Wallet Confirm'],
  [DepositEvent.DepositSuccess, 'Deposit Success'],
  [DepositEvent.DepositFailed, 'Deposit Failed'],
]);

interface CurrentDeposit {
  deposit_pool: string;
  deposit_blockchain: string;
  deposit_blockchain_network: string;
  deposit_input_type: string;
  deposit_token_symbol: string;
  deposit_token_amount?: string;
  deposit_token_amount_usd?: string;
  deposit_portion?: string;
  deposit_access_full_earning?: string;
  deposit_display_currency?: string;
}

let currentDeposit: CurrentDeposit;
export const setCurrentDeposit = (currDeposit: CurrentDeposit) =>
  (currentDeposit = currDeposit);

export const sendDepositEvent = (
  event: DepositEvent,
  unlimitied_selection?: boolean,
  error?: string
) => {
  const data = {
    event: depositTxtMap.get(event),
    event_properties: {
      ...currentDeposit,
      unlimitied_selection,
      error,
    },
    ga_event: {
      category: 'Deposit',
    },
  };
  sendGTM(data);
};
