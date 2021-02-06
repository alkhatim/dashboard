import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Media,
  Button,
  Input,
  FormGroup,
} from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import Breadcrumb from "../../components/common/Breadcrumb";
import {
  loadProfile,
  editProfile,
  resetPassword,
} from "../../store/actions/authActions";
import avatar from "../../assets/images/users/avatar-2.jpg";
import messages from "services/messages";

const UserProfile = () => {
  const [readOnly, setReadOnly] = useState(true);
  const [resetPasswordModal, setResetPasswordModal] = useState(false);
  const [resetPasswordDialog, setResetPasswordDialog] = useState(false);
  const [profile, setProfile] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    photo: "",
  });
  const [newProfile, setNewProfile] = useState({
    email: "",
    phoneNumber: "",
  });
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const fetch = async () => {
      const result = await loadProfile();
      if (result) setProfile(result);
    };
    fetch();
  }, []);

  const handleProfileChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async () => {
    const result = await editProfile(newProfile);
    if (result) {
      setProfile({
        userName: result.userName,
        email: result.email,
        phoneNumber: result.phoneNumber,
        photo: result.photo,
      });
      messages.success("Done");
    }
  };

  const handleResetPassword = async () => {
    const result = await resetPassword(password);
    if (result) {
      setResetPasswordModal(false);
      setResetPasswordDialog(true);
    }
  };

  return (
    <>
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
                readOnly
                  ? "far fa-edit ml-2 hand"
                  : "fas fa-edit ml-2 hand fa-lg"
              }
              onClick={() => setReadOnly(!readOnly)}
            ></i>
          </h4>

          <Card>
            <CardBody>
              <FormGroup>
                <Input
                  name="email"
                  label="Email"
                  value={newProfile.email}
                  className="form-control"
                  placeholder="Change Email"
                  type="text"
                  onChange={handleProfileChange}
                  disabled={readOnly}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  name="phoneNumber"
                  label="Phone"
                  value={newProfile.phoneNumber}
                  className="form-control"
                  placeholder="Change Phone Number"
                  type="text"
                  onChange={handleProfileChange}
                  disabled={readOnly}
                />
              </FormGroup>
              <div className="text-center mt-4">
                <Button
                  type="submit"
                  color="success"
                  className="mr-2"
                  onClick={handleUpdateProfile}
                >
                  <i className="bx bxs-edit-alt mr-1"></i>
                  Confirm
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    setResetPasswordModal(true);
                  }}
                  id="resetPassword"
                >
                  Reset Password
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* Reset password modal */}
          <>
            {resetPasswordModal && (
              <SweetAlert
                showCancel
                title="Reset your password"
                cancelBtnBsStyle="danger"
                confirmBtnBsStyle="success"
                onConfirm={handleResetPassword}
                onCancel={() => {
                  setResetPasswordModal(false);
                }}
              >
                <FormGroup>
                  <Input
                    name="currentPassword"
                    type="password"
                    className="form-control"
                    placeholder="Current Password"
                    value={password.currentPassword}
                    onChange={handlePasswordChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    name="newPassword"
                    type="password"
                    className="form-control"
                    placeholder="New Password"
                    value={password.newPassword}
                    onChange={handlePasswordChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                    placeholder="Repeat New Password"
                    value={password.confirmPassword}
                    onChange={handlePasswordChange}
                  />
                </FormGroup>
              </SweetAlert>
            )}
            {resetPasswordDialog && (
              <SweetAlert
                success
                title="Password Changed Successfully"
                onConfirm={() => {
                  setResetPasswordDialog(false);
                }}
              ></SweetAlert>
            )}
          </>
          {/* End of reset password modal */}
        </Container>
      </div>
    </>
  );
};

export default UserProfile;
