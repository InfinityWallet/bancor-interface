import { Button } from 'components/button/Button';
import TokenInputV3 from 'components/tokenInput/TokenInputV3';
import { memo } from 'react';
import { prettifyNumber } from 'utils/helperFunctions';
import { Holding } from 'redux/portfolio/v3Portfolio.types';
import { useV3WithdrawStep1 } from 'elements/earn/portfolio/v3/initWithdraw/step1/useV3WithdrawStep1';
import { CirclePercentage } from 'components/circlePercentage/CirclePercentage';
import { ReactComponent as IconLightning } from 'assets/icons/lightning.svg';
import { utils } from 'ethers';
import { V3WithdrawStep1Breakdown } from 'elements/earn/portfolio/v3/initWithdraw/step1/V3WithdrawStep1Breakdown';

interface Props {
  inputTkn: string;
  setInputTkn: (amount: string) => void;
  inputFiat: string;
  setInputFiat: (amount: string) => void;
  setStep: (step: number) => void;
  holding: Holding;
  isFiat: boolean;
  withdrawalFeeInPercent: string;
  withdrawalFeeInTkn: string;
}

const V3WithdrawStep1 = ({
  holding,
  setStep,
  inputTkn,
  setInputTkn,
  inputFiat,
  setInputFiat,
  isFiat,
  withdrawalFeeInPercent,
  withdrawalFeeInTkn,
}: Props) => {
  const {
    handleNextStep,
    token,
    setBalance,
    isInputError,
    combinedTokenBalance,
    percentageUnstaked,
    showBreakdown,
  } = useV3WithdrawStep1({
    holding,
    setStep,
    inputTkn,
    setInputTkn,
    setInputFiat,
  });

  return (
    <div className="text-center">
      <h1 className="text-[36px] font-normal mb-50">
        How much {token.symbol} do you want to withdraw?
      </h1>

      <button
        onClick={() => setBalance(100)}
        className={`flex items-center mx-auto ${
          isInputError ? 'text-error' : 'text-secondary'
        }`}
      >
        {showBreakdown && (
          <div className="relative flex items-center justify-center mr-10">
            <IconLightning className="absolute w-6 text-primary" />
            <CirclePercentage
              percentage={percentageUnstaked}
              className="w-24 h-24"
            />
          </div>
        )}
        Available {prettifyNumber(combinedTokenBalance)} {token.symbol}
      </button>

      <TokenInputV3
        token={token}
        inputTkn={inputTkn}
        setInputTkn={setInputTkn}
        inputFiat={inputFiat}
        setInputFiat={setInputFiat}
        isFiat={isFiat}
        isError={isInputError}
      />
      <div className="w-full flex justify-between px-20">
        <div className="space-x-10 opacity-50">
          <button onClick={() => setBalance(25)}>25%</button>
          <button onClick={() => setBalance(50)}>50%</button>
          <button onClick={() => setBalance(75)}>75%</button>
          <button onClick={() => setBalance(100)}>100%</button>
        </div>
        {showBreakdown && (
          <V3WithdrawStep1Breakdown
            holding={holding}
            percentageUnstaked={percentageUnstaked}
          />
        )}
      </div>

      <div className="flex justify-center">
        <Button
          className="px-50 my-40"
          onClick={handleNextStep}
          disabled={!inputTkn || isInputError}
        >
          Next {'->'}
        </Button>
      </div>

      <div className="opacity-50 space-y-10">
        <p>USD value will likely change during the cooldown period</p>
        <span>Coverage cost {withdrawalFeeInPercent}%</span>
        {Number(withdrawalFeeInTkn) > 0 && (
          <>
            <span className="px-10">-</span>
            <span>
              {prettifyNumber(withdrawalFeeInTkn)} {token.symbol}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(V3WithdrawStep1);
