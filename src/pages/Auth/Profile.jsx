import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, Media, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { loadProfile } from "../../store/actions/authActions";
import avatar from "../../assets/images/users/avatar-2.jpg";

const UserProfile = () => {
  const [readOnly, setReadOnly] = useState(true);
  const [profile, setProfile] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    photo: "",
  });
  const [newProfile, setNewProfile] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
  });
  const [password, setNewPassword] = useState({
    currentPassword: "",
    newPassword: "",
  });

  useEffect(() => {
    const fetch = async () => {
      const result = await loadProfile();
      if (result) setProfile(result);
    };
    fetch();
  }, []);

  const handleChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Profile" breadcrumbItem="Profile" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <Media>
                    <div className="mr-3">
                      <img
                        src={profile.photo || avatar}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <Media body className="align-self-center">
                      <div className="text-muted">
                        <h5>{profile.userName}</h5>
                        <p className="mb-1">{profile.email}</p>
                        <p className="mb-0">{profile.phoneNumber}</p>
                      </div>
                    </Media>
                  </Media>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <h4 className="card-title mb-4">
            Edit Profile
            <i
              className={
                readOnly ? "far fa-edit ml-2 hand" : "fas fa-edit ml-2 hand"
              }
              onClick={() => setReadOnly(!readOnly)}
            ></i>
          </h4>

          <Card>
            <CardBody>
              <AvForm className="form-horizontal" onValidSubmit={(e, v) => {}}>
                <div className="form-group">
                  <AvField
                    name="email"
                    label="Email"
                    value={newProfile.email}
                    className="form-control"
                    placeholder="Enter Email"
                    type="text"
                    onChange={handleChange}
                    disabled={readOnly}
                  />
                </div>
                <div className="form-group">
                  <AvField
                    name="phoneNumber"
                    label="Phone"
                    value={newProfile.phoneNumber}
                    className="form-control"
                    placeholder="Enter Phone Number"
                    type="text"
                    onChange={handleChange}
                    disabled={readOnly}
                  />
                </div>
                <div className="text-center mt-4">
                  <Button type="submit" color="success">
                    <i className="bx bxs-edit-alt mr-1"></i>
                    Confirm
                  </Button>
                </div>
              </AvForm>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;
