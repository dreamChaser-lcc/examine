/*
 * @Author: dreamChaser-lcc
 * @Date: 2022-06-19 02:30:53
 * @LastEditors: dreamChaser-lcc
 * @LastEditTime: 2022-07-31 21:52:14
 * @Description:
 */
import { objToArr } from '@/utils/common.utils';
import { Alert, Card, Descriptions } from 'antd';
export default (props: any) => {
  // const denpendencies = APPINFO;
  // const devDenpendencies = APPINFO;
  const { dependencies, devDependencies } = APPINFO;
  // console.log(dependencies.lenght, devDependencies);
  // for (let [name, val] of Object.entries(dependencies)) {
  //   console.log(name, val);
  // }
  const productArr = objToArr(dependencies);
  const devArr = objToArr(devDependencies);
  return (
    <>
      {/* <Alert  type="info" message="关于" showIcon style={{margin:"10px 0"}}/> */}
      <Card>
        <Descriptions title="生产环境依赖" bordered>
          {productArr.map((item) => {
            const val = item.value as string;
            return (
              <Descriptions.Item
                key={item.name}
                label={item.name}
                children={val}
              />
            );
          })}
        </Descriptions>
      </Card>

      <Card>
        <Descriptions title="开发环境依赖" bordered>
          {devArr.map((item) => {
            const val = item.value as string;
            return (
              <Descriptions.Item
                key={item.name}
                label={item.name}
                children={val}
              />
            );
          })}
        </Descriptions>
      </Card>
    </>
  );
};
