import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./table.css";
export default function RenderTable({ data }) {
  // Example employee data
  const employees = data;
  const [currentPage, setCurrentPage] = useState(0);
  const employeesPerPage = 5; // Adjust the number of items per page as needed

  // Function to change page
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // Calculate the current items
  const offset = currentPage * employeesPerPage;
  const currentEmployees = data.slice(offset, offset + employeesPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(employees.length / employeesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <table border="2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Job</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.job}</td>
              <td>{employee.salary}</td>
              <td>{employee.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(data.length / employeesPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
