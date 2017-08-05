package cn.edu.jit.util;
/**
 * 
 * @author Dxy
 * QQ 1421895482
 * 2016年2月21日下午5:20:45
 */
public class Page {

	private int limit;
	@SuppressWarnings("unused")
	private int start;
	private int page;
	
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	public int getStart() {
		return (page-1)*limit;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
}
