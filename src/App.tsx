import GradientBlinds from '@/components/GradientBlinds/GradientBlinds'

const assets = {
  logo: '/home-assets/logo.png',
  button: '/home-assets/button.png',
  signature: '/home-assets/signature.png',
  shiqi: '/home-assets/shiqi.png',
  work: '/home-assets/work.png',
  stars: '/home-assets/stars.png',
}

function App() {
  return (
    <main className="relative h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 z-0">
        <GradientBlinds
          className="absolute inset-0 h-full w-full"
          gradientColors={['#ff601d', '#000000']}
          angle={20}
          noise={0.25}
          blindCount={20}
          blindMinWidth={60}
          mouseDampening={0.3}
          mirrorGradient={false}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          distortAmount={0}
          shineDirection="left"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/30" />
      </div>

      <section className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6">
        <div className="relative w-full max-w-[1440px]">
          <div className="relative mx-auto aspect-[1440/900] w-full">
            <img
              src={assets.logo}
              alt=""
              className="absolute left-[1.22%] top-[1.37%] w-[17.2%] max-w-[248px] select-none"
              draggable="false"
            />

            <img
              src={assets.stars}
              alt=""
              className="absolute left-[65.35%] top-[22.44%] w-[9.03%] max-w-[130px] select-none"
              draggable="false"
            />

            <img
              src={assets.shiqi}
              alt=""
              className="absolute left-1/2 top-[27.7%] w-[34.4%] max-w-[490px] -translate-x-1/2 select-none"
              draggable="false"
            />

            <img
              src={assets.work}
              alt=""
              className="absolute left-[6.25%] top-[40.22%] w-[85.55%] max-w-[1232px] select-none"
              draggable="false"
            />

            <img
              src={assets.signature}
              alt=""
              className="absolute left-[71.74%] top-[56.44%] w-[18.9%] max-w-[272px] select-none"
              draggable="false"
            />

            <button
              type="button"
              className="absolute left-1/2 top-[70.67%] z-20 w-[14.31%] min-w-[132px] max-w-[206px] -translate-x-1/2 transition-transform duration-200 hover:scale-[1.02] focus:outline-none"
            >
              <img
                src={assets.button}
                alt="开始使用"
                className="block w-full select-none"
                draggable="false"
              />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
