import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && history.push("/");
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <h2 className="header">Redirecting you in {count} seconds</h2>
    </div>
  );
};

export default LoadingToRedirect;
