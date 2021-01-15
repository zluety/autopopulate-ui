import { FunctionComponent, useRef } from 'react';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import axios from 'axios';
import './NavBar.css';

export const NavBar: FunctionComponent = () => {

  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    if (inputEl && inputEl.current) {
      inputEl.current.click();
    }
  };

  const onFileChange = (event: any) => {
    console.log('File Changed');
    // Update the state 
    const file: File = event.target.files[0];
    const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "file", 
        file, 
        file.name 
      ); 
     
      // Request made to the backend api 
      // Send formData object
      console.log("Uploading File...") 
      axios.post("http://127.0.0.1:8000/uploadfile/", formData); 

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
      <input type="file" ref={inputEl} onChange={onFileChange} />
      <CommandBar
        className="nav"
        items={_items}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
    </div>
  );
};
