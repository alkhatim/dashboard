import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardFooter, Col } from "reactstrap";

const AgencyCard = ({ agency }) => {
  const badges = [
    agency.fixedPhoneNumber,
    agency.phoneNumber,
    agency.phoneNumber2,
  ];

  return (
    <>
      <Col xl="3" sm="6">
        <Card className="text-center">
          <CardBody>
            {!agency.logo ? (
              <div className="avatar-sm mx-auto mb-4">
                <span
                  className={
                    "avatar-title rounded-circle bg-soft-blue text-blue font-size-16"
                  }
                >
                  {agency.name.charAt(0)}
                </span>
              </div>
            ) : (
              <div className="mb-4">
                <img
                  className="rounded-circle avatar-sm"
                  src={agency.logo}
                  alt=""
                />
              </div>
            )}

            <h5 className="font-size-15">
              <Link
                to={{
                  pathname: `/agencies/${agency._id}/details`,
                  state: { agency },
                }}
                className="text-dark"
              >
                {agency.name}
              </Link>
            </h5>
            <p className="text-muted">{agency.location}</p>
            <p className="text-muted">{agency.actingManager}</p>

            <div>
              {badges.map((badge, key) => (
                <Link
                  to="#"
                  className="badge badge-primary font-size-11 m-1"
                  key={"_badge_" + key}
                >
                  {badge}
                </Link>
              ))}
            </div>
          </CardBody>
          <CardFooter className="bg-transparent border-top">
            <div className="contact-links d-flex font-size-20">
              <div className="flex-fill">
                <Link to={`/agencies/${agency._id}/users`}>
                  <i className="bx bx-group" />
                </Link>
              </div>
              <div className="flex-fill">
                <Link
                  to={{
                    pathname: `/agencies/${agency._id}/edit`,
                    state: { agency },
                  }}
                >
                  <i className="bx bx-edit-alt" />
                </Link>
              </div>
              <div className="flex-fill">
                <Link
                  to={{
                    pathname: `/agencies/${agency._id}/stats`,
                    state: { agency },
                  }}
                >
                  <i className="bx bx-info-circle" />
                </Link>
              </div>
            </div>
          </CardFooter>
        </Card>
      </Col>
    </>
  );
};

export default AgencyCard;
