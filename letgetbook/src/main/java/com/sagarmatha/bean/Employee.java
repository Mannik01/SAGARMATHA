/**
 * 
 */
package com.sagarmatha.bean;

import java.sql.Blob;

/**
 * @author jitendra
 *
 */
public class Employee {
	
	private String employeeId;
	private String empFirstName;
	private String empMiddleName;
	private String empLastName;
	private Blob photo;
	private String bussinessId;
	/**
	 * @return the employeeId
	 */
	public String getEmployeeId() {
		return employeeId;
	}
	/**
	 * @param employeeId the employeeId to set
	 */
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	/**
	 * @return the empFirstName
	 */
	public String getEmpFirstName() {
		return empFirstName;
	}
	/**
	 * @param empFirstName the empFirstName to set
	 */
	public void setEmpFirstName(String empFirstName) {
		this.empFirstName = empFirstName;
	}
	/**
	 * @return the empMiddleName
	 */
	public String getEmpMiddleName() {
		return empMiddleName;
	}
	/**
	 * @param empMiddleName the empMiddleName to set
	 */
	public void setEmpMiddleName(String empMiddleName) {
		this.empMiddleName = empMiddleName;
	}
	/**
	 * @return the empLastName
	 */
	public String getEmpLastName() {
		return empLastName;
	}
	/**
	 * @param empLastName the empLastName to set
	 */
	public void setEmpLastName(String empLastName) {
		this.empLastName = empLastName;
	}
	/**
	 * @return the bussinessId
	 */
	public String getBussinessId() {
		return bussinessId;
	}
	/**
	 * @param bussinessId the bussinessId to set
	 */
	public void setBussinessId(String bussinessId) {
		this.bussinessId = bussinessId;
	}
	/**
	 * @return the photo
	 */
	public Blob getPhoto() {
		return photo;
	}
	/**
	 * @param photo the photo to set
	 */
	public void setPhoto(Blob photo) {
		this.photo = photo;
	}
	
	

}
