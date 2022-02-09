module.exports = {
    assign: function (options) {
        if (process.env.NODE_ENV == 'development') {
            options = this.parse(options)
            if (options.getvars) {
                this.set({
                    $_GET: options.getvars
                })
            }
            if (options.postvars) {
                this.set({
                    $_POST: options.postvars
                })
            }
            if (options.paramvars) {
                this.set({
                    $_PARAM: options.paramvars
                })
            }
            return {
                "$_GET": this.global.data.$_GET,
                "$_POST": this.global.data.$_POST,
                "$_PARAM": this.global.data.$_PARAM
            }
        }
    }
}

