import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import avatar1 from "../../assets/images/users/avatar-2.jpg";
import splash from "../../assets/images/profile-img.png";

const Welcome = () => {
  const user = useSelector((store) => store.auth.user);

  return (
    <React.Fragment>
      <Card className="overflow-hidden">
        <div className="bg-soft-primary">
          <Row>
            <Col xs="7">
              <div className="text-primary p-3">
                <h5 className="text-primary">{`Welcome Buddy :)`}</h5>
                <p>Twzeef Dashboard</p>
              </div>
            </Col>
            <Col xs="5" className="align-self-end">
              <img src={splash} alt="" className="img-fluid" />
            </Col>
          </Row>
        </div>
        <CardBody className="pt-0">
          <Row>
            <Col sm="6">
              <div className="avatar-md profile-user-wid mb-4">
                <img
                  src={user.photo || avatar1}
                  alt=""
                  className="img-thumbnail rounded-circle"
                />
              </div>
              <h5 className="font-size-15 text-truncate">{user.userName}</h5>
              <p className="text-muted mb-0 text-truncate">{user.role}</p>
            </Col>

            <Col sm="6">
              <div className="pt-4">
                <Col xs="6">
                  <h5 className="font-size-15">{user.phoneNumber}</h5>
                  <p className="text-muted mb-0">{user.email}</p>
                </Col>
                <div className="mt-4">
                  <Link
                    to="/profile"
                    className="btn btn-primary waves-effect waves-light btn-sm"
                  >
                    View Profile <i className="mdi mdi-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};
export default Welcome;
