package cn.edu.jit.util;

import java.util.List;

/**
 * 
 * @author Dxy
 * QQ 1421895482
 * 2016年2月21日下午5:20:45
 */
public class Grid {

	private int total;
	@SuppressWarnings("rawtypes")
	private List data;
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	@SuppressWarnings("rawtypes")
	public List getData() {
		return data;
	}
	@SuppressWarnings("rawtypes")
	public void setData(List data) {
		this.data = data;
	}
}
