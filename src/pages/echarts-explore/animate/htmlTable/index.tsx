import { random } from 'lodash';
import { FC, Key } from 'react';
import 'animate.css';
interface IHtmlTableProps<T = any> {
  dataSource: T[];
  columns: T[];
  rowkey: Key;
}
const HtmlTable: FC<IHtmlTableProps<any>> = (props) => {
  const { dataSource, columns, rowkey } = props;
  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            {columns.map((item) => {
              return <th key={item.title + Math.random()}>{item.title}</th>;
            })}
          </tr>
        </thead>
        <tbody className='tbody'>
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
                <td>{val[columns[0].dataIndex]}</td>
                <td>{val[columns[1].dataIndex]}</td>
                <td>{val[columns[2].dataIndex]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default HtmlTable;
