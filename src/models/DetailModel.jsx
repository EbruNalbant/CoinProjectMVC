import { FaPercent } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { MdPriceChange, MdEventAvailable } from "react-icons/md";
import { RiStockFill } from "react-icons/ri";

export class DetailModel {
  constructor(coin, history) {
    this.coin = coin;

    // preparing data for interface boxes
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Value",
        value: this.coin?.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Supply",
        value: this.coin?.supply,
      },
      {
        icon: <MdPriceChange />,
        label: "Price (USD)",
        value: this.coin?.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "Change Percent 24Hr (%)",
        value: this.coin?.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "Volume Usd 24Hr",
        value: this.coin?.volumeUsd24Hr,
      },
    ];

    // creating chart data
    this.chartData = {
      labels: history?.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        { label: "Price", data: history?.map((i) => Number(i.priceUsd)) },
      ],
    };
  }
}
