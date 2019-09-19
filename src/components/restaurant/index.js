import React, { useEffect } from "react";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import ContentTabs from "../content-tabs";
import Hero from "../app/hero";
import styles from "./restaurant.module.css";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/ac";

function Restaurant({ restaurant, fetchProducts }) {
  useEffect(() => {
    fetchProducts(restaurant.id);
  }, [restaurant, fetchProducts]);

  const contentItems = [
    {
      tabTitle: "Menu",
      tabContent: <Menu menu={restaurant.menu} />
    },
    {
      tabTitle: "Reviews",
      tabContent: <Reviews restaurant={restaurant} />
    }
  ];

  return (
    <>
      <Hero heading={restaurant.name} />
      <ContentTabs items={contentItems} tabPaneClassName={styles.tabPane} />
    </>
  );
}

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array
  })
};

export default connect(
  null,
  { fetchProducts }
)(Restaurant);
