//TypeScript 默认并不支持 *.vue 后缀的文件，所以告诉typeScript,*.vue后缀的文件可以交给vue模块来处理
declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}
