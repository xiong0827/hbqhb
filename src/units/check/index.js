
export default class checkObj {
    constructor({
        phone,
        code,
        password,
        repassword
    }) {
        this.phone = phone
        this.code =code
        this.password = password
        this.repassword = repassword
    }
    checkPhone = function () {
        if (!this.phone) {
            return 0
        }
        let part = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|16[0|1|2|3|4|5|6|7|8|9]|17[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|19[0|1|2|3|4|5|6|7|8|9])\d{8}$/;
        if (part.test(this.phone)) {
            return true
        } else {
            return false
        }
    }
    checkCode = function (code) {
        if (!this.code) {
            return 0
        }
        if (this.code ==code) {
            return true
        } else {
            return false
        }
    }
    checkPassword = function () {
        if (!this.password) {
            return 0
        }
        const part = /^[a-zA-Z]\S{6,12}$/
        if (part.test(this.password)) {
            return true
        } else {
            return false
        }
    }
    chekRePassword = function () {
        if (!this.checkPassword()) {
            return 0
        }
        if (this.password == this.repassword) {
            return true
        } else {
            return false
        }
    }
    checkAll(code) {
        let promiseall = [
            this.checkCode(code),
            this.chekRePassword(),
            this.checkPassword(),
            this.checkPhone(),
        ]
        promiseall = promiseall.filter(Element => Element != 0)
        return promiseall.every(Element => Element == 1)
    }
}