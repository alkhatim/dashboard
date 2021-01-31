import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import UserCard from "./UserCard";
import { getUsers } from "../../store/actions/usersActions";

const Users = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await getUsers();
      setUsers(result);
    };
    fetch();
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Users" breadcrumbItem="Users Grid" />

          <Row>
            {users.map((user) => (
              <UserCard user={user} key={user._id} />
            ))}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Users;
