var FetchData = Backbone.Model.extend({
    initialize: function() {
        this.fetchData = this.options.FetchModel ? new this.options.FetchModel() || new Backbone.Model();
        this.on('change', function() {
            this.fetch({data: this.fetchData.toJSON()});
        }, this);
        this.fetch: function(method, model, options) {
            options || (options={});
            options = $.extend({data: this.fetchData.toJSON()}, options);
            return Backbone.prototype.fetch.call(this, method, model, options);
        }
    }
});
