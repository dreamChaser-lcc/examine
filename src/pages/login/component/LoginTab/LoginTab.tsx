import React, { FC, useRef } from 'react';

export interface ILoginTab extends React.AllHTMLAttributes<HTMLHeadElement> {
  onTabChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Tab: FC<ILoginTab> = React.forwardRef<any, ILoginTab>((props, ref) => {
  const { onTabChange, ...resprops } = props;
  return (
    <header {...resprops} ref={ref}>
      <input
        id="signIn"
        name="radio"
        defaultChecked={true}
        onChange={onTabChange}
        type="radio"
      />
      <nav>
        <label htmlFor="signIn">sign in</label>
      </nav>
      <input id="signUp" name="radio" onChange={onTabChange} type="radio" />
      <nav>
        <label htmlFor="signUp">sign up</label>
      </nav>
    </header>
  );
});
export default Tab;
