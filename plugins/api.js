import createRepository from '@/service/api'
export default (ctx, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)
  const repositoryWithAxios = createRepository(ctx.$axios)
  inject('api', {
    projects: repositoryWithAxios('/projects'),
    units: repositoryWithAxios('/units'),
    schools: repositoryWithAxios('/schools'),
  })
}
