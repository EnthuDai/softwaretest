package cn.edu.jit.util;

import org.hyperic.sigar.Sigar;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
@RunWith(SpringJUnit4ClassRunner.class)//表示整合JUnit4进行测试
@ContextConfiguration(locations={"classpath:applicationContext.xml"})//加载spring配置文件
public class SigarTest {

    @Test
    public void test()  {
        System.out.println("1"+System.getProperty("softwareTest.root"));
        try{
            Sigar sigar = SigarUtils.sigar;
            double cpuUsedPerc = sigar.getCpuPerc().getCombined();//cpu
            double memUsed = sigar.getMem().getActualUsed();//mem
            double memTotal = sigar.getMem().getTotal();
            double memUsedPerc = sigar.getMem().getUsedPercent();
            String memUsedStr = String.format("%.2f", memUsed / 1024 / 1024 / 1024) + "GB";// mem to string GB
            String memTotalStr = String.format("%.2f", memTotal / 1024 / 1024 / 1024) + "GB";
            String memUsedPercStr = String.format("%.2f", memUsedPerc) + " %";
            String fqdn = sigar.getFQDN();//FQDN
        }catch (Exception e){
            e.printStackTrace();
        }

    }
}
