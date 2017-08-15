package cn.edu.jit.util;

import cn.edu.jit.po.ChangeSubmission;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 假设某小超市商品价格P均小于等于100元，且为整数，并且顾客付款M也都在100以内，该超市的POS机上有一个计算找零钱的程序，
 * 为了方便找钱，该程序的功能是：输入商品价格P和顾客付款M，程序计算出需要货币张数最少的找钱方案C。
 * （假设货币面值只有50元、10元、5元、1元4种）
 */
public class AnalyseChange {

    public static final int BIAN_JIE_0 = 0;
    public static final int BIAN_JIE_1 = 1;
    public static final int BIAN_JIE_2 = 2;
    public static final int BIAN_JIE_99 = 99;
    public static final int BIAN_JIE_100 = 100;
    public static final int BIAN_JIE_101 = 101;
    public static final int BIAN_JIE_1_ = -1;
    private static final int BIAN_JIE_98 = 98;

    /**
     * 边界值总数
     */
    public static final int ZS = 18;

    /**
     * 覆盖到的边界值种类
     */
    public static final String FG = "FG";

    /**
     * 覆盖到的总数
     */
    public static final String FG_SUM = "FG_SUM";

    /**
     * 未覆盖到的总数
     */
    public static final String WFG_SUM = "WFG_SUM";

    /**
     *测试用例总数
     */
    public static final String YLZS = "YLZS";

    /**
     * 不符合要求的用例
     */
    public static final String BAD = "BAD";

    /**
     * 用例
     */
    public static final String YL = "YL";

    List<ChangeSubmission> data;
    int badCount = 0;
    Map<Integer,Integer> priceMap ;
    Map<Integer,Integer> paymentMap;
    Map<Integer,Integer> ppMap;

    public AnalyseChange(String str){

        data = new ArrayList<>();

        String[] split = str.split("[;；]");
        for(String item : split){
            String[] sp = item.split("[,，]");
            try{
                int n1 = Integer.parseInt(sp[0]);
                int n2 = Integer.parseInt(sp[1]);
                data.add(new ChangeSubmission(n1,n2));
            }catch (Exception e){
                badCount++;
            }
        }

        priceMap = new HashMap<>(6);
        paymentMap = new HashMap<>(6);
        ppMap = new HashMap<>(6);

        priceMap.put(BIAN_JIE_0,0);
        priceMap.put(BIAN_JIE_1,0);
        priceMap.put(BIAN_JIE_2,0);
        priceMap.put(BIAN_JIE_99,0);
        priceMap.put(BIAN_JIE_100,0);
        priceMap.put(BIAN_JIE_101,0);

        paymentMap.put(BIAN_JIE_0,0);
        paymentMap.put(BIAN_JIE_1,0);
        paymentMap.put(BIAN_JIE_2,0);
        paymentMap.put(BIAN_JIE_99,0);
        paymentMap.put(BIAN_JIE_100,0);
        paymentMap.put(BIAN_JIE_101,0);

        ppMap.put(BIAN_JIE_1_, 0);
        ppMap.put(BIAN_JIE_0, 0);
        ppMap.put(BIAN_JIE_1, 0);
        ppMap.put(BIAN_JIE_98, 0);
        ppMap.put(BIAN_JIE_99, 0);
        ppMap.put(BIAN_JIE_100, 0);

        analyse();
    }

    private void analyse(){
        for(ChangeSubmission item : data){
            int price = item.getPrice();
            int payment = item.getPayment();
            int pp = payment - price;
            Integer p = priceMap.get(price);
            if(p!=null) priceMap.put(price,++p);
            Integer q = paymentMap.get(payment);
            if(q!=null) paymentMap.put(payment,++q);
            Integer o = ppMap.get(pp);
            if(o!=null) ppMap.put(pp,++o);
        }
    }

    public Map getAnalyseResult(){
        Map<String,Object> map = new HashMap();
        int sum = 0;
        int n1 = 0;//未覆盖到的边界值
        int n2 = 0;//覆盖到的种类
        for(Integer item : priceMap.keySet()){
            Integer i = priceMap.get(item);
            if(i==0) n1++;
            else{
                sum+=i;
                n2+=1;
            }
        }
        for(Integer item : paymentMap.keySet()){
            Integer i = paymentMap.get(item);
            if(i==0) n1++;
            else{
                sum+=i;
                n2+=1;
            }
        }
        for(Integer item : ppMap.keySet()){
            Integer i = ppMap.get(item);
            if(i==0) n1++;
            else{
                sum+=i;
                n2+=1;
            }
        }

        map.put(YLZS,data.size());
        map.put(BAD,badCount);
        map.put(WFG_SUM,n1);
        map.put(FG,n2);
        map.put(FG_SUM,sum);
        map.put(YL,this.data);
        map.put("ZS",ZS);
        map.put("score",n2*100/ZS);
        map.put("data",this.data);

        return map;
    }
}
