import OrderList from '../orders/OrderList';
import NewOrderForm from '../orders/NewOrderForm';

export const Home = () => (
    <div className="home-container">
        <NewOrderForm />
        <OrderList />
    </div>
);