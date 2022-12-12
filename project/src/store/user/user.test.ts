import {UserProcess} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import {user} from './user';
import {makeFakeUser} from '../../utils/mocks';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';

const userReducer = user;

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(userReducer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({...initialState});
  });

  it('should set authorization staus to AUTH and load user data', () => {
    const state = {...initialState};
    const currentUser = makeFakeUser();
    expect(userReducer.reducer(state, {type: checkAuthAction.fulfilled.type, payload: currentUser}))
      .toEqual({...initialState, authorizationStatus: AuthorizationStatus.Auth, user: currentUser});
  });

  it('should set authorization staus to No-Auth and reset user data', () => {
    const state = {...initialState};
    expect(userReducer.reducer(state, {type: checkAuthAction.rejected.type}))
      .toEqual({...initialState, authorizationStatus: AuthorizationStatus.NoAuth, user: null});
  });

  it('should set authorize user and load user data', () => {
    const state = {...initialState};
    const currentUser = makeFakeUser();
    expect(userReducer.reducer(state, {type: loginAction.fulfilled.type, payload: currentUser}))
      .toEqual({...initialState, authorizationStatus: AuthorizationStatus.Auth, user: currentUser});
  });

  it('should reject login - set authorization staus to NoAuth and reset user data', () => {
    const state = {...initialState};
    expect(userReducer.reducer(state, {type: loginAction.rejected.type}))
      .toEqual({...initialState, authorizationStatus: AuthorizationStatus.NoAuth, user: null});
  });

  it('should logout user - set authorization staus to NoAuth and reset user data', () => {
    const state = {...initialState};
    expect(userReducer.reducer(state, {type: logoutAction.fulfilled.type}))
      .toEqual({...initialState, authorizationStatus: AuthorizationStatus.NoAuth, user: null});
  });
});
