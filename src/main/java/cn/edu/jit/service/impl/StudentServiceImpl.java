package cn.edu.jit.service.impl;

import cn.edu.jit.mapper.StudentMapper;
import cn.edu.jit.po.Student;
import cn.edu.jit.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
