import Link from "next/link";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="gradient-text primary-gradient">BuildFlow</span>
            </h3>
            <p className="text-gray-400 max-w-xs">
              The AI-powered SaaS platform revolutionizing how construction
              companies manage their operations.
            </p>
            <div className="flex space-x-4">
              <SocialLink
                href="https://twitter.com"
                icon={<FiTwitter />}
                label="Twitter"
              />
              <SocialLink
                href="https://linkedin.com"
                icon={<FiLinkedin />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://github.com"
                icon={<FiGithub />}
                label="GitHub"
              />
              <SocialLink
                href="mailto:contact@buildflow.com"
                icon={<FiMail />}
                label="Email"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">Product</h4>
            <FooterLinks
              links={[
                { href: "/features", label: "Features" },
                { href: "/pricing", label: "Pricing" },
                { href: "/demo", label: "Demo" },
                { href: "/integrations", label: "Integrations" },
              ]}
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">Company</h4>
            <FooterLinks
              links={[
                { href: "/about", label: "About Us" },
                { href: "/story", label: "Our Story" },
                { href: "/blog", label: "Blog" },
                { href: "/careers", label: "Careers" },
              ]}
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">Resources</h4>
            <FooterLinks
              links={[
                { href: "/developers", label: "Developers" },
                { href: "/documentation", label: "Documentation" },
                { href: "/support", label: "Support" },
                { href: "/contact", label: "Contact" },
              ]}
            />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} BuildFlow. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-400 hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
}

function FooterLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
