public class CarController {
    @AuraEnabled(cacheable=true) 
    public static list<car__c> getCars(){
        return [
            select Id, Name, Category__c, Control__c, Description__c, Fuel_type__c, Make__c, MSRP__c, Number_of_seats__c, Picture_URL__c 
            from car__c
            ];
    }
}    
