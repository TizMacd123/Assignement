package org.csvconv.csv_convertesser.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor @NoArgsConstructor @Data
public class Employee {
	private long id;
	private String name, job;
	private int age;
	private double salary;
}
