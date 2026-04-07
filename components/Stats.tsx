const stats = [
  { value: '500+', label: 'Hours Completed' },
  { value: '200+', label: 'Happy Clients' },
  { value: '350+', label: 'Completed Jobs' },
  { value: '100%', label: 'Safety Record' },
]

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl lg:text-7xl text-primary tracking-wider">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm sm:text-base mt-2 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
