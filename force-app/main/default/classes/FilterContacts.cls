public class FilterContacts {

    @AuraEnabled(cacheable=true)
    public static list<contact> getContactList(){
        return [select id, name, email, title from contact limit 20];
}
}