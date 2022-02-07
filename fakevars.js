module.exports = {
    assign: function (options) {
        if (process.env.NODE_ENV == 'development') {
            options = this.parse(options)
            if (options.getvars) {
                this.set({
                    $_GET: options.getvars
                });
            }
            if (options.postvars) {
                this.set({
                    $_POST: options.postvars
                });
            }
            return {
                "$_GET": this.global.data.$_GET,
                "$_POST": this.global.data.$_POST
            }
        }
    }
}

