package cn.edu.jit.controller;

import cn.edu.jit.po.Classes;
import cn.edu.jit.service.ClassesService;
import cn.edu.jit.util.ExtSimpleResponse;
import cn.edu.jit.util.Grid;
import cn.edu.jit.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("admin/classes")
public class ClassesController {

    @Autowired
    ClassesService classesService;

    @RequestMapping("get.do")
    public @ResponseBody Grid get(Page page, String key){
        Grid grid = new Grid();
        grid.setData(classesService.getList(page,key));
        grid.setTotal(classesService.getCount(key));
        return grid;
    }

    @RequestMapping("delete.do")
    public @ResponseBody ExtSimpleResponse delete(@RequestBody Classes classes){
        return new ExtSimpleResponse(classesService.delete(classes));
    }

    @RequestMapping("update.do")
    public @ResponseBody ExtSimpleResponse update(@RequestBody Classes classes){
        return new ExtSimpleResponse(classesService.updateByPrimaryKeySelective(classes));
    }

    @RequestMapping("create.do")
    public  @ResponseBody ExtSimpleResponse create(@RequestBody Classes classes){
        return new ExtSimpleResponse(classesService.insertSelective(classes));
    }

}
