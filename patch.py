import re

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

replacement = """          {/* Mobile dan Tablet Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 flex-shrink-0"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick Estimate Button (Mobile) */}
            <button
              type="button"
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-1 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 flex-shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] sm:text-xs font-bold hidden xs:inline">Estimasi</span>
            </button>

            {/* WhatsApp Button (Mobile) */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-[#25D366] hover:bg-[#1ebd5b] text-white flex-shrink-0 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-[10px] sm:text-xs font-bold hidden xs:inline">WA</span>
            </a>

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
            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-5 mt-2 border-t border-slate-100 dark:border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
              <span>NIB OSS: 1608260012591 Resmi Terverifikasi</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
"""

content = re.sub(r'\{\/\* Mobile dan Tablet Hamburger Toggle \*\/}.*', replacement, content, flags=re.DOTALL)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)
