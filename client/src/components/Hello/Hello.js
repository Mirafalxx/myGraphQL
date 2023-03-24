import React from "react";
import { gql, useQuery } from "@apollo/client";
import { CURRENT_USER } from "../../queries";

const HELLO_QUERY = gql`
  query Hello($name: String) {
    hello(name: $name)
  }
`;

const Hello = () => {
  const { data, loading, error } = useQuery(CURRENT_USER);
  // const { data, loading, error } = useQuery(HELLO_QUERY, {
  //   variables: { name: "Maxim" },
  // });
  if (loading) return <div>loading..</div>;
  if (error) {
    console.error("error : ", error);
    return <div>Check console logs</div>;
  }

  return <div>123</div>;
};

export default Hello;
