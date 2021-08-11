import ReactDOM from 'react-dom'

import App from './App'
import renderRoutes from './routes'

import './index.scss'

/* 
'react-dom' 라이브러리를 사용하여 컨테이너('#root')에서 리액트의 구성 요소들을 DOM으로 렌더링하고 해당 컴포넌트에 대한 참조를 반환합니다. 즉 'react-dom'을 통해 튜토리얼 애플리케이션의 DOM을 public/index.html 파일의 <div id="root"></div>로 채우게 됩니다.
*/

// App(루트 컴포넌트)를 렌더링합니다.
ReactDOM.render(
  renderRoutes(App),
  document.getElementById('root')
)

// hot module replacement.
// : If file changed, re-render root component(App.js).
if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NextApp = require('./App').default
    ReactDOM.render(renderRoutes(NextApp), document.getElementById('root'))
    console.log('Hot module replaced..')
  })
}
