import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="container-ministry py-24 text-center sm:py-32">
      <p className="font-display text-7xl font-bold text-ruby-200 sm:text-8xl">404</p>
      <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">We could not find that page</h1>
      <p className="mx-auto mt-3 max-w-md text-lg text-ink-600">
        The page you are looking for may have moved — but you are still welcome here. Let us help you find your
        way.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/">Back to home</Button>
        <Button variant="secondary" to="/connection">
          Get connected
        </Button>
      </div>
    </section>
  )
}
