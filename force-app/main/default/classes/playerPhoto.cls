public class playerPhoto {
    @AuraEnabled
    public static string getPlayerIdPhotoByName(string playerNameFromSearch){
        
        string playerId = [select id, Name, playerId__c, teamId__c from Contact where Name = :playerNameFromSearch limit 1].playerId__c;
        system.System.debug('playerId: '+playerId);

        return playerId;
    }

    @AuraEnabled
    public static string getTeamIdPhotoByName(string teamLogoFromSearch){
        
        string teamId = [select id, Name, playerId__c, teamId__c from Contact where Name = :teamLogoFromSearch limit 1].teamId__c;
        system.System.debug('playerId: '+teamId);

        return teamId;
    }
    
}