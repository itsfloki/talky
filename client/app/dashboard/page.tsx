import { AccountCard, PostCard } from '../components/Cards'
import Container from '../components/Container'
import Navbar from '../components/Navbar'

export default function Dashboard() {
  return (
    <>
      <Navbar session={true} />

      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="md:col-span-2 h-[85vh] overflow-y-auto">
            {new Array(15).fill('post-card-').map((i, idx) => (
              <PostCard key={i + idx} />
            ))}
          </div>

          <div className="h-max">
            <h3 className="text-lg font-semibold">Top accounts</h3>

            <div>
              {new Array(5).fill('acc-card-').map((i, idx) => (
                <AccountCard key={i + idx} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
