import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import Breadcrumbs from "../../components/common/Breadcrumb";
import UsersTable from "./components/UsersTable";
import { getAgencyUsers, deleteUser } from "../../store/actions/agencyActions";

const AgencyUsers = () => {
  const params = useParams();
  const [users, setUsers] = useState([]);
  const [deletedUser, setDeletedUser] = useState("");
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteSuccessDialog, setDeleteSuccessDialog] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const result = await getAgencyUsers(params.id);
      setUsers(result);
    };
    fetch();
  }, [params]);

  const handleDeleteAttemp = async (id) => {
    setDeletedUser(id);
    setDeleteDialog(true);
  };;

  const handleDelete = async () => {
    const result = await deleteUser(deletedUser);
    if (result) {
      setDeleteSuccessDialog(true);
      setUsers(users.filter((usr) => usr._id !== deletedUser));
      setDeletedUser("");;
    }
    setDeleteDialog(false);
  };;

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Agencies" breadcrumbItem="Users" />

          <UsersTable users={users} onDelete={handleDeleteAttemp} />

          {/* Delete dialog */}
          {deleteDialog && (
            <SweetAlert
              title="Are you sure?"
              warning
              showCancel
              confirmBtnBsStyle="success"
              cancelBtnBsStyle="danger"
              onConfirm={handleDelete}
              onCancel={() => {
                setDeleteDialog(false);
              }}
            >
              You won't be able to revert this!
            </SweetAlert>
          )}

          {deleteSuccessDialog && (
            <SweetAlert
              success
              title="Deleted Successfully"
              onConfirm={() => {
                setDeleteSuccessDialog(false);
              }}
            ></SweetAlert>
          )}
          {/* End of delete dialog */}
        </Container>
      </div>
    </>
  );
};

export default AgencyUsers;
