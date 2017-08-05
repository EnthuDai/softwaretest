package cn.edu.jit.service.impl;

import cn.edu.jit.mapper.StudentMapper;
import cn.edu.jit.po.Classes;
import cn.edu.jit.po.Student;
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
        return 1==studentMapper.insertSelective(item);
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


}
