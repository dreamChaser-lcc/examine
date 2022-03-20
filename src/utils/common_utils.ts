export const SUCCESS_STATUS_CODE = '00000';

/**
 * 复制文本实现（old）
 * 比较老的方法 document.execCommand将被弃用
 * @param temp 复制的文本
 * @returns
 */
function oldCopyFunc(temp: string) {
  const copyInput = document.createElement('input'); // 创建输入框
  copyInput.value = temp;
  document.body.appendChild(copyInput); // 添加input输入框元素
  copyInput.select(); // 选择文本
  const isSuccess = document.execCommand('copy'); // 命令复制
  copyInput.remove(); // 移除元素
  return isSuccess;
}
/**
 * 复制文本实现(new)
 * document.execCommand 的替代方案
 * @param temp 复制的文本
 * @returns
 */
async function newCopyFunc(temp: string) {
  navigator.clipboard.writeText(temp);
}
/**
 * 复制文本
 * @param text 复制内容
 * @param generateTemp 生成复制内容的函数
 */
export function copyText(
  text: string,
  generateTemp?: (text: string) => string,
) {
  return new Promise((resolve, reject) => {
    /**复制的内容 */
    const temp = typeof generateTemp === 'function' ? generateTemp(text) : text;
    try {
      // oldCopyFunc(temp)
      newCopyFunc(temp);
      resolve(temp);
    } catch (e) {
      reject(false);
    }
  });
}
