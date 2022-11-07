


import React from "react";
import styles from "./Products.module.css";
import { connect } from "react-redux";
import Product from "./Product/Product";


const Products = ({products}) => {

  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
//Mapstatetoprops gets elements from the global store
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
}
//connect helps pass the states gotten from gloabl store to the present component as we have passed products key using destructuring
export default connect(mapStateToProps)(Products);