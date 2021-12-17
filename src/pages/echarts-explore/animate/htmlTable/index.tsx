import { FC, HTMLAttributes, Key } from 'react';
// css3动画库
import 'animate.css';
import { Spin } from 'antd';
import moment from 'moment';
interface IHtmlTableProps<T = any> extends HTMLAttributes<any> {
  dataSource: T[];
  columns: T[];
  rowkey: Key;
}
/**动态插入表格 */
const HtmlTable: FC<IHtmlTableProps<any>> = (props) => {
  const { dataSource, columns, rowkey, ...resprops } = props;
  return (
    <>
      {dataSource.length ? (
        <table className="table" {...resprops}>
          <thead>
            <tr>
              {columns.map((item) => {
                return <th key={item.title + Math.random()}>{item.title}</th>;
              })}
              <th key="timer">当前时间</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {dataSource?.map((val: any, index) => {
              return (
                <tr
                  key={val[rowkey] + Math.random()}
                  className={` ${
                    // index === 0 ? 'animated-fadeInRight' : 'animated-slideInbottom'
                    index === 0
                      ? 'animate__animated animate__fadeInRight'
                      : 'animate__animated animate__slideInDown'
                  }`}
                >
                  {columns.map((item) => {
                    return (
                      <td key={val[item.dataIndex] + Math.random()}>
                        {val[item.dataIndex]}
                      </td>
                    );
                  })}
                  <td key={'time' + Math.random()}>
                    {moment(new Date().getTime()).format("YYYY/MM/DD hh:mm:ss")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
      {!dataSource.length && (
        <Spin style={{ textAlign: 'center' }} tip="表格加载中" />
      )}
    </>
  );
};
export default HtmlTable;
