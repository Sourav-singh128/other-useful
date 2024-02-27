import React from "react";
import "./homepage.css";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import HttpsIcon from "@mui/icons-material/Https";
import Sales from "./Sales";
import BarGraph from "./BarGraph";

const salesArray = [
  {
    imgUrl: <CurrencyExchangeIcon fontSize="large" />,
    title: "Earning",
    price: "$198K",
    profit: true,
    amount: 37.8,
    imageColor: "#07ab4e",
    imageBackground: "#e1feef",
    period: "this month",
  },
  {
    imgUrl: <ListAltIcon fontSize="large" />,
    title: "Orders",
    price: "$2.4K",
    profit: false,
    amount: 2,
    imageColor: "#ae2afe",
    imageBackground: "#e7dbff",
    period: "this month",
  },
  {
    imgUrl: <AccountBalanceWalletIcon fontSize="large" />,
    title: "Balance",
    price: "$2.4K",
    profit: false,
    amount: 2,
    imageColor: "#6da8de",
    imageBackground: "#ccf2ff",
    period: "this month",
  },
  {
    imgUrl: <HttpsIcon fontSize="large" />,
    title: "Total Sales",
    price: "$89K",
    profit: true,
    amount: 11,
    imageColor: "#d80416",
    imageBackground: "#ffb4db",
    period: "this week",
  },
];
const Homepage = () => {
  return (
    <>
      <div className="homepage-container">
        <Sales details={salesArray} />
        <BarGraph />
      </div>
    </>
  );
};

export default Homepage;
