package cn.edu.jit.util;

import org.junit.Test;

import java.util.Map;

public class AnalyseChangeTest {

    @Test
    public void test(){
        AnalyseChange analyseChange = new AnalyseChange("1,100；1，；");
        Map map = analyseChange.getAnalyseResult();
        System.out.println();
    }
}
