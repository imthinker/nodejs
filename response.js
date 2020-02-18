class Response {
    constructor( success,msg,code,result){
        this.success = success;
        this.msg = msg;
        this.code = code;
        this.result = result;
    }
}

module.exports = Response;