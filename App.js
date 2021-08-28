import logo from './logo.svg';
import './App.css';
import FormValidation from './FormValidation/FormValidation';
// import Demo from './Jss/DemoJss/Demo';
import BaiTapToDoList from './BaiTapToDoList/BaiTapToDoList';
import Hook from './Hooks/Hook';
import HookUseReducer from './Hooks/HookUseReducer';
import HookRedux from './HookRedux/HookRedux';
import BaiTapGameBauCua from './BaiTapGameBauCua/BaiTapGameBauCua';

function App() {
  return (
    <div className="App">
      {/* <FormValidation></FormValidation> */}
      {/* <Demo></Demo> */}
      {/* <BaiTapToDoList></BaiTapToDoList> */}
      {/* <Hook></Hook> */}
      {/* <HookUseReducer></HookUseReducer> */}
      {/* <HookRedux></HookRedux> */}
      <BaiTapGameBauCua></BaiTapGameBauCua>
    </div>
  );
}

export default App;
