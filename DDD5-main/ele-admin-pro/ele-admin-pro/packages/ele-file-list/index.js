/** 文件列表组件 license by http://eleadmin.com */
import EleFileList from './src/main';

EleFileList.install = function (app) {
  app.component(EleFileList.name, EleFileList);
};

export default EleFileList;
