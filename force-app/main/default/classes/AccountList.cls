public class AccountList {
    @AuraEnabled(cacheable=true)
    public static list<account> getAccount(id accId){
        return [select id, name, rating from account where id=:accId];
    }
}