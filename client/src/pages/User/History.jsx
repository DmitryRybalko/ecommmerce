import UserNav from "../../components/UserNav";
import { useState, useEffect } from "react";
import { getUserOrders } from "../../util/user";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "./user.css";
const History = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadUserOrders();
  }, []);

  const showOrderTable = (order) => {
    return (
      <>
        <table className="orders__table">
          <thead className="orders__table__head">
            <tr className="orders__table__row">
              <th className="orders__table__heading">Product</th>
              <th className="orders__table__heading">Price</th>
              <th className="orders__table__heading">Quantity</th>
            </tr>
          </thead>
          <tbody className="orders__table__body">
            {order.products.map((p, i) => (
              <tr className="orders__table__row" key={i}>
                <td className="orders__table__data">
                  <b>{p.product.title}</b>
                </td>
                <td className="orders__table__data">${p.product.price}</td>
                <td className="orders__table__data">{p.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="order-info-container">
          <p>
            <b>Total:</b> ${(order.paymentIntent.amount /= 10).toLocaleString()}
          </p>
          <p>Status: {order.orderStatus}</p>
        </div>
      </>
    );
  };

  const loadUserOrders = () => {
    getUserOrders(user.token)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="history-wrapper orders-wrapper">
      <div className="history__nav">
        <UserNav />
      </div>
      <div className="history__content">
        <h2 className="history__header">
          {orders.length > 0 ? "Purchased orders" : "No Purchased Orders"}
        </h2>
        {orders.map((order, i) => (
          <div key={i} className="order">
            {showOrderTable(order)}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
