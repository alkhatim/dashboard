import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Button,
  Form,
  Input,
} from "reactstrap";
import Breadcrumbs from "../../components/common/Breadcrumb";
import { getUser } from "../../store/actions/agencyActions";

const User = () => {
  const location = useLocation();
  const params = useParams();

  const [user, setUser] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    photo: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetch = async () => {
      const result = await getUser(params.id);
      setUser(result);
    };
    if (location.state?.user) setUser(location.state.user);
    else fetch();
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Agencies" breadcrumbItem="User" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-5">User Details</CardTitle>

                  <Form>
                    <FormGroup className="row mb-4">
                      <Label for="userName" className="col-sm-3 col-form-Label">
                        Username
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="userName"
                          name="userName"
                          type="text"
                          className="form-control"
                          value={user.userName}
                          onChange={handleChange}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="row mb-4">
                      <Label for="email" className="col-sm-3 col-form-Label">
                        Email
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="email"
                          name="email"
                          type="text"
                          className="form-control"
                          value={user.email}
                          onChange={handleChange}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="row mb-4">
                      <Label
                        for="phoneNumber"
                        className="col-sm-3 col-form-Label"
                      >
                        Phone
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="phoneNumber"
                          name="phoneNumber"
                          type="text"
                          className="form-control"
                          value={user.phoneNumber}
                          onChange={handleChange}
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup className="row justify-content-end">
                      <Col sm={9}>
                        <div>
                          <Button
                            type="submit"
                            color="success"
                            className="w-md"
                          >
                            Confirm
                          </Button>
                        </div>
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* container-fluid */}
      </div>
    </React.Fragment>
  );
};

export default User;
