import {
  ScrollingContainer,
  VerticalContainer,
} from '@bullsfirst/ui-lib-react';
import axios from 'axios';
import { QueryFunctionContext, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Holding } from '../../../../models';

type HoldingsQueryKey = readonly ['holdings', string | undefined];

const apiUrl = import.meta.env.VITE_API_URL;

async function fetchHoldings({
  queryKey,
}: QueryFunctionContext<HoldingsQueryKey>): Promise<Array<Holding>> {
  const [, accountId] = queryKey;
  const resp = await axios.get(`${apiUrl}/holdings?accountId=${accountId}`);
  return resp.data as Array<Holding>;
}

export const HoldingsView = () => {
  const { accountId } = useParams();
  const {
    isLoading,
    error,
    data: holdings,
  } = useQuery(['holdings', accountId], fetchHoldings);

  if (error) {
    throw error;
  }

  return (
    <VerticalContainer className="p-4 min-h-0">
      <h2 className="text-2xl">
        {isLoading
          ? 'Loading...'
          : holdings && holdings.length > 0
          ? 'Holdings'
          : 'There are no holdings in this account'}
      </h2>
      {!isLoading && holdings && holdings.length > 0 && (
        <ScrollingContainer className="mt-4">
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th className="text-right">Qty</th>
                <th className="text-right">Price</th>
                <th className="text-right">Value</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((holding) => (
                <tr key={holding.id}>
                  <td>{holding.security.id}</td>
                  <td>{holding.security.name}</td>
                  <td className="text-right">{holding.quantity}</td>
                  <td className="text-right">{holding.security.price}</td>
                  <td className="text-right">{holding.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollingContainer>
      )}
    </VerticalContainer>
  );
};
