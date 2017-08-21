package cn.edu.jit.util;

import org.junit.Test;

import java.util.Map;

public class AnalyseChangeTest {

    @Test
    public void test(){
        AnalyseChange analyseChange = new AnalyseChange("0,99;0,100;0,101;0,0;0,1;0,2;1,99;1,100;1,101;1,0;1,1;1,2;2,1;1,1;1,2;2,1;1,99;2,99;2,100;2,101;2,0;2,1;2,2;");
        Map map = analyseChange.getAnalyseResult();
        System.out.println();
    }
}
