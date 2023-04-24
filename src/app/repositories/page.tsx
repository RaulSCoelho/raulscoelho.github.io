import { Repo } from '@/components/Repo'
import { getRepos } from '@/lib/repos'

export const metadata = {
  title: 'Repositories'
}

export default async function Repositories() {
  const repos = await getRepos()

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Repositories</h1>
      <div className="pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full overflow-auto scrollbar scrollbar-thumb-[#ffffff4b] scrollbar-track-transparent">
        {repos?.map(repo => (
          <Repo repo={repo} key={repo.id} />
        ))}
      </div>
    </>
  )
}