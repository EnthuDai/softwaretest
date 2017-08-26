package cn.edu.jit.util;


import java.util.ArrayList;
import java.util.List;

public class ComputerInfo {

    /**
     * 系统描述
     */
    private String osDescription;

    private String osMachine;
    private String osPatchLevel;

    private String osVendorCodeName;

    /**
     * 系统的名称
     */
    private String osName;

    /**
     * 系统版本
     */
    private String osVersion;

    private String osArch;

    /**
     * 系统供应商
     */
    private String osVendor;

    /**
     * 供应商名称
     */
    private String osVendorName;

    /**
     * 供应商版本
     */
    private String osVendorVersion;

    private static final long serialVersionUID = 1L;


    public String getOsDescription() {
        return osDescription;
    }

    public void setOsDescription(String osDescription) {
        this.osDescription = osDescription == null ? null : osDescription.trim();
    }

    public String getOsName() {
        return osName;
    }

    public void setOsName(String osName) {
        this.osName = osName == null ? null : osName.trim();
    }

    public String getOsVersion() {
        return osVersion;
    }

    public String getOsMachine() {
        return osMachine;
    }

    public void setOsMachine(String osMachine) {
        this.osMachine = osMachine;
    }

    public String getOsPatchLevel() {
        return osPatchLevel;
    }

    public void setOsPatchLevel(String osPatchLevel) {
        this.osPatchLevel = osPatchLevel;
    }

    public String getOsVendorCodeName() {
        return osVendorCodeName;
    }

    public void setOsVendorCodeName(String osVendorCodeName) {
        this.osVendorCodeName = osVendorCodeName;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public void setOsVersion(String osVersion) {
        this.osVersion = osVersion == null ? null : osVersion.trim();
    }

    public String getOsArch() {
        return osArch;
    }

    public void setOsArch(String osArch) {
        this.osArch = osArch == null ? null : osArch.trim();
    }

    public String getOsVendor() {
        return osVendor;
    }

    public void setOsVendor(String osVendor) {
        this.osVendor = osVendor == null ? null : osVendor.trim();
    }

    public String getOsVendorName() {
        return osVendorName;
    }

    public void setOsVendorName(String osVendorName) {
        this.osVendorName = osVendorName == null ? null : osVendorName.trim();
    }

    public String getOsVendorVersion() {
        return osVendorVersion;
    }

    public void setOsVendorVersion(String osVendorVersion) {
        this.osVendorVersion = osVendorVersion == null ? null : osVendorVersion.trim();
    }


    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", osDescription=").append(osDescription);
        sb.append(", osName=").append(osName);
        sb.append(", osVersion=").append(osVersion);
        sb.append(", osArch=").append(osArch);
        sb.append(", osVendor=").append(osVendor);
        sb.append(", osVendorName=").append(osVendorName);
        sb.append(", osVendorVersion=").append(osVendorVersion);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }

    public List toList(){
        List<KeyValue> list = new ArrayList<>();
        if(isValid(this.getOsDescription()))list.add(new KeyValue("操作系统",this.getOsDescription()));
        if(isValid(this.getOsMachine()))list.add(new KeyValue("osMachine",this.getOsMachine()));
        if(isValid(this.getOsPatchLevel()))list.add(new KeyValue("osPatchLevel",this.getOsPatchLevel()));
        if(isValid(this.getOsVendorCodeName()))list.add(new KeyValue("osVendorCodeName",this.getOsVendorCodeName()));
        if(isValid(this.getOsName()))list.add(new KeyValue("名称",this.getOsName()));
        if(isValid(this.getOsVersion())) list.add(new KeyValue("版本",this.getOsVersion()));
        if(isValid(this.getOsArch()))list.add(new KeyValue("位数",this.getOsArch()));
        if(isValid(this.getOsVendor()))list.add(new KeyValue("厂商",this.getOsVendor()));
        if(isValid(this.getOsVendorName()))list.add(new KeyValue("osVendorName",this.getOsVendorName()));
//        if(isValid(this.getOsVendorVersion())) list.add(new KeyValue("osVendorVersion",this.getOsVendorVersion()));
        return list;
    }

    private boolean isValid(String str){
        return str != null && !str.equals("");
    }
}