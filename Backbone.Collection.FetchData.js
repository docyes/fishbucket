/**
 *  
 */
var FetchData = Backbone.Collection.extend({
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
