import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import DashboardMockup from '@/components/DashboardMockup'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in text-center lg:text-left">
            <span className="eyebrow">CRM · ERP · Workflow Automation</span>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
              We build the CRM, ERP and automation systems that get your company off spreadsheets.
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-soft lg:mx-0">
              Custom software for companies still running sales, inventory, and operations through manual work and Excel. Fewer errors, faster reporting, systems that scale with you.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary px-8 py-6 text-base font-semibold text-primary-foreground shadow-cesta-glow transition-smooth hover:bg-primary/90"
                >
                  Request a 20-min process audit
                </Button>
              </Link>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="glass-card rounded-2xl p-4 md:p-6">
              <DashboardMockup />
            </div>
            <p className="mt-3 text-center text-xs text-soft lg:text-left">
              Illustrative example — not an actual client project
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
