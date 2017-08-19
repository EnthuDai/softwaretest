package cn.edu.jit.service.impl;

import cn.edu.jit.mapper.StudentMapper;
import cn.edu.jit.mapper.StudentMaxScoreViewMapper;
import cn.edu.jit.mapper.SubmissionQuestionViewMapper;
import cn.edu.jit.po.*;
import cn.edu.jit.service.StudentService;
import cn.edu.jit.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by dxy on 2017/7/11.
 */
@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentMapper studentMapper;

    @Autowired
    StudentMaxScoreViewMapper studentMaxScoreViewMapper;

    @Autowired
    SubmissionQuestionViewMapper submissionQuestionMapper;

    @Override
    public Student checkStudentLogin(String id, String password) {
        Student student = new Student();
        student.setId(id);
        student.setPassword(password);
        return studentMapper.selectByNameAndPassword(student);
    }

    @Override
    public List getList(Page page, String key) {
        Map<String,Object> map = new HashMap<String,Object>();
        map.put("start",page.getStart());
        map.put("limit", page.getLimit());
        map.put("key", key);
        return studentMapper.selectByKey(map);
    }

    @Override
    public int getCount(String key) {
        Map<String ,Object> map = new HashMap<>();
        map.put("key",key);
        return studentMapper.selectCount(map);
    }

    @Override
    public boolean updateByPrimaryKeySelective(Student item) {
        return 1==studentMapper.updateByPrimaryKey(item);
    }

    @Override
    public boolean insertSelective(Student item) {
        try{
            return 1==studentMapper.insertSelective(item);
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean delete(Student item) {
        try {
            studentMapper.deleteByPrimaryKey(item.getId());
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public int getCountByClasses(int id) {
        return studentMapper.selectCountByClassId(id);
    }

    @Override
    public List getPoListByClass(Classes classes,Page page) {
        Map<String,Object> map = new HashMap<String,Object>();
        map.put("start",page.getStart());
        map.put("limit", page.getLimit());
        if(classes!=null){
            map.put("major", classes.getMajor());
            map.put("session", classes.getSession());
            map.put("id",classes.getId());
            map.put("name",classes.getName());
        }
        return  studentMapper.selectPojo(map);
    }

    @Override
    public int getPoJoCount(Classes classes) {
        if(classes!=null) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("major", classes.getMajor());
            map.put("session", classes.getSession());
            map.put("id", classes.getId());
            map.put("name", classes.getName());
            return studentMapper.selectPoJoCount(map);
        }else
            return studentMapper.selectPoJoCount(null);
    }

    @Override
    public StudentPoJo getById(String id) {
        return studentMapper.selectById(id);
    }

    @Override
    public List getMaxScore(Map<String, Object> map) {
        return studentMaxScoreViewMapper.select(map);
    }

    @Override
    public int getMaxScoreCount(Map<String, Object> map) {
        return studentMaxScoreViewMapper.selectCount(map);
    }

    @Override
    public StudentMaxScoreView getScoreByStudentId(String studentId,int questionId) {
        Map<String ,Object> map = new HashMap<>();
        map.put("studentId",studentId);
        map.put("questionId", questionId);
        return studentMaxScoreViewMapper.selectByStudentId(map);
    }

    @Override
    public List getSubmissionByStudentId(String studentId, Page page) {
        Map<String ,Object> map = new HashMap<>();
        map.put("start",page.getStart());
        map.put("limit", page.getLimit());
        map.put("studentId", studentId);
        return submissionQuestionMapper.selectSubmissionByStudentId(map);
    }


    @Override
    public int getSubmissionByStudentIdCount(String studentId) {
        return submissionQuestionMapper.selectSubmissionByStudentIdCount(studentId);
    }


}
