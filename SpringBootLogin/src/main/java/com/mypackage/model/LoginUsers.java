package com.mypackage.model;

import java.util.ArrayList;
import java.util.List;

public class LoginUsers {
	
	private List<LoginUser> employeeList;
	public List<LoginUser> getEmployeeList(){
		if(employeeList ==null) {
			employeeList = new ArrayList<LoginUser>();
		}
		return employeeList;
	}
/**
	 * @param employeeList the employeeList to set
	 */
	public void setEmployeeList(List<LoginUser> employeeList) {
		this.employeeList = employeeList;
	}

}

