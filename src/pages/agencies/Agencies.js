import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import Breadcrumbs from "../../components/common/Breadcrumb";
import AgencyCard from "./components/AgencyCard";
import { getAgencies } from "../../store/actions/agencyActions";

const Agencies = () => {
  const dispatch = useDispatch();
  
  const {agencies} = useSelector(store => store.agencies);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    dispatch(getAgencies())
  }, []);

  const data = agencies.slice(0, seeMore ? undefined : 8);

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title="Agencies" breadcrumbItem="All Agencies" />

        <Row>
          {agencies.length ? (
            data.map((agency) => (
              <AgencyCard agency={agency} key={agency._id} />
            ))
          ) : (
            <h4 style={{ padding: 20 }}>No Data</h4>
          )}
        </Row>

        {!seeMore && agencies.length !== 0 && agencies.length !== data.length && (
            <Row>
              <Col xs="12">
                <div
                  className="text-center text-success hand my-3"
                  onClick={() => setSeeMore(true)}
                >
                  <i className="bx bx-hourglass bx-spin mr-2" />
                  See more
                </div>
              </Col>
            </Row>
          )}
      </Container>
    </div>
  );
};

export default Agencies;
