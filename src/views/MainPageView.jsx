import millify from "millify";
import { FaBitcoin } from "react-icons/fa";
import LoadMoreController from "../controllers/LoadMoreController";
import CardView from "./CardView";
import { useNavigate } from "react-router-dom";

const MainPageView = ({ coins, popular }) => {
  const navigate = useNavigate();
  return (
    <div className="container-xl mt-5">
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin /> <span>Welcome, Coin List</span>
      </h4>

      <div className="d-flex gap-4 justify-content-around">
        {popular?.map((i, id) => (
          <CardView key={id} data={i} />
        ))}
      </div>
      <table className="table table-dark table table-hover w-100 mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24H Change</th>
            <th>24H Volume</th>
          </tr>
        </thead>
        <tbody>
          {coins ? (
            coins.map((coin, id) => (
              <tr onClick={() => navigate(`/coin/${coin.id}`)} key={id}>
                <td>{id + 1}</td>
                <td>
                  <span className="text-warning fw-bold me-2">
                    {coin.symbol}
                  </span>
                  <span className="text-nowrap">{coin.name}</span>
                </td>
                <td>${millify(coin.priceUsd)}</td>
                <td>${millify(coin.marketCapUsd)}</td>
                <td>${millify(coin.volumeUsd24Hr)}</td>
                <td>{millify(coin.changePercent24Hr)}%</td>
              </tr>
            ))
          ) : (
            <h1>Loading..</h1>
          )}
        </tbody>
      </table>
      <LoadMoreController />
    </div>
  );
};

export default MainPageView;
