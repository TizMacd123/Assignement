export default function AverageSalaries({ data }) {
  const salarySumByJob = {};
  const countByJob = {};
  let employees = data;
  employees.forEach((employee) => {
    if (salarySumByJob[employee.job]) {
      salarySumByJob[employee.job] += employee.salary;
      countByJob[employee.job] += 1;
    } else {
      salarySumByJob[employee.job] = employee.salary;
      countByJob[employee.job] = 1;
    }
  });

  let averageSalaries = Object.keys(salarySumByJob).map((job) => {
    return {
      job: job,
      averageSalary: salarySumByJob[job] / countByJob[job],
    };
  });
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Job</th>
            <th>Average Salary</th>
          </tr>
        </thead>
        <tbody>
          {averageSalaries.map((item, index) => (
            <tr key={index}>
              <td>{item.job}</td>
              <td>${item.averageSalary.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
