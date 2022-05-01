import { Token } from 'services/observables/tokens';
import { ReactComponent as IconProtected } from 'assets/icons/protected.svg';
import { useMemo } from 'react';
import { Row, SortingRule } from 'react-table';
import { DataTable, TableColumn } from 'components/table/DataTable';
import { useAppSelector } from 'store';
import { PoolsTableCellName } from 'elements/earn/pools/poolsTable/PoolsTableCellName';
import { PoolsTableCellRewards } from 'elements/earn/pools/poolsTable/PoolsTableCellRewards';
import { PoolsTableCellApr } from 'elements/earn/pools/poolsTable/PoolsTableCellApr';
import { SearchInput } from 'components/searchInput/SearchInput';
import { PoolsTableCellActions } from './PoolsTableCellActions';
import { ReactComponent as IconGift } from 'assets/icons/gift.svg';
import { PoolsTableSort } from './PoolsTableSort';
import { Pool, PoolV3 } from 'services/observables/pools';
import { Image } from 'components/image/Image';
import { DepositV3Modal } from 'elements/earn/pools/poolsTable/v3/DepositV3Modal';
import { prettifyNumber } from 'utils/helperFunctions';
import { sortNumbersByKey } from 'utils/pureFunctions';

interface Props {
  search: string;
  setSearch: (value: string) => void;
  v3Selected: boolean;
}

export const PoolsTable = ({ search, setSearch, v3Selected }: Props) => {
  const v2Pools = useAppSelector<Pool[]>((state) => state.pool.v2Pools);
  const v3Pools = useAppSelector<PoolV3[]>((state) => state.pool.v3Pools);

  const v2Data = useMemo<Pool[]>(() => {
    return v2Pools
      .filter((p) => p.version >= 28)
      .filter(
        (p) => p.name && p.name.toLowerCase().includes(search.toLowerCase())
      );
  }, [v2Pools, search]);

  const v3Data = useMemo<PoolV3[]>(() => {
    return v3Pools.filter(
      (p) => p.name && p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [v3Pools, search]);

  const v2Columns = useMemo<TableColumn<Pool>[]>(
    () => [
      {
        id: 'name',
        Header: 'Name',
        accessor: 'name',
        Cell: (cellData) => PoolsTableCellName(cellData.row.original),
        minWidth: 150,
        width: 180,
        sortDescFirst: true,
      },
      {
        id: 'isProtected',
        Header: 'Protected',
        accessor: 'isProtected',
        headerClassName: 'justify-center',
        Cell: (cellData) =>
          cellData.value ? (
            <div className="flex justify-center">
              <IconProtected className="w-18 h-20 text-primary" />
            </div>
          ) : (
            <div />
          ),
        sortType: (a, b) =>
          sortNumbersByKey(a.original, b.original, ['isProtected']),
        minWidth: 160,
        sortDescFirst: true,
      },
      {
        id: 'liquidity',
        Header: 'Liquidity',
        accessor: 'liquidity',
        Cell: (cellData) => prettifyNumber(cellData.value, true),
        sortType: (a, b) =>
          sortNumbersByKey(a.original, b.original, ['liquidity']),
        tooltip: 'The value of tokens staked in the pool.',
        minWidth: 130,
        sortDescFirst: true,
      },
      {
        id: 'rewards',
        Header: 'Rewards',
        accessor: 'reward',
        Cell: (cellData) => PoolsTableCellRewards(cellData.row.original),
        minWidth: 100,
        disableSortBy: true,
        tooltip:
          'Active indicates a current liquidity mining program on the pool.',
      },
      {
        id: 'apr',
        Header: 'APR',
        accessor: 'apr',
        Cell: (cellData) => PoolsTableCellApr(cellData.row.original),
        minWidth: 180,
        disableSortBy: true,
        tooltip:
          'Estimated APR based on the maximum (2x multiplier) weekly BNT Liquidity Mining rewards. Counter indicates time until 12-week rewards cycle concludes.',
      },
      {
        id: 'actions',
        Header: '',
        accessor: 'pool_dlt_id',
        Cell: (cellData) => PoolsTableCellActions(cellData.value),
        width: 50,
        minWidth: 50,
        disableSortBy: true,
      },
    ],
    []
  );

  const v3Columns = useMemo<TableColumn<PoolV3>[]>(
    () => [
      {
        id: 'name',
        Header: 'Name',
        accessor: 'name',
        Cell: (cellData) => (
          <div className="flex items-center">
            <Image
              src={cellData.row.original.reserveToken.logoURI}
              alt="Pool Logo"
              className="w-40 h-40 rounded-full mr-10"
            />
            <span>{cellData.value}</span>
          </div>
        ),
        minWidth: 100,
        sortDescFirst: true,
      },
      {
        id: 'apr',
        Header: 'Earn',
        accessor: 'apr',
        Cell: (cellData) => (
          <div className="flex items-center gap-8 text-20 text-primary">
            {cellData.value.toFixed(2)}%
            <IconGift className="w-14 h-14" />
          </div>
        ),
        tooltip: '????',
        minWidth: 130,
        sortDescFirst: true,
      },
      {
        id: 'actions',
        Header: '',
        accessor: 'poolDltId',
        Cell: (cellData) => DepositV3Modal({ pool: cellData.row.original }),
        width: 50,
        minWidth: 50,
        disableSortBy: true,
      },
    ],
    []
  );

  const defaultSort: SortingRule<Token> = { id: 'liquidity', desc: true };

  return (
    <section className="content-block pt-20">
      <div className="flex justify-between items-center mb-20 mx-[20px]">
        <div className="flex items-center gap-x-10">
          <div className="mr-16">
            <SearchInput
              value={search}
              setValue={setSearch}
              className="max-w-[300px] rounded-20 h-[35px]"
            />
          </div>
        </div>
        <PoolsTableSort />
      </div>
      {v3Selected ? (
        <DataTable<PoolV3>
          data={v3Data}
          columns={v3Columns}
          defaultSort={defaultSort}
          isLoading={!v3Pools.length}
          search={search}
        />
      ) : (
        <DataTable<Pool>
          data={v2Data}
          columns={v2Columns}
          defaultSort={defaultSort}
          isLoading={!v2Pools.length}
          search={search}
        />
      )}
    </section>
  );
};
