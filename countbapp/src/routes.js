import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Count from 'components/Count'

/* 
'routes.js' 파일은 본 튜토리얼 애플리케이션의 라우팅 정의를 담고 있습니다. 루트 컴포넌트 'App.js'는 'route.js' 파일에 정의된 하위 컴포넌트들을 렌더링합니다. 위 코드를 보면, 브라우저의 URL 경로가 "/"일 때 'Count' 컴포넌트는 rootComponent의 하위 컴포넌트로서 렌더링될 것입니다.
*/


const renderRoutes = rootComponent => (
  <Router history={browserHistory}>
    <Route component={rootComponent}>
      <Route path="/" component={Count} />
    </Route>
  </Router>
)

export default renderRoutes
