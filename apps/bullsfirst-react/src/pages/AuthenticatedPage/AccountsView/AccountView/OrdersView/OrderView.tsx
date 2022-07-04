import { Fragment } from 'react';
import axios from 'axios';
import { QueryFunctionContext, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import {
  Order,
  OrderStatusLookup,
  OrderTypeLookup,
} from '../../../../../models';
import { formatDate, formatMoney } from '../../../../../utils';

const apiUrl = import.meta.env.VITE_API_URL;

type OrderQueryKey = readonly ['order', string | undefined];

async function fetchOrder({
  queryKey,
}: QueryFunctionContext<OrderQueryKey>): Promise<Order> {
  const [, orderId] = queryKey;
  const resp = await axios.get(`${apiUrl}/orders/${orderId}`);
  return resp.data as Order;
}

export const OrderView = () => {
  const { orderId } = useParams();
  const {
    isLoading,
    error,
    data: order,
  } = useQuery(['order', orderId], fetchOrder);

  if (error) {
    throw error;
  }

  return (
    <div className="w-80 ml-4">
      <div className="border-2 rounded p-4">
        <h3 className="text-xl">
          {isLoading ? 'Loading...' : order ? order.side : 'Order not found'}
        </h3>
        {order && (
          <Fragment>
            <p>
              <span className="font-semibold tracking-wider mr-1">
                {order.security.id}
              </span>{' '}
              {order.security.name}
            </p>
            <p className="mt-2">{order.quantity} shares</p>
            <p>
              {OrderTypeLookup[order.type]} order
              {order.limitPrice && (
                <span>&nbsp;@ {formatMoney(order.limitPrice, 'USD')}</span>
              )}
            </p>
            <p>
              <span>{OrderStatusLookup[order.status]}</span> on{' '}
              {formatDate(order.createdAt)}
            </p>
          </Fragment>
        )}
      </div>
    </div>
  );
};
