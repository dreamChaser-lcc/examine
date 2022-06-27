declare module '*.css';
declare module '*.less';
declare module '*.gif';
declare module '*.json';
declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
/**umirc的define全局变量  */
declare const APPINFO: {
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
};
