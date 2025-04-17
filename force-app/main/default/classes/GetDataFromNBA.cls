public class GetDataFromNBA {
    @AuraEnabled
    public static string getNBAPlayerStats (string player){

        http http = new http();
        HttpRequest request = new HttpRequest();
        //request.setEndpoint('callout:nbaPlayerNC/'+player);
        //String encodedPlayerName = EncodingUtil.urlEncode(player, 'UTF-8');
        request.setEndpoint('http://rest.nbaapi.com/api/PlayerDataTotals/name/'+player);
        request.setMethod('GET');        
        HttpResponse response = new HttpResponse();
        response = http.send(request);
        
        //system.debug('encodedPlayerName: '+encodedPlayerName);
        system.debug(response.getBody());
        system.debug(response.getStatus());
        system.debug(response.getStatusCode());

        return response.getBody();

    }
    
}