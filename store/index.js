export const state = () => ({
  meta: {},
})

export const mutations = {
  SET_META(state, meta) {
    state.meta = {
      ...this.state.meta,
      ...meta,
    }
  },
}
