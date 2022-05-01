import { TopPools } from 'elements/earn/pools/TopPools';
import { PoolsTable } from 'elements/earn/pools/poolsTable/PoolsTable';
import { useState } from 'react';
import { Statistics } from 'elements/earn/pools/Statistics';
import { Page } from 'components/Page';
import { classNameGenerator } from 'utils/pureFunctions';

export const Pools = () => {
  const [searchInput, setSearchInput] = useState('');
  const [v3Selected, setV3Selected] = useState(true);

  const getTabBtnClasses = (selected: boolean, hidden?: boolean) =>
    classNameGenerator({
      'px-10 py-5 rounded-10': true,
      'bg-white dark:bg-charcoal': selected,
      hidden: hidden,
    });

  const title = 'Earn';
  const subtitle =
    'Your tokens were never exposed to Impermanent Loss during the cooldown period. Whether or not you withdraw, you’re always fully protected.';

  return (
    <Page
      title={title}
      subtitle={subtitle}
      trailing={
        <a
          href="https://newsletter.banklesshq.com/p/how-to-protect-yourself-from-impermanent"
          className="hover:underline text-primary"
          target="_blank"
          rel="noreferrer"
        >
          Learn More
        </a>
      }
    >
      <div className="mb-20">
        <button
          onClick={() => setV3Selected((prev) => !prev)}
          className={getTabBtnClasses(v3Selected)}
        >
          V3
        </button>
        <button
          onClick={() => setV3Selected((prev) => !prev)}
          className={getTabBtnClasses(!v3Selected)}
        >
          V2
        </button>
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-40">
        <div className={`${v3Selected ? 'col-span-8' : 'col-span-12'}`}>
          <PoolsTable
            v3Selected={v3Selected}
            search={searchInput}
            setSearch={setSearchInput}
          />
        </div>
        {v3Selected && (
          <div className="hidden lg:block col-span-4 space-y-40">
            <Statistics />
            <TopPools />
          </div>
        )}
      </div>
    </Page>
  );
};
