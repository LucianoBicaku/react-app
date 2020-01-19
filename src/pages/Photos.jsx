import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";
import CardComp from "../components/CardComp";
import "./style.css";
export default function Photos({ history }) {
  const [photos, setPhotos] = useState([]);
  let [newPhoto, setnewPhoto] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(function(response) {
        const FivePhotos = response.data.slice(0, 5);
        setPhotos(FivePhotos);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
  const deletePhoto = id => {
    let newArray = photos.filter(photo => id != photo.id);
    setPhotos(newArray);
  };
  const addPhoto = id => {
    let newArray = photos.push();
    setPhotos(newArray);
  };
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Container>
        <Row>
          {photos.map(photo => {
            return (
              <Col sm={6} md={4} lg={3}>
                <div>
                  <CardComp
                    delete={true}
                    deletePhoto={deletePhoto}
                    values={photo}
                    history={history}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Button color="success" className="add-button" onClick={() => toggle()}>
        Add
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add photo</ModalHeader>
        <ModalBody>
          <InputGroup>
            <Input placeholder="Image url" />
          </InputGroup>
          <br />
          <InputGroup>
            <Input placeholder="AlbumId" />
          </InputGroup>
          <br />
          <InputGroup>
            <Input placeholder="Title" />
          </InputGroup>
          <br />
          <InputGroup>
            <Input placeholder="Id" />
          </InputGroup>
          <br />
          <InputGroup>
            <Input placeholder="ThumbnailUrl " />
          </InputGroup>
          <br />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Add
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
