package cn.edu.jit.service.impl;

import cn.edu.jit.mapper.AdministratorMapper;
import cn.edu.jit.po.Administrator;
import cn.edu.jit.service.AdministratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdministratorServiceImpl implements AdministratorService{

    @Autowired
    AdministratorMapper administratorMapper;

    @Override
    public boolean check(Administrator administrator) {
        Administrator ad = administratorMapper.selectByPrimaryKey(administrator.getName());
        return ad != null && ad.getPassword().equals(administrator.getPassword());
    }
}
