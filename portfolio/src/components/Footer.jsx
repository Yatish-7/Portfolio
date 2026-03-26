export default function Footer() {
  return (
    <footer className="footer-pro bg-black text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-3 text-center">
        <p className="footer-copy text-xs sm:text-sm text-white/95 tracking-wide">
          © {new Date().getFullYear()} Yatish Datta. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
