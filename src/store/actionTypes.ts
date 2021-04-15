const REQUEST = '_REQUEST';
const SUCCESS = '_SUCCESS';
const FAILURE = '_FAILURE';
const OPEN = '_OPEN';
const CLOSE = '_CLOSE';

const SIGN_IN = 'SIGN_IN';
const GAME_MODAL = 'GAME_MODAL';
const SIGN_UP = 'SIGN_UP';
const LOG_OUT = 'LOG_OUT';
const GET_USER_DATA = 'GET_USER_DATA';
const CHANGE_USER_DATA = 'CHANGE_USER_DATA';
const CHANGE_USER_PASSWORD = 'CHANGE_USER_PASSWORD';
const CHANGE_USER_AVATAR = 'CHANGE_USER_AVATAR';

export const SIGN_IN_REQUEST = `${SIGN_IN}${REQUEST}`;
export const SIGN_IN_SUCCESS = `${SIGN_IN}${SUCCESS}`;
export const SIGN_IN_FAILURE = `${SIGN_IN}${FAILURE}`;
export const GAME_MODAL_OPEN = `${GAME_MODAL}${OPEN}`;
export const GAME_MODAL_CLOSE = `${GAME_MODAL}${CLOSE}`;

export const SIGN_UP_REQUEST = `${SIGN_UP}${REQUEST}`;
export const SIGN_UP_SUCCESS = `${SIGN_UP}${SUCCESS}`;
export const SIGN_UP_FAILURE = `${SIGN_UP}${FAILURE}`;

export const LOG_OUT_REQUEST = `${LOG_OUT}${REQUEST}`;
export const LOG_OUT_SUCCESS = `${LOG_OUT}${SUCCESS}`;
export const LOG_OUT_FAILURE = `${LOG_OUT}${FAILURE}`;

export const GET_USER_DATA_REQUEST = `${GET_USER_DATA}${REQUEST}`;
export const GET_USER_DATA_SUCCESS = `${GET_USER_DATA}${SUCCESS}`;
export const GET_USER_DATA_FAILURE = `${GET_USER_DATA}${FAILURE}`;

export const CHANGE_USER_DATA_REQUEST = `${CHANGE_USER_DATA}${REQUEST}`;
export const CHANGE_USER_DATA_SUCCESS = `${CHANGE_USER_DATA}${SUCCESS}`;
export const CHANGE_USER_DATA_FAILURE = `${CHANGE_USER_DATA}${FAILURE}`;

export const CHANGE_USER_PASSWORD_REQUEST = `${CHANGE_USER_PASSWORD}${REQUEST}`;
export const CHANGE_USER_PASSWORD_SUCCESS = `${CHANGE_USER_PASSWORD}${SUCCESS}`;
export const CHANGE_USER_PASSWORD_FAILURE = `${CHANGE_USER_PASSWORD}${FAILURE}`;

export const CHANGE_USER_AVATAR_REQUEST = `${CHANGE_USER_AVATAR}${REQUEST}`;
export const CHANGE_USER_AVATAR_SUCCESS = `${CHANGE_USER_AVATAR}${SUCCESS}`;
export const CHANGE_USER_AVATAR_FAILURE = `${CHANGE_USER_AVATAR}${FAILURE}`;

export const INCREASE_GAME_SCORE = `INCREASE_GAME_SCORE`;
export const REDUCE_GAME_LIVES = `REDUCE_GAME_LIVES`;
