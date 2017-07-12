package cn.edu.jit.service;

import cn.edu.jit.po.Student;

/**
 * Created by dxy on 2017/7/11.
 */
public interface StudentService {

    public Student checkStudentLogin(String id , String password);
}
