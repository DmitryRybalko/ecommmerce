import AdminNav from "../../components/AdminNav";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getOrders, changeStatus } from "../../util/admin";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  const loadOrders = () => {
    getOrders(user.token)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleStatusChange = (orderId, orderStatus) => {
    changeStatus(orderId, orderStatus, user.token)
      .then((res) => {
        toast.success("Status changed");
        loadOrders();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="history-wrapper">
      <div className="history__nav">
        <AdminNav />
      </div>
      <div className="history__content">
        <h2 className="history__header">Admin Dashboard</h2>
        {orders.map((order) => (
          <div key={order._id} className="order">
            <table className="orders__table">
              <thead className="orders__table__head">
                <tr className="orders__table__row">
                  <th className="orders__table__heading">Product</th>
                  <th className="orders__table__heading">Price</th>
                  <th className="orders__table__heading">Quantity</th>
                  <th className="orders__table__heading">Status</th>
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
                    <td className="orders__table__data">
                      <select
                        name="status"
                        id="status"
                        onChange={(e) =>
                          handleStatusChange(order._id, e.target.value)
                        }
                      >
                        <option value="Not Processed">Not Processed</option>
                        <option value="Processing">Processing</option>
                        <option value="Dispatched">Dispatched</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="order-info-container">
              <p>
                <b>Total:</b> $
                {(order.paymentIntent.amount /= 10).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
