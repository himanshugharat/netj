import React from "react";
import { useRouter } from "next/router";
function productDetail() {
  const Router = useRouter();
  const productId = Router.query.productId;
  return <div>detail about product{productId}</div>;
}

export default productDetail;
