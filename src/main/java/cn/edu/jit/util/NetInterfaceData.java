package cn.edu.jit.util;

import org.hyperic.sigar.NetInterfaceConfig;
import org.hyperic.sigar.NetInterfaceStat;
import org.hyperic.sigar.Sigar;
import org.hyperic.sigar.SigarException;

import java.util.ArrayList;
import java.util.List;

public class NetInterfaceData {

    private NetInterfaceConfig config;
    private NetInterfaceStat stat;
    private long rxbps;
    private long txbps;

    public NetInterfaceData() {

    }

    public static String findInterface(Sigar sigar, String name){
        try {
            long start = System.currentTimeMillis();
            NetInterfaceStat statStart = sigar.getNetInterfaceStat(name);
            long rxBytesStart = statStart.getRxBytes();
            long txBytesStart = statStart.getTxBytes();
            if(rxBytesStart!=0&&txBytesStart!=0)    return name;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public void populate(Sigar sigar, String name)
            throws SigarException {

        config = sigar.getNetInterfaceConfig(name);

        try {
            long start = System.currentTimeMillis();
            NetInterfaceStat statStart = sigar.getNetInterfaceStat(name);
            long rxBytesStart = statStart.getRxBytes();
            long txBytesStart = statStart.getTxBytes();
            Thread.sleep(1000);
            long end = System.currentTimeMillis();
            NetInterfaceStat statEnd = sigar.getNetInterfaceStat(name);
            long rxBytesEnd = statEnd.getRxBytes();
            long txBytesEnd = statEnd.getTxBytes();

            rxbps = (rxBytesEnd - rxBytesStart) * 8 / (end - start) * 1000;
            txbps = (txBytesEnd - txBytesStart) * 8 / (end - start) * 1000;
            stat = sigar.getNetInterfaceStat(name);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static NetInterfaceData gather(Sigar sigar, String name)
            throws SigarException {

        NetInterfaceData data = new NetInterfaceData();
        data.populate(sigar, name);
        return data;
    }

    public NetInterfaceConfig getConfig() {
        return config;
    }

    public NetInterfaceStat getStat() {
        return stat;
    }


    public long getRxbps() {
        return rxbps;
    }

    public long getTxbps() {
        return txbps;
    }

    public static void main(String[] args) throws Exception {
        Sigar sigar = SigarUtils.sigar;
        String[] netIfs = sigar.getNetInterfaceList();
        long upload = 0;
        long download = 0;
        for (String name : netIfs) {
            NetInterfaceData netIfData1 = NetInterfaceData.gather(sigar, name);
            upload+=netIfData1.txbps;
            download += netIfData1.rxbps;
        }
        System.out.println(upload+','+download);
    }
}
