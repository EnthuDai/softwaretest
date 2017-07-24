package cn.edu.jit.util;

import cn.edu.jit.po.RqtsSubmission;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AnalyseDate {

    /**
     * "无效等价类"
     */
    public static final String WX = "WX";

    /**
     * "有效等价类"
     */
    public static final String YX = "YX" ;

    /**
     * "重复的有效等价类"
     */
    public static final String CF = "CF";

    /**
     * "格式错误"
     */
    public static final String CW = "CW";

    /**
     * "覆盖到的种类"
     */
    public static final String FG = "FG";

    /**
     * "学生提交的有效测试用例"
     */
    public static final String RQTS_DATE = "RQTS_DATE";
    public static final int ALL = 17; //等价类的总数



    String data; //以分号分隔，yyyy-MM-dd的数据字符串，如2012-1-1;2013-1-1
    List<String> errorList = new ArrayList<>();  //格式错误的日期数据
    List<RqtsSubmission> dateList = new ArrayList<>();  //此中数据为格式正确的数据
    List<RqtsSubmission> resultList = new ArrayList<>(); //日期向后推算两天的数据
    List<RqtsSubmission> badList = new ArrayList<>();  //无效等价类
    int flag[] = new int[17];

    public Map getAnalyseResult(){
        analyse();
        Map map = new HashMap<String,Integer>();
        map.put(WX, badList.size());
        map.put(YX,dateList.size());
        int count = 0;
        for(int i = 0;i<flag.length;i++) count += flag[i];
        map.put(CF,dateList.size()-count>0 ? dateList.size()-count : 0);
        map.put(CW,errorList.size());
        map.put(FG,count);
        map.put(RQTS_DATE, dateList);
        return map;
    }

    public AnalyseDate(String data){
        this.data = data.replace("\n","").replace("\t","");
        this.stringToDate();
    }

    private void stringToDate() {
        String str[] = this.data.split("[;；]");
        for (String aStr : str) {
            String[] time = aStr.split("-");
            if (time.length == 3) {
                RqtsSubmission temp = new RqtsSubmission();
                try {
                    temp.setYear(Integer.parseInt(time[0]));
                    temp.setMonth(Short.parseShort(time[1]));
                    temp.setDay(Short.parseShort(time[2]));
                    this.dateList.add(temp);
                } catch (Exception e) {
                    errorList.add(aStr);
                }
            } else {
                errorList.add(aStr);
            }
        }
    }

    private void analyse() {
        int i = 0;
        while (i < dateList.size()) {
            int year = dateList.get(i).getYear();
            short month = dateList.get(i).getMonth();
            short day = dateList.get(i).getDay();

            RqtsSubmission result = new RqtsSubmission();
            if ((year < 0) || (month < 1) || (month > 12) || (day < 1) || (day > 31)) {
                badList.add(dateList.get(i));
                resultList.add(null);
            } else if ((day >= 1) && (day <= 26)) {
                flag[0] = 1;
                day += 2;
                result.setDay(day);
                result.setMonth(month);
                result.setYear(year);
                resultList.add(result);

            } else if (((month == 1) || (month == 3) || (month == 4) || (month == 5) ||
                    (month == 6) || (month == 7) || (month == 8) ||
                    (month == 9) || (month == 10) || (month == 11) || (month == 12)) && (
                    (day == 27) || (day == 28))) {
                flag[1] = 1;
                day += 2;
                result.setDay(day);
                result.setMonth(month);
                result.setYear(year);
                resultList.add(result);

            } else if (((month == 1) || (month == 3) || (month == 5) || (month == 7) ||
                    (month == 8) || (month == 10) || (month == 12)) &&
                    (day == 29)) {
                flag[2] = 1;
                day += 2;
                result.setDay(day);
                result.setMonth(month);
                result.setYear(year);
                resultList.add(result);


            } else if (((month == 1) || (month == 3) || (month == 5) || (month == 7) ||
                    (month == 8) || (month == 10)) &&
                    (day == 30)) {
                flag[3] = 1;
                day = 1;
                month++;
                result.setDay(day);
                result.setMonth(month);
                result.setYear(year);
                resultList.add(result);

            } else if (((month == 1) || (month == 3) || (month == 5) || (month == 7) ||
                    (month == 8) || (month == 10)) &&
                    (day == 31)) {
                flag[4] = 1;
                day = 2;
                month++;
                result.setDay(day);
                result.setMonth(month);
                result.setYear(year);
                resultList.add(result);

            } else if (((month == 4) || (month == 6) || (month == 9) || (month == 11)) &&
                    (day == 29)) {
                flag[5] = 1;
                day = 1;
                month++;
                result.setDay(day);
                result.setMonth(month);
                result.setYear(year);
                resultList.add(result);

            } else if (((month == 4) || (month == 6) || (month == 9) || (month == 11)) &&
                    (day == 30)) {
                flag[6] = 1;
                day = 2;
                month++;
                result.setDay(day);
                result.setMonth(month);
                result.setYear(year);
                resultList.add(result);

            } else if (((month == 4) || (month == 6) || (month == 9) || (month == 11)) &&
                    (day == 31)) {
                flag[7] = 1;
                resultList.add(null);

            } else if ((month == 12) && (day == 30)) {
                flag[8] = 1;
                day = 1;
                month = 1;
                year++;
                result.setDay(day);
                result.setMonth(month);
                result.setYear(year);
                resultList.add(result);

            } else if ((month == 12) && (day == 31)) {
                flag[9] = 1;
                day = 2;
                month = 1;
                year++;
                result.setDay(day);
                result.setMonth(month);
                result.setYear(year);
                resultList.add(result);

            } else if (!isLeapYear(year) &&
                    (month == 2) && (day == 27)) {
                flag[10] = 1;
                day = 1;
                month++;
                result.setDay(day);
                result.setMonth(month);
                result.setYear(year);
                resultList.add(result);

            } else if (!isLeapYear(year) &&
                    (month == 2) && (day == 28)) {
                flag[11] = 1;
                day = 2;
                month++;
                result.setDay(day);
                result.setMonth(month);
                result.setYear(year);
                resultList.add(result);

            } else if (!isLeapYear(year) && (month == 2) && (day == 29)) {
                flag[12] = 1;

                resultList.add(null);

            } else if (isLeapYear(year) && (month == 2) && (day == 27)) {
                flag[13] = 1;
                day += 2;
                result.setDay(day);
                result.setMonth(month);
                result.setYear(year);
                resultList.add(result);

            } else if (isLeapYear(year) && (month == 2) && (day == 28)) {
                flag[14] = 1;
                day = 1;
                month++;
                result.setDay(day);
                result.setMonth(month);
                result.setYear(year);
                resultList.add(result);

            } else if (isLeapYear(year) && (month == 2) && (day == 29)) {
                flag[15] = 1;
                day = 2;
                month++;
                result.setDay(day);
                result.setMonth(month);
                result.setYear(year);
                resultList.add(result);

            } else if ((month == 2) && ((day == 30) || (day == 31))) {
                flag[16] = 1;
                resultList.add(null);
            }
            i++;
        }
    }


    private static boolean isLeapYear(int year) {
        return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0);
    }

    public boolean isValid(RqtsSubmission date) {
        int year = date.getYear();
        short month = date.getMonth();
        short day = date.getDay();
        if (month < 1 || month > 12) {
            return false;
        }
        int[] monthLengths = new int[]{0, 31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        if (isLeapYear(year)) {
            monthLengths[2] = 29;
        } else {
            monthLengths[2] = 28;
        }
        int monthLength = monthLengths[month];
        return !(day < 1 || day > monthLength);
    }


}
