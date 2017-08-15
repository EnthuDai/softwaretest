/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('SoftwareTest.view.student.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.student.main',

    data: {
        name: 'JIT',

        questionName1: '日期推算',
        questionDescription1:'有一个日期推算程序，该程序的功能是输入一个日期，输出该日期后天的日期，例如输入2013年1月1日，则输出2013年1月3日。现假设程序已经被开发出来，请对该软件的可执行程序进行功能测试，要求用尽可能少的测试用例检测出尽可能多的软件缺陷。',
        questionName2: '找零钱',
        questionDescription2:'假设某小超市商品价格P均小于等于100元，且为整数，并且顾客付款M也都在100以内，该超市的POS机上有一个计算找零钱的程序，为了方便找钱，该程序的功能是：输入商品价格P和顾客付款M，程序计算出需要货币张数最少的找钱方案C。（假设货币面值只有50元、10元、5元、1元4种）',
        questionName3: '逻辑覆盖',
  

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

    //TODO - add data, formulas and/or methods to support your view
});
