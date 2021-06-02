export default ({ route, app }) => {
  if (route.meta[0] && Object.keys(route.meta[0]).length) {
    app.store.commit('SET_META', route.meta[0])
  }
}
