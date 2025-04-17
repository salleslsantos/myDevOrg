public class SearchMovie {
    public static string ENDPOINT = 'https://www.omdbapi.com/';
    public static string KEY = '92a0aec4';

    @AuraEnabled
    public static string getMovieInformationFromOmdb(string movieName){
        http http = new http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(ENDPOINT+'?apikey='+KEY+'&t='+movieName);
        request.setMethod('GET');
        httpresponse response = new httpResponse();
        response = http.send(request);      

        system.debug('response: '+response.getBody());
        return response.getBody();
        
    }
}