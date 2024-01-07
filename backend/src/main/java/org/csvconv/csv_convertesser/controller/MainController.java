package org.csvconv.csv_convertesser.controller;

import java.util.List;

import org.csvconv.csv_convertesser.entity.Employee;
import org.csvconv.csv_convertesser.services.CSVService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/csv")
@CrossOrigin(origins = "*")
public class MainController {

	@Autowired
    private CSVService csvService;

    @PostMapping("/convert")
    public List<Employee> processCSVFile(@RequestBody MultipartFile file) {
        return csvService.processCSV(file);
    }
	
}
