package cn.edu.jit.service;

import cn.edu.jit.po.Classes;
import cn.edu.jit.util.Page;

import java.util.List;

public interface ClassesService {

    public List getList(Page page, String key);
    public int getCount(String key) ;
    public boolean updateByPrimaryKeySelective(Classes item);
    public boolean insertSelective(Classes item);
    public boolean delete(Classes item);

}
