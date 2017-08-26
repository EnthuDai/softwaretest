package cn.edu.jit.util;
import org.hyperic.sigar.OperatingSystem;
import org.hyperic.sigar.Sigar;

import java.io.File;
import java.nio.file.Paths;

public class SigarUtils {
    public final static Sigar sigar = initSigar();
    private static Sigar initSigar() {
        try {
//            System.out.println(Resources.getResource("sigar/.sigar_shellrc").getFile());
            //此处只为得到依赖库文件的目录，可根据实际项目自定义
            String file = Paths.get(System.getProperty("softwareTest.root"), "sigar",".sigar_shellrc").toString();
            System.out.println(file);
            File classPath = new File(file).getParentFile();

            String path = System.getProperty("java.library.path");
            String sigarLibPath = classPath.getCanonicalPath();
            //为防止java.library.path重复加，此处判断了一下
            if (!path.contains(sigarLibPath)) {
                if (isOSWin()) {
                    path += ";" + sigarLibPath;
                } else {
                    path += ":" + sigarLibPath;
                }
                System.setProperty("java.library.path", path);
            }
            return new Sigar();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static ComputerInfo getComputerInfo() {
        ComputerInfo computer = new ComputerInfo();
        OperatingSystem os = OperatingSystem.getInstance();
        computer.setOsArch(os.getArch());
        computer.setOsMachine(os.getMachine());
        computer.setOsDescription(os.getDescription());
        computer.setOsName(os.getName());
        computer.setOsVendor(os.getVendor());
        computer.setOsPatchLevel(os.getPatchLevel());
        computer.setOsVendorCodeName(os.getVendorCodeName());
        computer.setOsVendorName(os.getVendorName());
        computer.setOsVendorVersion(os.getVendorVersion());
        computer.setOsVersion(os.getVersion());
        return computer;
    }

    public static boolean isOSWin(){//OS 版本判断
        String OS = System.getProperty("os.name").toLowerCase();
        if (OS.indexOf("win") >= 0) {
            return true;
        } else return false;
    }
}