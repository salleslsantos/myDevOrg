public class PostalCodeInformation {
    @AuraEnabled
    public static map<string,object> getDataFromPostalCode(string postalCode){
        http http = new http();
        httprequest request = new httprequest();
        request.setEndpoint('callout:PostalCodeNC/'+postalCode+'/json/');
        request.setMethod('GET');        
        httpResponse response = new httpResponse();
        response = http.send(request);      
        system.System.debug(response.getBody());
        system.debug(response.getStatus());
        system.debug(response.getStatusCode());
        system.debug('response: '+response);

        map<string,object> resultMap = (map<string,object>) json.deserializeUntyped(response.getBody());
        resultMap.put('statusCode',response.getStatusCode() );

        system.debug('statusCode: '+resultMap.get('statusCode'));
        system.debug('body: '+resultMap);
        system.debug('keyset: '+resultMap.keyset());
        
        
        //return response.getBody();
        return resultMap;
    }
}