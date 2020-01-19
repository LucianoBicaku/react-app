import React from "react";
import { Card, CardBody, CardImg, CardTitle, Button } from "reactstrap";
export default function CardComp(props) {
  return (
    <div>
      <Card>
        <CardImg
          onClick={() => {
            props.history.push("/photos/" + props.values.id);
          }}
          top
          width="100%"
          src={props.values.url}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.values.title} </CardTitle>
        </CardBody>
        {props.delete ? (
          <Button
            outline
            color="danger"
            onClick={() => {
              props.deletePhoto(props.values.id);
            }}
          >
            delete
          </Button>
        ) : null}
      </Card>
    </div>
  );
}
