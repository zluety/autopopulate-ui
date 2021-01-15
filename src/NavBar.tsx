import { FunctionComponent, useRef } from 'react';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import './NavBar.css';



export const NavBar: FunctionComponent = () => {

  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    console.log("Upload Button Clicked!");

    if (inputEl && inputEl.current) {
      inputEl.current.click();
    }
  };

  const _items: ICommandBarItemProps[] = [
    {
      key: 'upload',
      text: 'Upload',
      iconProps: { iconName: 'Upload' },
      onClick: () => onButtonClick()
    }
  ];

  return (
    <div>
      <input type="file" ref={inputEl} />
      <CommandBar
        className="nav"
        items={_items}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
    </div>
  );
};
