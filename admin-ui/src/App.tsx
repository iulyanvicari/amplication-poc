import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UrlList } from "./url/UrlList";
import { UrlCreate } from "./url/UrlCreate";
import { UrlEdit } from "./url/UrlEdit";
import { UrlShow } from "./url/UrlShow";
import { UrlGroupList } from "./urlGroup/UrlGroupList";
import { UrlGroupCreate } from "./urlGroup/UrlGroupCreate";
import { UrlGroupEdit } from "./urlGroup/UrlGroupEdit";
import { UrlGroupShow } from "./urlGroup/UrlGroupShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Url"
          list={UrlList}
          edit={UrlEdit}
          create={UrlCreate}
          show={UrlShow}
        />
        <Resource
          name="UrlGroup"
          list={UrlGroupList}
          edit={UrlGroupEdit}
          create={UrlGroupCreate}
          show={UrlGroupShow}
        />
      </Admin>
    </div>
  );
};

export default App;
