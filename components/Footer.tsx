import { Receipt } from "lucide-react";

const LOGIN_URL = "https://app.xolacloud.com/login";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 font-display text-base font-700 text-ink">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ink text-paper">
                <Receipt size={14} />
              </span>
              XolaCloud
            </div>
            <p className="mt-3 text-sm text-char/55">
              Multi-branch POS and ERP for restaurants and cafés, built and
              supported in Nepal.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-char/40">
                Product
              </div>
              <ul className="mt-3 space-y-2 text-sm text-char/65">
                <li><a href="#features" className="hover:text-ink">Features</a></li>
                <li><a href="#pricing" className="hover:text-ink">Pricing</a></li>
                <li><a href={LOGIN_URL} className="hover:text-ink">Log in</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-char/40">
                Company
              </div>
              <ul className="mt-3 space-y-2 text-sm text-char/65">
                <li><a href="#" className="hover:text-ink">About</a></li>
                <li><a href="#faq" className="hover:text-ink">FAQ</a></li>
                <li><a href="mailto:hello@xolacloud.com" className="hover:text-ink">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-char/40">
                Legal
              </div>
              <ul className="mt-3 space-y-2 text-sm text-char/65">
                <li><a href="#" className="hover:text-ink">Privacy</a></li>
                <li><a href="#" className="hover:text-ink">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-char/45">
            &copy; {new Date().getFullYear()} XolaCloud. All rights reserved.
          </p>
          <p className="text-xs text-char/45">Made for restaurants in Nepal 🇳🇵</p>
        </div>
      </div>
    </footer>
  );
}
