import logo from './logo.svg';
import './App.css';
import Inline from './Inline';
import Internal from './Internal';
import External from './External';
import Modularise from './Modularise';
import BootstrapMdn from './BootstrapMdn';
import BootstrapInstall from './BootstrapInstall';
import PropsParent from './PropsParent';

function App() {
  return (
    <div >
      <h1 style={{textAlign:'center'}}> This is App File </h1>
      <Inline />
      <Internal />
      <External />
      <Modularise />
      <BootstrapMdn />
      <BootstrapInstall />
      <PropsParent />

    </div>
  );
}

export default App;
