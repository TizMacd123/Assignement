import React, { useState } from "react";
import RenderTable from "../components/table";
import AverageSalaries from "../components/AverageSalary";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const [err, setErr] = useState(null);
  const [data, setData] = useState(null);

  const handleFileChange = (event) => {
    console.warn(event.target.files[0]);
    if (event.target.files[0].type === "text/csv") {
      setSelectedFile(event.target.files[0]);
      setIsFileUploaded(true);
    } else {
      setErr("please select csv file");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    const response = await fetch("http://localhost:8889/api/csv/convert", {
      method: "POST",
      body: formData,
    });
    console.warn(response.ok);
    if (response.ok) {
      console.log("File uploaded successfully");
      console.log("====================================");
      const data = await response.json();
      console.log("File uploaded successfully", data);
      setData(data);
      console.log("====================================");
      setIsConverted(true);
    } else {
      console.log("Upload failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="file" onChange={handleFileChange} />
      </div>
      <br />
      <div>
        <button type="reset">upload</button>
        {isFileUploaded ? <button type="submit">Proccess</button> : null}
      </div>
      <br />
      {isConverted ? <RenderTable data={data} /> : null}
      {isConverted ? <AverageSalaries data={data} /> : null}
      {/*  */}
    </form>
  );
}

export default FileUpload;
