public class MapControllerLWC {

    @AuraEnabled(cacheable=true)
    public static list<account> getAccountRecords(){
        list<account> accLst = [
        select Id, Name, Description, BillingStreet, BillingCity, BillingState, BillingPostalCode, BillingCountry
        from account
        where BillingStreet <> null
        limit 10
    ];
    return accLst;
    }
}