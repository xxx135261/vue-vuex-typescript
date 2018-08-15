import {
    SET_HISTORY_KEY,
    SAVE_LOVE,
    GET_SONG,
    SHOW_PLAYER,
    CANCEL_PLAYER,
    SET_PLAYING_STATE
} from './mutation-types';
import { ActionTree, Action } from 'vuex';

// 存储历史记录
const setLocalStorageData: Action<any, any> = ({ commit }, payload) => {
    commit(SET_HISTORY_KEY, payload);
};

const getSong: Action<any, any> = ({ commit }, payload) => {
    commit(GET_SONG, payload);
};

const showPlayer: Action<any, any> = ({ commit }) => {
    commit(SHOW_PLAYER);
};
// 存储收藏的歌曲（触发mutation中的SAVE_LOVE事件
const setLocalStorageData2: Action<any, any> = ({ commit }, payload) => {
    commit(SAVE_LOVE, payload);
};

const cancelPlayer: Action<any, any> = ({ commit }) => {
    commit(CANCEL_PLAYER);
};

const setPlayState: Action<any, any> = ({ commit }, payload) => {
    commit(SET_PLAYING_STATE, payload);
};

const actions: ActionTree<any, any> = {
    setLocalStorageData,
    setLocalStorageData2,
    getSong,
    showPlayer,
    cancelPlayer,
    setPlayState
};
export default actions;
