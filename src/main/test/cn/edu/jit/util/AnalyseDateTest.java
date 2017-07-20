package cn.edu.jit.util;

import org.junit.Test;

import java.util.Map;

/**
 *
 * Created by dxy on 2017/7/20.
 */
public class AnalyseDateTest {

    String str = "2011-111-1;2016--2-31;2016-1-31;2016-12-31;2016-2-30;2016-1-30;2016-4-30;2016-12-30;2016-2-29;2016-1-29;2016-4-29;2017-1-1;2017-2-28;2017-2-29;2017-2-27;2017-1-29;2017-12-30;2017-12-31;2016-1-27;\n2017-4-31;2016-2-27;2016-2-28;";
    @Test
    public void testAnalyse(){
        AnalyseDate ad = new AnalyseDate(str);
        Map map = ad.getAnalyseResult();
        System.out.println();
    }
}
