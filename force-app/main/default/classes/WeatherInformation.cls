public class WeatherInformation {
    @AuraEnabled 
    public static string getWeatherDataFromAPI (string city){
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('callout:WeatherNC/'+'/forecast.json?&q='+city);
        request.setMethod('GET');        
        HttpResponse response = new HttpResponse();
        response = http.send(request);      
        system.debug(response.getBody());
        system.debug(response.getStatus());
        system.debug(response.getStatusCode());

        return response.getBody();
    }
    
}