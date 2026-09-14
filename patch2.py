import re

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

# Replacement 1: Revert the mobile icons next to the hamburger
hamburger_bar = """          {/* Mobile dan Tablet Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            {/* Hamburger Menu */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex-shrink-0"
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dan Tablet Drawer Menu */}
"""

# Replace the block from the hamburger comment to the drawer menu comment
content = re.sub(r'\{\/\* Mobile dan Tablet Hamburger Toggle \*\/}.*?\{\/\* Mobile dan Tablet Drawer Menu \*\/}', hamburger_bar, content, flags=re.DOTALL)

# Replacement 2: Inject the buttons into the mobile drawer
drawer_inner = """      {/* Mobile dan Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-[#020617]/98 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5 max-w-lg mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:text-blue-400 py-2.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 border-b border-slate-50 dark:border-slate-800/50"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              </a>
            ))}
            
            <div className="pt-3 flex flex-col gap-2.5 mt-1 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={toggleTheme}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 text-sm font-semibold transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span>Ganti Tema ({theme === 'dark' ? 'Terang' : 'Gelap'})</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-sm font-semibold border border-blue-200 dark:border-blue-500/30"
              >
                <Sparkles className="w-4 h-4" />
                <span>Kalkulator dan Estimasi</span>
              </button>
              
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#25D366] hover:bg-[#1ebd5b] text-white text-sm font-bold shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
                <span>NIB OSS: 1608260012591 Resmi Terverifikasi</span>
              </div>
            </div>
          </div>
        </div>
      )}"""

content = re.sub(r'\{\/\* Mobile dan Tablet Drawer Menu \*\/}.*', drawer_inner + "\n    </header>\n  );\n}\n", content, flags=re.DOTALL)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)

