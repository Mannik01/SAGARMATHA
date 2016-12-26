/**
 * 
 */
package com.sagarmatha.bean;

import java.sql.Date;
import java.sql.Time;

/**
 * @author jitendra
 *
 */
public class Appointment {
	
	private String appointId;
	private String customerId;
	private String serviceId;
	private Date date;
	private Time startTime;
	private String status;
	/**
	 * @return the appointId
	 */
	public String getAppointId() {
		return appointId;
	}
	/**
	 * @param appointId the appointId to set
	 */
	public void setAppointId(String appointId) {
		this.appointId = appointId;
	}
	/**
	 * @return the customerId
	 */
	public String getCustomerId() {
		return customerId;
	}
	/**
	 * @param customerId the customerId to set
	 */
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	/**
	 * @return the serviceId
	 */
	public String getServiceId() {
		return serviceId;
	}
	/**
	 * @param serviceId the serviceId to set
	 */
	public void setServiceId(String serviceId) {
		this.serviceId = serviceId;
	}
	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}
	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}
	/**
	 * @return the date
	 */
	public Date getDate() {
		return date;
	}
	/**
	 * @param date the date to set
	 */
	public void setDate(Date date) {
		this.date = date;
	}
	/**
	 * @return the startTime
	 */
	public Time getStartTime() {
		return startTime;
	}
	/**
	 * @param startTime the startTime to set
	 */
	public void setStartTime(Time startTime) {
		this.startTime = startTime;
	}

	

}
