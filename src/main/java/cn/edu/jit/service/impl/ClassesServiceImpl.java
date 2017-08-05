package cn.edu.jit.service.impl;

import cn.edu.jit.mapper.ClassesMapper;
import cn.edu.jit.mapper.StudentMapper;
import cn.edu.jit.po.Classes;
import cn.edu.jit.po.ClassesPoJo;
import cn.edu.jit.service.ClassesService;
import cn.edu.jit.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ClassesServiceImpl implements ClassesService {

    @Autowired
    ClassesMapper classesMapper;

    @Autowired
    StudentMapper studentMapper;

    @Override
    public List getList(Page page, String key) {
        Map<String,Object> map = new HashMap<String,Object>();
        map.put("start",page.getStart());
        map.put("limit", page.getLimit());
        map.put("key", key);
        List<Classes> data = classesMapper.selectByKey(map);
        List<ClassesPoJo> result = new ArrayList<>();
        for(Classes classes : data){
            result.add(new ClassesPoJo(classes,studentMapper.selectCountByClassId(classes.getId())));
        }
        return result;
    }

    @Override
    public int getCount(String key) {
        Map<String ,Object> map = new HashMap<String ,Object>();
        map.put("key",key);
        return classesMapper.selectCount(map);
    }

    @Override
    public boolean updateByPrimaryKeySelective(Classes item) {
        return 1==classesMapper.updateByPrimaryKeySelective(item);
    }

    @Override
    public boolean insertSelective(Classes item) {
        return 1==classesMapper.insertSelective(item);
    }

    @Override
    public boolean delete(Classes item) {
        try {
            classesMapper.deleteByPrimaryKey(item.getId());
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
}
