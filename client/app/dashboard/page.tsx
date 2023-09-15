import { AccountCard } from '../components/Cards'
import Container from '../components/Container'
import Navbar from '../components/Navbar'

export default function Dashboard() {
  return (
    <>
      <Navbar session={true} />
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 min-h-[88vh] ">
          <div className="md:col-span-2 border-2 border-red-400 h-full">01</div>

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
