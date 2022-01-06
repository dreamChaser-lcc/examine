import React from 'react';
import { Card } from 'antd';
import { Upload, message, Button } from 'antd';
import { UploadOutlined, DownCircleOutlined } from '@ant-design/icons';
import {
  UploadFile,
  UploadListType,
  UploadProps,
} from 'antd/lib/upload/interface';

export default () => {
  const beforeUpload = (preData: any) => {
    // console.log(preData)
    // return false
  };
  const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info: any) {
      let fileList = [...info.fileList];
      fileList = fileList.map((item) => {
        item?.responese && (item.url = item.responese.url);
        return item;
      });
      console.log(fileList);
      if (info.file.status !== 'uploading') {
        console.log('info.file', fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    directory: false,
    accept: '.png,.jpg',
    iconRender: (file: UploadFile, listType?: UploadListType) => {
      return <DownCircleOutlined />;
    },
    // customRequest:(e:any)=>{console.log(e) },
    beforeUpload: beforeUpload,
    defaultFileList: [
      {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      },
    ],
  };
  const folderProps: UploadProps = {
    name: 'folder',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    directory: true,
  };
  return (
    <>
      <Card title={'文件上传'} style={{ margin: '20px' }}>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Card>
      <Card title={'文件夹上传'} style={{ margin: '20px' }}>
        <Upload {...folderProps}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Card>
    </>
  );
};
