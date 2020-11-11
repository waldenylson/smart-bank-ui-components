import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'
Vue.use(Router)
const router = createRouter()
export default router
function createRouter() {
  const router = new Router({
    scrollBehavior,
    mode: 'history',
    routes
  })
  router.beforeEach(beforeEach)
  router.afterEach(afterEach)
  return router
}

//Scroll Behavior
function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) return savedPosition;
  return { x: 0, y: 0 };
}

//Global router guard.
async function beforeEach(to, from, next) {

  let components = []

  try {
    // Get the matched components and resolve them.
    components = await resolveComponents(router.getMatchedComponents({ ...to }))
  } catch (error) {

    if (/^Loading( CSS)? chunk (\d)+ failed\./.test(error.message)) {
      window.location.reload(true)
      return
    }
  }

  if (components.length === 0) {
    return next()
  }

  router.app.$children[0].setLayout(components[0] || '')

  // Start the loading bar.
  if (components[components.length - 1].loading !== false) {
    router.app.$nextTick(() => router.app.$children[0].$loading.start())
  }

  next()
}


// Global after hook.
async function afterEach(to, from, next) {
  await router.app.$nextTick()
  router.app.$children[0].$loading.finish()
}

//Resolve async components.
function resolveComponents(components) {
  return Promise.all(components.map(component => {
    return typeof component === 'function' ? component() : component
  }))
}
