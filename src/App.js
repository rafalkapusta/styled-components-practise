import React, { useReducer, useRef, useEffect } from 'react';
import { MainTemplate } from './components/templates/MainTemplate';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AddUser } from './views/AddUser/AddUser';
import { UsersList } from './views/UsersList/UsersList';
import { reducer, initialState } from './reducer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Modal from './components/organisms/Modla/Modal';

const ComponentWrapper = styled(TransitionGroup)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: beige;
  position: relative;
  perspective: 1000px;
  border-radius: 12px;
`;

export const StateContext = React.createContext({
  state: {},
  setState: () => {},
});

function App() {
  const [state, setState] = useReducer(reducer, initialState);
  let location = useLocation();
  const nodeRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setState({ type: 'INIT' }), 2000);
  }, []);

  const getUser = (id) => {
    console.log(id);
  }
  return (
    <>
      <GlobalStyle />
      <StateContext.Provider value={{ state, setState }}>
        <MainTemplate>
          <ComponentWrapper>
            <CSSTransition
              key={location.key}
              classNames="card"
              timeout={500}
              nodeRef={nodeRef}
            >
              <Switch location={location}>
                <Route exact path="/">
                  <UsersList state={state} setState={setState} ref={nodeRef} onClick={getUser} />
                  <Modal user/>
                </Route>
                <Route path="/add-user">
                  <AddUser setState={setState} state={state} ref={nodeRef} />
                </Route>
              </Switch>
            </CSSTransition>
          </ComponentWrapper>
        </MainTemplate>
      </StateContext.Provider>
    </>
  );
}

export default App;
