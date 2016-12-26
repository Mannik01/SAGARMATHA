/**
 * 
 */
package com.sagarmatha.controller;

import java.util.List;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.sagarmatha.bean.Business;
import com.sagarmatha.bean.SearchBusiness;

/**
 * @author jitendra
 *
 */
@Path("/search")
public class SearchController {
	
	@POST
	@Path("/book")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Business> getBusinessRecord(SearchBusiness searchBusiness){
		
		if(searchBusiness.getLocation() !=null){
			
			String[] locationTrim = searchBusiness.getLocation().split(",");
			
			
			
		}else{
			System.out.println("Location missing");
		}
		
		
		if((searchBusiness.getLocation() != null) 
				&& ((!searchBusiness.getService().isEmpty()) || (searchBusiness.getService() !=null))
				&& ((!searchBusiness.getDate().isEmpty()) || (searchBusiness.getDate() != null)) 
				&& ((!searchBusiness.getTime1()
						.isEmpty()) || (searchBusiness.getTime1() !=null))){
		
		}
//		else if (searchBook.getLocation() != null) {
//			String[] trim = searchBook.getLocation().split(",");
//			String city = trim[0].substring(0, trim[0].length()-1);
//			if ((!city.isEmpty()) ||(city != null) ) {
//				bookList = retriveServices.bookSearchByCity(city);
//				return bookList;
//			} else if ((!searchBook.getName().isEmpty()) || (searchBook.getName() !=null)) {
//				bookList = retriveServices.bookSearchByName(searchBook, city);
//				return bookList;
//			} else if ((!searchBook.getIsbn().isEmpty()) || (searchBook.getIsbn() != null)) {
//				bookList = retriveServices.bookSearchByISBN(searchBook, city);
//				return bookList;
//			} else if ((!searchBook.getGrade().isEmpty()) || (searchBook.getGrade() !=null)) {
//				bookList = retriveServices.bookSearchByGarde(searchBook, city);
//				return bookList;
//			}
//		} else {
//			if ((!searchBook.getName().isEmpty()) || (searchBook.getName() !=null)) {
//				bookList = retriveServices.getBookByName(searchBook);
//				return bookList;
//			} else if ((!searchBook.getIsbn().isEmpty()) || (searchBook.getIsbn() != null)) {
//				bookList = retriveServices.getBookByISBN(searchBook);
//				return bookList;
//			} else if ((!searchBook.getGrade().isEmpty()) || (searchBook.getGrade() !=null)) {
//				bookList = retriveServices.getBookByGrade(searchBook);
//				return bookList;
//			} else {
//				System.out.println("There is no books in list.");
//			}
//		}
//		
		return null;

		
	}
	
	

}
