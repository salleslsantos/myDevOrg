public class AccountContact {
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccountContactList(){
        return 
        [select id, name, phone, website, 
        (select id, name, phone, email from contacts) from account limit 10];
    }
    
}