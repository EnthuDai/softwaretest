package cn.edu.jit.service;

import cn.edu.jit.po.*;
import cn.edu.jit.util.Page;

import java.util.List;
import java.util.Map;

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

    public StudentPoJo getById(String id);

    public List getMaxScore(Map<String ,Object> map);

    public int getMaxScoreCount(Map<String ,Object> map);

    public StudentMaxScoreView getScoreByStudentId(String studentId,int questionId);

    public List getSubmissionByStudentId(String studentId, Page page);

    public int getSubmissionByStudentIdCount(String studentId);

}
