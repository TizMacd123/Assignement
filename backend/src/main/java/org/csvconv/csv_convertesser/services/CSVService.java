package org.csvconv.csv_convertesser.services;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.csvconv.csv_convertesser.entity.Employee;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class CSVService {

	public List<Employee> processCSV(MultipartFile file) { 
		System.err.println("convert: " + file.getOriginalFilename());
	    List<Employee> resultList = new ArrayList<>();
	    String line;
	    String csvSplitBy = ",";

	    try (BufferedReader br = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
	        // Skip the header line
	        br.readLine();

	        while ((line = br.readLine()) != null) {
	            String[] csvRow = line.split(csvSplitBy);

	            // Assuming the CSV format is id, name, job, salary, age
	            Employee employee = new Employee();
	            employee.setId(Integer.parseInt(csvRow[0].trim()));
	            employee.setName(csvRow[1].trim());
	            employee.setJob(csvRow[2].trim());
	            employee.setSalary(Double.parseDouble(csvRow[3]));
	            //employee.setAge(20);

	            resultList.add(employee);
	        }
	    } catch (IOException e) {
	        e.printStackTrace();
	    }
	    System.err.println(resultList);
	    return resultList;
	}
    
}
