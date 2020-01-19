import axios from "axios";
import CardComp from "../components/CardComp";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
export default function PhotoIndex(props) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/photos/" + props.match.params.id
      )
      .then(function(response) {
        setLoading(false);
        setPhotos(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
  if (loading) {
    return <div>loading</div>;
  }
  return <CardComp values={photos} />;
}
