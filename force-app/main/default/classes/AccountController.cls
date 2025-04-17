public with sharing class AccountController {
    
    @AuraEnabled(cacheable=true) //necessário incluir a notação AuraEnabled
    public static list<account> getAccountList(){ //necessário que o método seja static e public/global
        list<account> lstAcc = [select Id, Name, Type, Industry from Account WHERE Type <> null LIMIT  5];
        system.System.debug('lista de account: '+lstAcc);
        return lstAcc;
    }

    @AuraEnabled(cacheable=true) 
    public static list<account> filterAccountByType(string type){ 
        list<account> lstAcc = [select Id, Name, Type, Industry from Account WHERE Type = :type LIMIT  5];
        system.System.debug('lista de account: '+lstAcc);
        return lstAcc;
    }

    @AuraEnabled(cacheable=true)
    public static list<account> findAccount(string searchKey){
        string key = '%' + searchKey + '%';
        list<account> accLst = [select id, name, type, industry from account where name like :key];

        return accLst;
    }
    
}