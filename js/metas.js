var app = angular.module('app',[]);

app.service('metaService', function() {
    var title = 'PLP Comunicación';
    var metaDescription = '';
    var metaKeywords = '';
    return {
        set: function(newTitle, newMetaDescription, newKeywords) {
            metaKeywords = newKeywords;
            metaDescription = newMetaDescription;
            title = newTitle;
        },
        metaTitle: function(){ return title; },
        metaDescription: function() { return metaDescription; },
        metaKeywords: function() { return metaKeywords; }
    }
});