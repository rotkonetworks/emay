import { lazy } from 'solid-js'
import { Route } from '@solidjs/router'

const HomePage = lazy(() => import('./pages/HomePage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))
const SupportPage = lazy(() => import('./pages/SupportPage'))

export default function App() {
  return (
    <>
      <Route path="/" component={HomePage} />
      <Route path="/:locale" component={HomePage} />
      <Route path="/:locale/blog" component={BlogPage} />
      <Route path="/:locale/blog/:slug" component={BlogPostPage} />
      <Route path="/:locale/support" component={SupportPage} />
    </>
  )
}
