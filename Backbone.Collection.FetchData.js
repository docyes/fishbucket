/**
 * var searchResults = new FetchDataCollection();
 * searchResults.on('reset', function() {
 *     console.log(this.searchResults.toJSON());
 * }, this);
 * searchResults.fetchData.set('q', 'Trailer trash getaways');
 * searchResults.fetch(); //sends q with a value of Trailer trash getaways
 * searchResults.fetch({data: {q: 'House boating getaways'}}); //sends q with House boating getaways
 * searchResults.fetch({data: {}}); //sends q with Trailer trash getaways
 */
var FetchDataCollection = Backbone.Collection.extend({
    initialize: function() {
        this.fetchData = this.options.FetchDataModel ? new this.options.FetchDataModel() || new Backbone.Model();
        this.fetchData.on('change', function() {
            this.fetch({data: this.fetchData.toJSON()});
        }, this);
        this.fetch: function(method, model, options) {
            options || (options={});
            options = $.extend({data: this.fetchData.toJSON()}, options);
            return Backbone.prototype.fetch.call(this, method, model, options);
        }
    }
});
