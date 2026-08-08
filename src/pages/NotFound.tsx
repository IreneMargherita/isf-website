import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="container-ministry py-24 text-center sm:py-32">
      <p className="font-display text-7xl font-bold text-coral-200 sm:text-8xl">404</p>
      <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">We couldn’t find that page</h1>
      <p className="mx-auto mt-3 max-w-md text-lg text-ink-600">
        That page may have moved. You’re still welcome here though. Let’s get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/">Back to home</Button>
        <Button variant="secondary" to="/connection">
          Say hello
        </Button>
      </div>
    </section>
  )
}
