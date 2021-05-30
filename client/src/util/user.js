import axios from "axios";

export const userCart = async (cart, authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/user/cart`,
    { cart },
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const getUserCart = async (authtoken) => {
  return await axios.get(`${process.env.REACT_APP_API}/user/cart`, {
    headers: {
      authtoken,
    },
  });
};

export const saveUserAddress = async (authtoken, address, name, zip) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/user/address`,
    { address, name, zip },
    {
      headers: {
        authtoken,
      },
    }
  );
};
