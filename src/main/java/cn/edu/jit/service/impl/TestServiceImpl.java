package cn.edu.jit.service.impl;

import cn.edu.jit.mapper.TestMapper;
import cn.edu.jit.po.Test;
import cn.edu.jit.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by dxy on 2017/7/7.
 */
@Service
public class TestServiceImpl implements TestService {

    @Autowired
    TestMapper testMapper;


    @Override
    public Test selectById(int id) {
        return testMapper.selectByPrimaryKey(id);
    }
}
