package cn.edu.jit.service;

import cn.edu.jit.po.Classes;
import cn.edu.jit.po.Student;
import cn.edu.jit.util.Page;

import java.util.List;

/**
 * Created by dxy on 2017/7/11.
 */
public interface StudentService {

    public Student checkStudentLogin(String id , String password);

    public List getList(Page page, String key);
    public int getCount(String key) ;
    public boolean updateByPrimaryKeySelective(Student item);
    public boolean insertSelective(Student item);
    public boolean delete(Student item);

    public int getCountByClasses(int id);

    public List getPoListByClass(Classes classes,Page page);
    public int getPoJoCount(Classes classes) ;
}
