const cp = require('child_process');
const ssh2 = require('ssh2');
const { resolve } = require('path');

// 压缩脚本路径 一定要双引号
const script = `"${resolve(__dirname, './pack.sh')}"`;

// 执行脚本获取输出流
let pro = cp.exec(script, (error) => {
  if (error) {
    console.error('------------compress err------------', error);
  }
});

pro.stdout.pipe(process.stdout);
pro.on('exit', () => {
  console.log('------------connect start------------');
  connect();
});

// 解压
// tar -xzvf ./client/deploy.tar.gz
// 压缩 把dist压缩到./client/ 并 命名为deploy.tar.z
// tar -cvzf ./client/deploy.tar.gz ./dist

const conn = new ssh2.Client();

/**连接服务器配置 */
const clientConfig = {
  host: 'xxx.xxx.xxx.xx',
  port: 22,
  username: 'root',
  password: 'xxxx',
};

// 部署根目录
const deployRootDir = '/www/wwwroot/web/';
// 部署目录
const deployDir = 'deploy/admin';
// 部署文件压缩包
const deployFile = 'deploy.tar.gz';

// 建立ssh 连接并上传
const connect = () => {
  conn
    .on('ready', () => {
      console.log('------------connect success------------');
      upload();
    })
    .connect(clientConfig);
};

/**上传文件到服务器 */
const upload = () => {
  // 本地要上传的路径
  const locationPath = resolve(__dirname, './deploy.tar.gz');
  // 目标路径
  const remotePath = '/www/wwwroot/web/deploy.tar.gz';
  // 上传配置
  const option = {};
  // 上传回调
  const callBack = (err) => {
    err && console.error('------------upload err------------\n', err);

    shell();
  };

  conn.sftp((err, sftp) => {
    sftp && console.log('------------sftp ready------------');
    // 开始上传
    sftp.fastPut(locationPath, remotePath, option, callBack);
  });
};

const shell = () => {
  /**
   * 1.备份数据到bak目录下，并以时间戳命名
   * 2.清空原解压文件夹所有文件
   * 3.解压到指定文件夹
   * 4.删除原压缩文件
   */
  // 部署脚本
  const shellScript = `
   cd ${deployRootDir}
   cp ${deployFile} bak/bak.$(date "+%Y.%m.%d_%H:%M").tar.gz
   rm -rf ${deployDir}/*
   tar -zxvf ${deployFile} -C ${deployDir}
   rm -rf ${deployFile}
   exit
  `;
  conn.shell((err, stream) => {
    stream
      .end(shellScript)
      .on('data', (data) => {
        console.log(data.toString());
      })
      .on('close', () => {
        conn.end();
        console.log('------------connect end------------');
      });
  });
};
