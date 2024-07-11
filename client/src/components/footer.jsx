export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </p>
      <span
        class="material-symbols-outlined"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        arrow_upward
      </span>
    </footer>
  );
}
