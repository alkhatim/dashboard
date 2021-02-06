import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../components/common/Breadcrumb";
import AgencyCard from "./components/AgencyCard";
import { getAgencies } from "../../store/actions/agencyActions";

const Agencies = () => {
  const [agencies, setAgencies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await getAgencies();
      setAgencies(result);
    };
    fetch();
  }, []);

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Agencies" breadcrumbItem="Agencies" />

          <Row>
            {agencies.length ? (
              agencies.map((agency) => (
                <AgencyCard agency={agency} key={agency._id} />
              ))
            ) : (
              <h4 style={{ padding: 20 }}>No Data</h4>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Agencies;
