import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
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
  Media,
  Input,
} from "reactstrap";
import messages from "services/messages";
import Breadcrumbs from "../../components/common/Breadcrumb";
import { getAgency, editAgency } from "../../store/actions/agencyActions";

const Agency = () => {
  const params = useParams();
  const location = useLocation();

  const [agency, setAgency] = useState({
    name: "",
    owner: "",
    actingManager: "",
    location: "",
    email: "",
    phoneNumber: "",
    phoneNumber2: "",
    fixedPhoneNumber: "",
    website: "",
    authNumber: "",
    numberOfStaff: "",
    numberOfBranches: "",
  });

  const handleChange = (e) => {
    setAgency({ ...agency, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const result = await editAgency(params.id, agency);
    if (result) {
      setAgency(result);
      messages.success("Changed Successfuly");
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const result = await getAgency(params.id);
      setAgency(result);
    };
    if (location.state?.agency) setAgency(location.state.agency);
    else fetch();
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Agencies" breadcrumbItem="Agency" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-5">Agency Details</CardTitle>
                  <Row>
                    <Col lg={6}>
                      <Form>
                        <FormGroup className="row mb-4">
                          <Label for="name" className="col-sm-3 col-form-Label">
                            Name
                          </Label>
                          <Col sm={9}>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              className="form-control"
                              value={agency.name}
                              onChange={handleChange}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="row mb-4">
                          <Label
                            for="owner"
                            className="col-sm-3 col-form-Label"
                          >
                            Owner
                          </Label>
                          <Col sm={9}>
                            <Input
                              id="owner"
                              name="owner"
                              type="text"
                              className="form-control"
                              value={agency.owner}
                              onChange={handleChange}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="row mb-4">
                          <Label
                            for="actingManager"
                            className="col-sm-3 col-form-Label"
                          >
                            Acting Manager
                          </Label>
                          <Col sm={9}>
                            <Input
                              id="actingManager"
                              name="actingManager"
                              type="text"
                              className="form-control"
                              value={agency.actingManager}
                              onChange={handleChange}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="row mb-4">
                          <Label
                            for="email"
                            className="col-sm-3 col-form-Label"
                          >
                            Email
                          </Label>
                          <Col sm={9}>
                            <Input
                              id="email"
                              name="email"
                              type="text"
                              className="form-control"
                              value={agency.email}
                              onChange={handleChange}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="row mb-4">
                          <Label
                            for="fixedPhoneNumber"
                            className="col-sm-3 col-form-Label"
                          >
                            Fixed Phone Number
                          </Label>
                          <Col sm={9}>
                            <Input
                              id="fixedPhoneNumber"
                              name="fixedPhoneNumber"
                              type="text"
                              className="form-control"
                              value={agency.fixedPhoneNumber}
                              onChange={handleChange}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="row mb-4">
                          <Label
                            for="phoneNumber"
                            className="col-sm-3 col-form-Label"
                          >
                            Mobile Number
                          </Label>
                          <Col sm={9}>
                            <Input
                              id="phoneNumber"
                              name="phoneNumber"
                              type="text"
                              className="form-control"
                              value={agency.phoneNumber}
                              onChange={handleChange}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="row mb-4">
                          <Label
                            for="phoneNumber2"
                            className="col-sm-3 col-form-Label"
                          >
                            Second Mobile Number
                          </Label>
                          <Col sm={9}>
                            <Input
                              id="phoneNumber2"
                              name="phoneNumber2"
                              type="text"
                              className="form-control"
                              value={agency.phoneNumber2}
                              onChange={handleChange}
                            />
                          </Col>
                        </FormGroup>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <FormGroup className="row mb-4">
                          <Label
                            for="website"
                            className="col-sm-3 col-form-Label"
                          >
                            Website
                          </Label>
                          <Col sm={9}>
                            <Input
                              id="website"
                              name="website"
                              type="text"
                              className="form-control"
                              value={agency.website}
                              onChange={handleChange}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="row mb-4">
                          <Label
                            for="location"
                            className="col-sm-3 col-form-Label"
                          >
                            Address
                          </Label>
                          <Col sm={9}>
                            <Input
                              id="location"
                              name="location"
                              type="text"
                              className="form-control"
                              value={agency.location}
                              onChange={handleChange}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="row mb-4">
                          <Label
                            for="authNumber"
                            className="col-sm-3 col-form-Label"
                          >
                            Auth Number
                          </Label>
                          <Col sm={9}>
                            <Input
                              id="authNumber"
                              name="authNumber"
                              type="text"
                              className="form-control"
                              value={agency.authNumber}
                              onChange={handleChange}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="row mb-4">
                          <Label
                            for="numberOfBranches"
                            className="col-sm-3 col-form-Label"
                          >
                            Number of Branches
                          </Label>
                          <Col sm={9}>
                            <Input
                              id="numberOfBranches"
                              name="numberOfBranches"
                              type="number"
                              className="form-control"
                              value={agency.numberOfBranches}
                              onChange={handleChange}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="row mb-4">
                          <Label
                            for="numberOfStaff"
                            className="col-sm-3 col-form-Label"
                          >
                            Number of Staff
                          </Label>
                          <Col sm={9}>
                            <Input
                              id="numberOfStaff"
                              name="numberOfStaff"
                              type="number"
                              className="form-control"
                              value={agency.numberOfStaff}
                              onChange={handleChange}
                            />
                          </Col>
                        </FormGroup>
                      </Form>
                    </Col>
                  </Row>
                  <div className="center">
                    <Button
                      color="success"
                      className="w-md"
                      onClick={handleSubmit}
                    >
                      Confirm
                    </Button>
                  </div>
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

export default Agency;
