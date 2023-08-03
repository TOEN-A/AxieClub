import Auth from '../components/sample/auth'

export default async function AuthPage() {
  return (
    <main
      className={`flex h-[calc(100vh-56px)] flex-col items-center justify-center`}
    >
      <Auth />
    </main>
  )
}
