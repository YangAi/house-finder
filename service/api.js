// Provide nuxt-axios instance to use same configuration across the whole project
// I've used typical CRUD method names and actions here
export default ($axios) => (resource) => ({
  get(uri, params) {
    return $axios.$get(`${resource}/${uri}`, { params })
  },

  post(uri, payload) {
    return $axios.$post(`${resource}/${uri}`, payload)
  },

  index() {
    return $axios.$get(`${resource}`)
  },

  show(id, params) {
    return $axios.$get(`${resource}/${id}`, { params })
  },

  create(payload) {
    return $axios.$post(`${resource}`, payload)
  },

  update(id, payload) {
    return $axios.$put(`${resource}/${id}`, payload)
  },

  delete(id) {
    return $axios.$delete(`${resource}/${id}`)
  },
})
