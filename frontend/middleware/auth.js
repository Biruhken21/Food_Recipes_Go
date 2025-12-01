export default defineNuxtRouteMiddleware((to) => {
  const token = localStorage.getItem('jwt')
  if (!token && !['/login', '/register'].includes(to.path)) {
    return navigateTo('/login')
  }
})
