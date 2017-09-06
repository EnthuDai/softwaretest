package cn.edu.jit.controller;

import cn.edu.jit.util.Grid;
import cn.edu.jit.util.NetInterfaceData;
import cn.edu.jit.util.SigarUtils;
import org.hyperic.sigar.CpuPerc;
import org.hyperic.sigar.Mem;
import org.hyperic.sigar.Sigar;
import org.hyperic.sigar.SigarException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("system")
public class SystemMonitorController {

    Sigar sigar = SigarUtils.sigar;

    public static String netInterface = null;

    private static int zereCount;

    @RequestMapping("getSystemInfo.do")
    public @ResponseBody
    Grid systemInfo(){
        return new Grid(SigarUtils.getComputerInfo().toList());
    }

    @RequestMapping("getInternetInfo.do")
    public @ResponseBody
    Map<String ,Long> getInternetInfo() {
        long upload = 0;
        long download = 0;
        try {
            if(netInterface == null)this.initInterfaceData(sigar);
            NetInterfaceData netIfData1 = NetInterfaceData.gather(sigar, netInterface);
            upload += netIfData1.getTxbps();
            download += netIfData1.getRxbps();
            if(upload==0&&download==0){
                zereCount++;
            }
            if(zereCount==3){
                this.changeInterface(sigar);
                zereCount = 0;
            }
        }catch (Exception e){
            e.printStackTrace();
        }

        Map<String, Long> map = new HashMap<>(2);
        map.put("upload",upload/8000);
        map.put("download",download/8000);
        return map;
    }

    @RequestMapping("getCpuInfo.do")
    public @ResponseBody Map getCouInfo(){
        Map<String,Integer> map = new HashMap<>(2);
        try {
            map.put("percent",(int)(sigar.getCpuPerc().getCombined()*100));
        } catch (SigarException e) {
            e.printStackTrace();
        }
        return map;
    }

    @RequestMapping("getMemoryInfo.do")
    public @ResponseBody Map getMemoryInfo(){
        Map<String,Long> map = new HashMap<>(2);
        try {
            Mem mem = sigar.getMem();
            map.put("percent",mem.getActualUsed()*100/mem.getTotal());
        } catch (SigarException e) {
            e.printStackTrace();
        }
        return map;
    }



    private void initInterfaceData(Sigar sigar){
        try {
            String[] netIfs = sigar.getNetInterfaceList();
            for(String name:netIfs) {
                if(NetInterfaceData.findInterface(sigar,name)!=null) {
                    netInterface = name;
                    return ;
                }
            }
        } catch (SigarException e) {
            e.printStackTrace();
        }
    }

    private void changeInterface(Sigar sigar) {
        try {
            String[] netIfs = sigar.getNetInterfaceList();
            int i = 0;
            while (!netIfs[i++].equals(netInterface)) ;
            if(i>=netIfs.length)    initInterfaceData(sigar);
            for (; i < netIfs.length; i++) {
                if (NetInterfaceData.findInterface(sigar, netIfs[i]) != null) {
                    netInterface = netIfs[i];
                    return;
                }
            }
            initInterfaceData(sigar);
        } catch (SigarException e) {
            e.printStackTrace();
        }
    }
}
