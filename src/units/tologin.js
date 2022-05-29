import {
    Dialog
} from "vant";
import router from '@/router'

function tologin() {
    setTimeout(() => {
        Dialog.confirm({
                title: "登录提示",
                message: "登录后查看",
                confirmButtonText: "立刻登录",
                cancelButtonText: "稍后登录",
            })
            .then(() => {
                router.push({
                    name: "login"
                });
            })
            .catch(() => {
                console.log(1);
            });
    }, 200);
}
export const toRouter = function (reuslt, query) {
    if (localStorage.getItem("token")) {
        router.push({
            name: reuslt,
            query,
        });
    } else {
        tologin();
    }
}