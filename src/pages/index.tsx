import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import routesConfig from '../routes';
import {useEffect, useState} from 'react';

import WrapperContainer from '../structure';
import { shouldComputedPermission } from '@brushes/tools';
const App = () => {
  const [menus, setMenu] = useState([])
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    initAuthority()
  }, []);

  function initAuthority() {
    const arr = [] as any;
    routesConfig.forEach(item => {
      if(!!item.key) {
        arr.push(item)
      } else {
        // @ts-ignore
        arr.push(...item.children)
      }
    });
    const menusList = shouldComputedPermission(routesConfig);
    setRoutes(arr);
    setMenu(menusList);
  }

  return (
    <BrowserRouter>
      <WrapperContainer menus={menus}>
        <Routes>
          {routes.map(({ key, element }) => (
            <Route
              key={key}
              path={key}
              element={element}
            />
          ))}
        </Routes>
      </WrapperContainer>
    </BrowserRouter>
  )
}

export default App;
